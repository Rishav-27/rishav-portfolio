import { createHash, createHmac, timingSafeEqual } from "node:crypto"
import { NextRequest, NextResponse } from "next/server"
import { ICON_LINKS, loginPage } from "./login-page"

// Private study page. The HTML lives in a private GitHub repo and is fetched per request,
// so none of it is in this (public) repo. Signing in sets a signed cookie for 30 days.
// /practice?logout signs out.
//
// Vercel env vars:
//   PRACTICE_PASSWORD      required; the login password (changing it signs every device out)
//   PRACTICE_USER          optional; the login name (defaults to "rishav")
//   PRACTICE_GITHUB_TOKEN  required; fine-grained token with read-only Contents on the repo below

export const dynamic = "force-dynamic"

const SOURCE = "https://api.github.com/repos/Rishav-27/infosys-sp-dse-prep/contents/practice.html"
const COOKIE = "practice_session"
const MAX_AGE = 30 * 24 * 60 * 60

const privateHeaders = {
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex, nofollow",
}

function sameText(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

// The session is "<expiry>.<signature>", signed with a key derived from the password.
function sign(value: string, password: string) {
  const key = createHash("sha256").update(`practice-session:${password}`).digest()
  return createHmac("sha256", key).update(value).digest("base64url")
}

function hasSession(req: NextRequest, password: string) {
  const raw = req.cookies.get(COOKIE)?.value
  if (!raw) return false
  const dot = raw.lastIndexOf(".")
  const expires = raw.slice(0, dot)
  return dot > 0 && sameText(raw.slice(dot + 1), sign(expires, password)) && Number(expires) > Date.now()
}

function html(body: string, status = 200) {
  return new NextResponse(body, {
    status,
    headers: { ...privateHeaders, "Content-Type": "text/html; charset=utf-8" },
  })
}

function config() {
  const password = process.env.PRACTICE_PASSWORD
  const token = process.env.PRACTICE_GITHUB_TOKEN
  if (!password || !token) return null
  return { password, token, user: process.env.PRACTICE_USER || "rishav" }
}

export async function GET(req: NextRequest) {
  const cfg = config()
  if (!cfg) return new NextResponse("Not available", { status: 503, headers: privateHeaders })

  if (req.nextUrl.searchParams.has("logout")) {
    const res = html(loginPage({ notice: "You're signed out." }), 401)
    res.cookies.delete({ name: COOKIE, path: "/practice" })
    return res
  }
  if (!hasSession(req, cfg.password)) return html(loginPage({}), 401)

  const page = await loadPage(cfg.token)
  if (page === null) {
    return new NextResponse("Could not load the practice page. Refresh to try again.", { status: 502, headers: privateHeaders })
  }
  return html(page.replace("</head>", `${ICON_LINKS}</head>`))
}

// Fetch the page from the private repo, retrying once if GitHub drops the connection.
async function loadPage(token: string) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(SOURCE, {
        cache: "no-store",
        headers: {
          Accept: "application/vnd.github.raw",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "rishavdev.in",
        },
      })
      if (res.ok) return await res.text()
      if (res.status < 500) return null // bad token or missing file: retrying won't help
    } catch {
      // network error: try once more
    }
  }
  return null
}

export async function POST(req: NextRequest) {
  const cfg = config()
  if (!cfg) return new NextResponse("Not available", { status: 503, headers: privateHeaders })

  const form = await req.formData()
  const user = String(form.get("username") ?? "")
  const password = String(form.get("password") ?? "")
  // Check both parts every time so the response time doesn't hint which one was wrong.
  const userOk = sameText(user, cfg.user)
  const passwordOk = sameText(password, cfg.password)
  if (!userOk || !passwordOk) {
    await new Promise((r) => setTimeout(r, 800)) // slows down password guessing
    return html(loginPage({ error: "That username or password isn't right.", username: user }), 401)
  }

  const expires = String(Date.now() + MAX_AGE * 1000)
  const res = NextResponse.redirect(new URL("/practice", req.url), 303)
  res.cookies.set(COOKIE, `${expires}.${sign(expires, cfg.password)}`, {
    httpOnly: true,
    secure: req.nextUrl.protocol === "https:",
    sameSite: "lax",
    path: "/practice",
    maxAge: MAX_AGE,
  })
  return res
}
