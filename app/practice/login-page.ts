// Sign-in screen for /practice. A standalone HTML page in the site's monochrome style,
// so it loads instantly without the portfolio's scripts.

// These pages are plain HTML, so Next.js doesn't add the site icon tags for them.
export const ICON_LINKS =
  '<link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-icon.png">'

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

export function loginPage({ error, notice, username = "" }: { error?: string; notice?: string; username?: string }) {
  const message = error
    ? `<p class="msg err" role="alert">${escape(error)}</p>`
    : notice
      ? `<p class="msg" role="status">${escape(notice)}</p>`
      : ""

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Sign in · Practice</title>
${ICON_LINKS}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@500&display=swap">
<style>
  :root {
    --bg: #ffffff; --fg: #0b0b0c; --dim: #71717a; --line: rgba(0,0,0,.10); --line2: rgba(0,0,0,.18);
    --surf: rgba(0,0,0,.035); --btn-bg: #0b0b0c; --btn-fg: #ffffff; --err: #dc2626;
    color-scheme: light;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #000000; --fg: #ffffff; --dim: #8b8b93; --line: rgba(255,255,255,.10); --line2: rgba(255,255,255,.22);
      --surf: rgba(255,255,255,.035); --btn-bg: #ffffff; --btn-fg: #000000; --err: #f87171;
      color-scheme: dark;
    }
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; height: 100%; }
  body {
    background: var(--bg); color: var(--fg);
    font-family: "Geist", system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased;
    display: grid; place-items: center; padding: 24px max(20px, env(safe-area-inset-left));
  }
  main { width: 100%; max-width: 380px; display: grid; gap: 28px; }
  .site { font-family: "Geist Mono", ui-monospace, monospace; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--dim); text-decoration: none; }
  .site:hover { color: var(--fg); }
  h1 { margin: 0; font-size: 40px; font-weight: 700; letter-spacing: -.03em; line-height: 1.05; }
  .sub { margin: 10px 0 0; color: var(--dim); font-size: 15px; line-height: 1.5; }
  form { display: grid; gap: 14px; }
  label { display: grid; gap: 6px; font-size: 13px; font-weight: 500; color: var(--dim); }
  input {
    font: inherit; font-size: 15px; color: var(--fg); background: var(--surf);
    border: 1px solid var(--line2); border-radius: 12px; padding: 12px 14px; outline: none;
    transition: border-color .15s;
  }
  input:focus { border-color: var(--fg); }
  button {
    font: inherit; font-size: 15px; font-weight: 600; margin-top: 6px; height: 46px; border: 0; border-radius: 999px;
    background: var(--btn-bg); color: var(--btn-fg); cursor: pointer; transition: opacity .15s;
  }
  button:hover { opacity: .85; }
  button:focus-visible, input:focus-visible, .site:focus-visible { outline: 2px solid var(--fg); outline-offset: 2px; }
  .msg { margin: 0; font-size: 14px; color: var(--dim); }
  .msg.err { color: var(--err); }
  .foot { margin: 0; font-size: 13px; color: var(--dim); border-top: 1px solid var(--line); padding-top: 18px; }
</style>
</head>
<body>
<main>
  <div>
    <a class="site" href="/">rishavdev.in</a>
    <h1 style="margin-top:14px">Practice</h1>
    <p class="sub">Private study space. Sign in to continue.</p>
  </div>
  <form method="post" action="/practice">
    ${message}
    <label>Username
      <input name="username" autocomplete="username" autocapitalize="none" spellcheck="false" required value="${escape(username)}" ${username ? "" : "autofocus"}>
    </label>
    <label>Password
      <input name="password" type="password" autocomplete="current-password" required ${username ? "autofocus" : ""}>
    </label>
    <button type="submit">Sign in</button>
  </form>
  <p class="foot">You'll stay signed in on this device for 30 days.</p>
</main>
</body>
</html>`
}
