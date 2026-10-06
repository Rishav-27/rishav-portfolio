export const header = {
  name: "Rishav Kumar",
  title: "Full-Stack Software Engineer",
  resumeTitle: "Full Stack Software Engineer",
  email: "rishav9707@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishav27/",
  github: "https://github.com/Rishav-27",
  instagram: "https://www.instagram.com/1227_rishi.k",
  portfolio: "https://rishavdev.in/",
  location: "Jamshedpur, Jharkhand",
  openTo: "Open to full-time / remote · open to relocate",
  // Drop the exported PDFs into /public with these filenames so the
  // downloadable resume and this data file never drift apart.
  resumePdf: "/Rishav-Kumar-Resume.pdf",
  resumePdfModern: "/Rishav-Kumar-Resume-Modern.pdf",
};

/** Single source of truth for the resume summary — reused by the PDF and the site. */
export const summary =
  "Full Stack Software Engineer with 1+ year shipping production SaaS in React, Next.js, TypeScript and Node.js. Own frontend architecture, REST API integration and PostgreSQL data modelling across two live products at WebbyWolf Innovations — an AI answer-engine optimization platform and a 250,000-listing publisher marketplace. Strong in performance optimization, SSR and caching, responsive design, accessibility and SEO, delivered in Agile/Scrum with code review and CI/CD.";

export type Project = {
  num: string;
  /** Anchor id used by /projects#<slug> — the case-study link printed on the resume. */
  slug: string;
  year: string;
  title: string;
  kind: "Team project" | "Personal project" | "In progress";
  kicker: string;
  img?: string;
  /** true when img is a transparent cut-out that should sit on the page with no card behind it */
  bare?: boolean;
  /** optional wider variant for the full-width cards on /projects */
  imgWide?: string;
  role: string;
  team: string;
  hard: string;
  description: string;
  items: string[];
  tech: string[];
  github?: string;
  live?: string;
  /** App screenshots shown in the case study on /projects */
  shots?: { src: string; caption: string; device: "desktop" | "mobile" }[];
  /** true when this project is one of the three printed on the resume */
  onResume?: boolean;
};

