import { timingSafeEqual } from "node:crypto"

// Private study page. The HTML lives in a private GitHub repo and is fetched per request,
// so none of it is in this (public) repo. Access needs the Basic Auth login below.
//
// Vercel env vars:
//   PRACTICE_PASSWORD      required; the login password
//   PRACTICE_USER          optional; the login name (defaults to "rishav")
//   PRACTICE_GITHUB_TOKEN  required; fine-grained token with read-only Contents on the repo below

export const dynamic = "force-dynamic"

const SOURCE = "https://api.github.com/repos/Rishav-27/infosys-sp-dse-prep/contents/practice.html"

function sameText(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

function isAuthorized(header: string | null, user: string, password: string) {
  if (!header?.startsWith("Basic ")) return false
  const decoded = Buffer.from(header.slice(6), "base64").toString("utf8")
  const split = decoded.indexOf(":")
  if (split < 0) return false
  // Check both parts every time so the response time doesn't hint which one was wrong.
  const userOk = sameText(decoded.slice(0, split), user)
  const passwordOk = sameText(decoded.slice(split + 1), password)
  return userOk && passwordOk
}

const privateHeaders = {
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex, nofollow",
}

export async function GET(req: Request) {
  const password = process.env.PRACTICE_PASSWORD
  const token = process.env.PRACTICE_GITHUB_TOKEN
  if (!password || !token) {
    // Fail closed until the env vars are set.
    return new Response("Not available", { status: 503, headers: privateHeaders })
  }

  const user = process.env.PRACTICE_USER || "rishav"
  if (!isAuthorized(req.headers.get("authorization"), user, password)) {
    return new Response("Login required", {
      status: 401,
      headers: { ...privateHeaders, "WWW-Authenticate": 'Basic realm="Practice", charset="UTF-8"' },
    })
  }

  const res = await fetch(SOURCE, {
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github.raw",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "rishavdev.in",
    },
  })
  if (!res.ok) {
    return new Response("Could not load the practice page", { status: 502, headers: privateHeaders })
  }

  return new Response(await res.text(), {
    headers: { ...privateHeaders, "Content-Type": "text/html; charset=utf-8" },
  })
}
