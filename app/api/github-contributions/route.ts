import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

type Activity = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }

function parseCount(tooltip: string): number {
  const m = tooltip.match(/^(\d+)\s+contribution/)
  return m ? parseInt(m[1], 10) : 0
}

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username")
  if (!username) {
    return NextResponse.json({ error: "username is required" }, { status: 400 })
  }

  const res = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
    cache: "no-store",
    headers: { "User-Agent": "Mozilla/5.0" },
  })
  if (!res.ok) {
    return NextResponse.json({ error: "failed to fetch contributions" }, { status: 502 })
  }
  const html = await res.text()

  const dayRe = /<td[^>]*data-date="([\d-]+)"[^>]*id="([^"]+)"[^>]*data-level="(\d)"/g
  const days: { date: string; id: string; level: 0 | 1 | 2 | 3 | 4 }[] = []
  let m: RegExpExecArray | null
  while ((m = dayRe.exec(html))) {
    days.push({ date: m[1], id: m[2], level: Number(m[3]) as 0 | 1 | 2 | 3 | 4 })
  }

  const tipRe = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)</g
  const tooltips = new Map<string, string>()
  while ((m = tipRe.exec(html))) {
    tooltips.set(m[1], m[2])
  }

  const contributions: Activity[] = days.map((d) => ({
    date: d.date,
    count: parseCount(tooltips.get(d.id) ?? ""),
    level: d.level,
  }))

  const total = contributions.reduce((sum, d) => sum + d.count, 0)

  return NextResponse.json(
    { total: { lastYear: total }, contributions },
    { headers: { "Cache-Control": "no-store" } },
  )
}