export const projects: Project[] = [
  {
    num: "01",
    slug: "roledock",
    year: "2026",
    title: "RoleDock",
    kind: "Personal project",
    kicker: "Job-search tracker for phone and desktop · My own product",
    img: "/roledock.png",
    bare: true,
    role: "Founder and sole engineer",
    team: "Solo",
    hard: "A private, offline-first job tracker that stays in sync across devices",
    description:
      "A job-hunt companion that tracks applications, keeps every document form-ready and reminds you before follow-ups slip — with your documents stored only on your own device.",
    items: [
      "Built an application pipeline with status stages, interview rounds, recruiter contacts, notes timeline, and source and job-ID auto-fill from LinkedIn, Naukri and Indeed links.",
      "Shipped an on-device document vault with masked numbers, expiry reminders, and tools to crop, compress to a target size, convert and combine files into a PDF.",
      "Added scheduled native notifications, PIN and biometric lock, screenshot blocking and one-file zip backup and restore.",
      "Delivered one React codebase as an offline-capable PWA and a Capacitor Android app, with optional Supabase sync for applications and saved jobs.",
    ],
    shots: [
      { src: "/roledock/d-today.png", caption: "Today — goal, interviews and reminders (desktop)", device: "desktop" },
      { src: "/roledock/d-applications.png", caption: "Application pipeline (desktop)", device: "desktop" },
      { src: "/roledock/d-detail.png", caption: "Application detail with interview rounds (desktop)", device: "desktop" },
      { src: "/roledock/d-vault.png", caption: "Document vault (desktop)", device: "desktop" },
      { src: "/roledock/m-today.png", caption: "Today", device: "mobile" },
      { src: "/roledock/m-applications.png", caption: "Applications", device: "mobile" },
      { src: "/roledock/m-detail.png", caption: "Interview rounds and timeline", device: "mobile" },
      { src: "/roledock/m-saved.png", caption: "Saved for later", device: "mobile" },
      { src: "/roledock/m-vault.png", caption: "Document vault", device: "mobile" },
      { src: "/roledock/m-notes.png", caption: "Notes and reminders", device: "mobile" },
    ],
    tech: [
      "React",
      "TypeScript",
      "Capacitor",
      "IndexedDB",
      "Supabase",
      "PWA",
    ],
    // Repo is private — make it public and add the URL here.
  },
  {
    num: "02",
    slug: "ledgerx",
    year: "2026",
    title: "LedgerX",
    kind: "Personal project",
    kicker: "Offline GST billing & accounting desktop app · My own product",
    img: "/ledgerx.png",
    role: "Founder and sole engineer",
    team: "Solo",
    hard: "Double-entry books and GST returns that always reconcile, fully offline",
    description:
      "GST billing, inventory and accounting for Indian businesses — a desktop app that works without internet and keeps every company's books on the user's own computer.",
    items: [
      "Built GST sales and purchase invoicing with CGST/SGST vs IGST from place of supply, credit/debit notes, orders and customisable print, PDF and thermal bill formats.",
      "Engineered true double-entry books on a Tally-style chart of accounts — every voucher must balance — with trial balance, P&L and balance sheet.",
      "Generated GSTR-1 and GSTR-3B returns with CSV export, plus live inventory valued at weighted average cost.",
      "Made the books tamper-evident: versioned bill alterations, an audit trail of every entry and login, and GSTIN check-digit validation.",
    ],
    tech: [
      "Electron",
      "React",
      "TypeScript",
      "SQLite",
      "Tailwind CSS",
      "Vitest",
    ],
    // Repo is private — make it public and add the URL here.
  },
  {
    num: "03",
    slug: "huddle",
    year: "2026",
    title: "Huddle",
    kind: "Personal project",
    kicker: "Private, end-to-end encrypted messenger · My own product",
    img: "/huddle-ios.png",
    bare: true,
    imgWide: "/huddle-ios-wide.png",
    role: "Founder and sole engineer — Android, iOS and relay server",
    team: "Solo",
    hard: "A relay that, if breached or seized, holds nothing worth reading",
    description:
      "A messenger with no phone number and post-quantum end-to-end encryption, where the server only ever sees ciphertext and forgets each message once it's delivered.",
    items: [
      "Integrated the Signal Protocol via libsignal — PQXDH key agreement with Kyber-1024 and the Double Ratchet, so every message has its own key.",
      "Built a Rust/Axum relay serving prekey bundles and per-device mailboxes that delete each message on acknowledgement.",
      "Shipped native apps in Kotlin + Jetpack Compose and SwiftUI: chats, replies, reactions, read receipts, typing indicators, disappearing messages and 24-hour statuses.",
      "Hardened the client with message padding, Argon2id + XChaCha20-Poly1305 encrypted backups, PIN lock with escalating lockout, screenshot protection and safety-number verification.",
    ],
    tech: [
      "Rust",
      "Axum",
      "Kotlin",
      "Jetpack Compose",
      "SwiftUI",
      "libsignal",
    ],
    // Repo is private — make it public and add the URL here.
  },
  {
    num: "04",
    slug: "gym-desk",
    year: "2026",
    title: "Gym Desk",
    kind: "Personal project",
    kicker: "Offline gym management app for iPhone & Android · My own product",
    role: "Founder and sole engineer",
    team: "Solo",
    hard: "Reliable QR check-in and fee tracking for gym owners, fully offline",
    description:
      "A mobile app for gym owners to register members, track fees and record attendance by scanning each member's QR pass — all data stays on the phone and it works without internet.",
    items: [
      "Built member registration with photo, plan, admission fee and first payment, plus search and filters for active, expiring, fee-due and in-gym members.",
      "Shipped QR attendance where each scan toggles check-in and check-out, ignores repeat scans within 60 seconds and warns about expired plans or balances due.",
      "Implemented plan renewals, partial payments, balances, WhatsApp fee reminders and monthly collection totals.",
      "Added an attendance log with live in-gym counts, average workout time, configurable plans and CSV export of members, payments and attendance.",
    ],
    shots: [
      { src: "/gymdesk/m-welcome.png", caption: "Welcome", device: "mobile" },
      { src: "/gymdesk/m-dashboard.png", caption: "Dashboard — live in-gym count and fee summary", device: "mobile" },
      { src: "/gymdesk/m-members.png", caption: "Members with status filters", device: "mobile" },
      { src: "/gymdesk/m-member.png", caption: "Member profile and membership", device: "mobile" },
      { src: "/gymdesk/m-qr.png", caption: "Shareable QR member pass", device: "mobile" },
      { src: "/gymdesk/m-checkin.png", caption: "Manual check-in and check-out", device: "mobile" },
      { src: "/gymdesk/m-fees.png", caption: "Fees due with WhatsApp reminders", device: "mobile" },
      { src: "/gymdesk/m-timings.png", caption: "Setup — shifts and timings", device: "mobile" },
      { src: "/gymdesk/m-plans.png", caption: "Setup — plans and fees", device: "mobile" },
    ],
    tech: ["Expo", "React Native", "TypeScript", "SQLite", "Expo Router"],
    github: "https://github.com/Rishav-27/gymdesk",
  },
  {
    num: "05",
    slug: "cvora",
    year: "2026",
    title: "CVora",
    kind: "Personal project",
    kicker: "AI resume builder · My own product",
    img: "/cvora.png",
    role: "Founder and sole engineer",
    team: "Solo",
    hard: "PDF output that survives every ATS parser",
    description:
      "A resume builder with form-driven editing, AI job-tailoring, live preview and clean PDF export — built to be sold.",
    items: [
      "Architected a form-to-preview editor with live rendering across the whole document.",
      "Built an AI rewrite pass that tailors bullets and keywords to a pasted job description.",
      "Implemented ATS match scoring with keyword-coverage reporting and version history per rewrite.",
      "Shipped pixel-accurate PDF export via Puppeteer.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI SDK",
      "Puppeteer",
      "Tailwind CSS",
    ],
    live: "https://cvora-phi.vercel.app/",
    // TODO: paste the real repo URL — this project exists on GitHub.
    // github: "https://github.com/Rishav-27/<cvora-repo>",
  },
  {
    num: "06",
    slug: "sk-enterprises",
    year: "2026",
    title: "SK Enterprises",
    kind: "Personal project",
    kicker: "Manufacturing & trading company site · Family business",
    img: "/skenterprises.png",
    role: "Sole engineer — full stack",
    team: "Solo",
    hard: "Making a manufacturing and trading business feel credible online, fast",
    description:
      "A marketing site for our family's manufacturing and trading business, built to give the company a fast, professional web presence and a clear way for buyers to get in touch.",
    items: [
      "Built a Next.js site with product and catalog sections for the company's manufacturing and trading lines.",
      "Implemented enquiry and contact forms with React Hook Form and Zod validation.",
      "Engineered scroll-driven animation and page transitions with GSAP and Framer Motion.",
      "Shipped smooth-scroll and carousel-based product showcases.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    live: "https://skenterprises-g2k2z0ru9-rishav-kumars-projects-f6216bfd.vercel.app/",
    // TODO: paste the real repo URL — this project exists on GitHub.
    // github: "https://github.com/Rishav-27/<sk-enterprises-repo>",
  },
  {
    num: "07",
    slug: "forge",
    year: "2026",
    title: "Forge",
    kind: "In progress",
    kicker: "Gym & workout app",
    role: "Sole engineer — full stack",
    team: "Solo",
    hard: "Logging a set in under three taps, mid-workout",
    description:
      "Workout plans, an exercise library and progress tracking, built so logging a set takes seconds between reps.",
    items: [
      "Implemented auth and profile setup on Supabase.",
      "Building a workout plan builder and a structured exercise library.",
      "Designed a fast set-logging flow for one-handed use.",
      "Shipping progress tracking across weeks.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    num: "08",
    slug: "aeoix",
    year: "2026",
    title: "Aeoix",
    kind: "Team project",
    kicker: "Answer Engine Optimization platform · Team project at WebbyWolf",
    img: "/aeoix.png",
    role: "Frontend engineering — marketing site and in-app surfaces",
    team: "WebbyWolf product team",
    hard: "Keeping 8 engines of daily-refreshed data legible on one screen",
    description:
      "A SaaS platform that tracks how ChatGPT, Perplexity, Gemini and five more answer engines respond for a brand's category, then converts that data into a ranked, do-this-next action plan.",
    items: [
      "Engineered Next.js App Router pages with server-side rendering for fast first paint and clean indexing.",
      "Built server-rendered dashboards surfacing daily-refreshed ranking, share-of-voice and sentiment data across 8 AI answer engines.",
      "Implemented the actions kanban and outreach pipeline UI that turn tracking data into a ranked action plan.",
      "Integrated Supabase authentication, sessions and PostgreSQL-backed queries behind the reporting views.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "GSAP",
      "Tailwind CSS",
    ],
    live: "https://aeoix.com/",
    onResume: true,
  },
  {
    num: "09",
    slug: "linkova",
    year: "2026",
    title: "Linkova",
    kind: "Team project",
    kicker: "Publisher marketplace, 250k+ listings · Team project at WebbyWolf",
    img: "/linkova.png",
    role: "Frontend engineering — catalog search and ordering flows",
    team: "WebbyWolf product team",
    hard: "Faceted search staying instant across a 250,000-row catalog",
    description:
      "A link marketplace for agencies and in-house SEO teams: filter a 250,000-publisher catalog across 150+ countries, brief an AI scout, or run competitor gap analysis.",
    items: [
      "Engineered faceted search over a 250,000+ publisher catalog across 150+ countries — domain rating, traffic, country, topic and budget — without blocking the UI.",
      "Built the interactive world-coverage map and per-country catalog depth views.",
      "Delivered the TipTap article editor, EN/DE localisation with next-intl and the cart-to-live-URL order workflow.",
      "Integrated REST endpoints for publisher discovery and order management with the backend team.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "AI SDK",
      "TipTap",
      "next-intl",
      "Tailwind CSS",
    ],
    live: "https://linkova.club/",
    onResume: true,
  },
  {
    num: "10",
    slug: "tradeverse",
    year: "2025",
    title: "TradeVerse",
    kind: "Personal project",
    kicker: "Real-time trading platform · Personal project",
    img: "/tradeverse_ui.png",
    role: "Sole engineer — full stack",
    team: "Solo",
    hard: "Thousands of concurrent price streams without dropping frames",
    description:
      "A trading app that streams live market data and settles positions without the UI ever stalling.",
    items: [
      "Built a WebSocket transport layer sustaining thousands of concurrent live price streams.",
      "Designed REST APIs for trades, portfolio performance and transaction history.",
      "Secured sessions with JWT over HTTP-only cookies.",
      "Shipped a real-time P&L engine computing analytics on open positions.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
    // Not on GitHub yet — push it and add the URL here.
  },
  {
    num: "11",
    slug: "real-estate-platform",
    year: "2025",
    title: "Real Estate Platform",
    kind: "Personal project",
    kicker: "Listings marketplace · Personal project",
    img: "/realestate_ui.png",
    role: "Sole engineer — full stack",
    team: "Solo",
    hard: "Row-level access control that survives real agent workflows",
    description:
      "A full-stack property marketplace where search stays instant no matter how many filters are stacked.",
    items: [
      "Built on the Next.js App Router with SSR and dynamic routing for instant loads and clean SEO.",
      "Implemented Supabase auth and PostgreSQL with row-level, role-based access control.",
      "Engineered multi-parameter filtering across price, location, type and amenities.",
      "Shipped agent dashboards with listing management and lead capture.",
    ],
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    // Not on GitHub yet — push it and add the URL here.
  },
  {
    num: "12",
    slug: "multilangdetect",
    year: "2024",
    title: "MultiLangDetect",
    kind: "Personal project",
    kicker: "Spoken-language classification · Personal project",
    img: "/multilang_ui.png",
    role: "Sole engineer — model and serving",
    team: "Solo",
    hard: "Getting accuracy to hold up on noisy, real-world audio",
    description:
      "A deep-learning service that identifies which language is being spoken, in under a second.",
    items: [
      "Trained a convolutional neural network purpose-built for audio classification.",
      "Engineered an MFCC feature-extraction pipeline that lifted accuracy and noise robustness.",
      "Served the model behind a high-concurrency Flask API for sub-second predictions.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Flask"],
    // Not on GitHub yet — push it and add the URL here.
  },
];

export const jobs = [
  {
    duration: "Jul 2025 — Present · Remote",
    role: "Software Engineer",
    company: "WebbyWolf Innovations",
    url: "https://www.webbywolf.com/",
    items: [
      "Engineered the frontend architecture for two production SaaS products (Aeoix and Linkova) utilizing Next.js App Router, React, TypeScript, and Tailwind CSS.",
      "Architected a scalable component library adopted across both platforms, accelerating feature delivery and reducing build times by over 30%.",
      "Designed and integrated REST APIs with Supabase for secure authentication, robust session handling, and real-time data synchronization.",
      "Spearheaded PostgreSQL schema modeling and API contract design to ensure efficient, scalable backend-to-frontend data flows.",
      "Implemented advanced SSR, route-level caching, and bundle optimization, significantly elevating Core Web Vitals and organic search indexing.",
      "Developed internal automation tooling and proof-of-concepts integrating generative AI APIs for dynamic content generation and publisher matching.",
      "Shipped continuously in two-week Agile sprints, maintaining high code quality through rigorous peer reviews and CI/CD on Vercel.",
    ],
  },
  {
    duration: "Jun 2023 — Sep 2023 · Remote",
    role: "Web3 Development Intern",
    company: "MetaCrafters",
    url: "https://www.metacrafters.io/",
    items: [
      "Authored, rigorously tested, and deployed Solidity smart contracts across EVM test networks.",
      "Developed responsive React dApp frontends, enabling seamless read/write interactions with on-chain state via wallet-connected clients.",
      "Awarded a merit scholarship for excellence in the blockchain engineering track and subsequently selected into the MetaCrafters talent collective.",
    ],
  },
];

export const education = [
  {
    level: "B.E. Computer Science & Engineering",
    institution: "Chandigarh University",
    location: "Mohali",
    duration: "2021 — 2025",
  },
  {
    level: "Higher Secondary Education (Class XII, PCM)",
    institution: "Valley View School",
    location: "Jamshedpur",
    duration: "2020 — 2021",
  },
  {
    level: "Secondary Education (Class X)",
    institution: "Ramakrishna Mission English School",
    location: "Jamshedpur",
    duration: "2018 — 2019",
  },
];

export const skills = [
  {
    num: "01",
    category: "Languages",
    core: ["TypeScript", "JavaScript"],
    rest: ["Python", "Java", "C++", "SQL", "HTML5", "CSS3"],
    note: "TypeScript everywhere it's an option — the compiler catches what code review doesn't.",
  },
  {
    num: "02",
    category: "Frontend",
    core: ["Next.js", "React", "Tailwind CSS"],
    rest: [
      "Redux",
      "Framer Motion",
      "GSAP",
      "Responsive Design",
      "Accessibility",
      "SEO",
      "Performance Optimization",
    ],
    note: "App Router, SSR and caching. Comfortable owning a design system end to end.",
  },
  {
    num: "03",
    category: "Backend & data",
    core: ["Node.js", "PostgreSQL", "Supabase"],
    rest: [
      "Express",
      "MongoDB",
      "REST APIs",
      "WebSockets",
      "JWT Auth",
      "Schema Design",
      "Row-Level Security",
    ],
    note: "Schema design, row-level access control, and real-time transport when polling won't do.",
  },
  {
    num: "04",
    category: "Tools & practice",
    core: ["Git / GitHub", "Vercel", "CI/CD"],
    rest: [
      "Docker",
      "Postman",
      "ESLint",
      "Agile",
      "Scrum",
      "Code Review",
      "System Design",
    ],
    note: "Ship small, review everything, keep the pipeline green.",
  },
];

export const building = [
  {
    name: "Forge",
    type: "Gym & workout app",
    status: "IN PROGRESS",
    blurb:
      "Workout plans, an exercise library, and logging that takes seconds between sets — not a spreadsheet with a skin on it.",
    tech: ["Next.js", "Supabase", "TypeScript"],
  },
];

/**
 * Only verified credentials. Anything not actually earned has been removed —
 * an unverifiable certification is a liability in a reference check.
 */
export const certifications = [
  {
    title: "$175 Blockchain Development Scholarship",
    issuer: "MetaCrafters",
    date: "2023",
  },
  {
    title: "Selected into the MetaCrafters Talent Collective",
    issuer: "MetaCrafters",
    date: "2023",
  },
  { title: "Ethical Hacking Bootcamp", issuer: "Udemy", date: "2022" },
];

export const achievements = [
  "Shipped 9 products end to end — web, desktop and native mobile.",
  "Cut build time for new features by approximately 30% with a shared component library at WebbyWolf.",
  "Engineered faceted search over a 250,000+ publisher catalog spanning 150+ countries.",
  "Built Huddle, a post-quantum end-to-end encrypted messenger, on the Signal Protocol with a Rust relay.",
];

export const places = [
  "Ladakh",
  "Kanyakumari",
  "Meghalaya",
  "Assam",
  "Hyderabad",
  "Bangalore",
  "Nashik",
  "Jamshedpur",
  "Mohali",
  "Chandigarh",
];

/* ---- derived counts: never hand-write these in copy again ---- */
export const counts = {
  total: projects.length,
  team: projects.filter((p) => p.kind === "Team project").length,
  personal: projects.filter((p) => p.kind === "Personal project").length,
  wip: projects.filter((p) => p.kind === "In progress").length,
  live: projects.filter((p) => p.live).length,
};
