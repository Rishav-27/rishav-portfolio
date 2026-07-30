export const header = {
  name: "Rishav Kumar",
  title: "Full-Stack Software Engineer",
  resumeTitle: "Full Stack Software Engineer",
  phone: "+91 70610 94592",
  phoneHref: "tel:+917061094592",
  email: "rishav9707@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishav27/",
  github: "https://github.com/Rishav-27",
  instagram: "https://www.instagram.com/1227_rishi.k",
  portfolio: "https://rishav-portfolio-wine.vercel.app/",
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
  role: string;
  team: string;
  hard: string;
  description: string;
  items: string[];
  tech: string[];
  github?: string;
  live?: string;
  /** true when this project is one of the three printed on the resume */
  onResume?: boolean;
};

export const projects: Project[] = [
  {
    num: "01",
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
    num: "02",
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
    num: "03",
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
    onResume: true,
  },
  {
    num: "04",
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
    num: "05",
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
  {
    num: "08",
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
    num: "09",
    slug: "pulse",
    year: "2026",
    title: "Pulse",
    kind: "In progress",
    kicker: "Real-time chat app",
    role: "Sole engineer — full stack",
    team: "Solo",
    hard: "Presence and delivery state that stay honest on a flaky connection",
    description:
      "One-to-one messaging with presence, typing indicators and delivery state.",
    items: [
      "Modelled auth, profiles and one-to-one conversations.",
      "Building real-time messaging over Supabase Realtime channels.",
      "Implementing online status and typing indicators.",
      "Engineering optimistic sends with reconciliation on reconnect.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase Realtime"],
  },
  {
    num: "10",
    slug: "ledgerx",
    year: "2026",
    title: "LedgerX",
    kind: "In progress",
    kicker: "ERP & accounting system",
    role: "Sole engineer — full stack",
    team: "Solo",
    hard: "A schema that handles GST correctly without becoming unreadable",
    description:
      "Company setup, customers, products, invoicing with GST and PDF export.",
    items: [
      "Building multi-company auth and organisation setup.",
      "Designing customer and product catalogs with relational integrity.",
      "Implementing invoice generation with GST calculation.",
      "Shipping server-rendered PDF invoice export.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
  },
];

export const jobs = [
  {
    duration: "Jul 2025 — Present · Remote",
    role: "Software Engineer",
    company: "WebbyWolf Innovations",
    url: "https://www.webbywolf.com/",
    items: [
      "Engineered frontend architecture for two production SaaS products, Aeoix and Linkova, in Next.js App Router, React, TypeScript and Tailwind CSS.",
      "Built a reusable component library adopted across both products, cutting build time for new features by approximately 30%.",
      "Integrated REST APIs and Supabase for authentication, session handling and real-time data; drove API contract design and PostgreSQL schema modelling.",
      "Applied SSR, route-level caching and bundle optimization to cut load times and lift Core Web Vitals and organic indexing.",
      "Shipped in two-week Agile sprints with peer code review, Git/GitHub branching and continuous deployment on Vercel.",
      "Built internal automation and proof-of-concept tooling integrating third-party and generative AI APIs for content generation and publisher matching.",
    ],
  },
  {
    duration: "Jun 2023 — Sep 2023 · Remote",
    role: "Web3 Development Intern",
    company: "MetaCrafters",
    url: "https://www.metacrafters.io/",
    items: [
      "Authored, tested and deployed Solidity smart contracts on EVM test networks.",
      "Built React dApp frontends reading and writing on-chain state through wallet-connected clients.",
      "Earned a $175 merit scholarship on completing the blockchain engineering track.",
      "Selected into the MetaCrafters talent collective.",
    ],
  },
];

export const education = [
  {
    level: "B.E. Computer Science & Engineering",
    institution: "Chandigarh University",
    location: "Mohali",
    duration: "2021 — 2025",
    score: "CGPA 7.43 / 10",
  },
  {
    level: "Class XII (PCM)",
    institution: "Valley View School",
    location: "Jamshedpur",
    duration: "2020 — 2021",
    score: "70%",
  },
  {
    level: "Class X",
    institution: "Ramakrishna Mission English School",
    location: "Jamshedpur",
    duration: "2018 — 2019",
    score: "76.4%",
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
  {
    name: "Pulse",
    type: "Real-time chat app",
    status: "IN PROGRESS",
    blurb:
      "One-to-one messaging with presence, typing indicators and delivery state. A reason to get real-time transport right from scratch.",
    tech: ["Next.js", "Supabase Realtime", "TypeScript"],
  },
  {
    name: "LedgerX",
    type: "ERP & accounting system",
    status: "IN PROGRESS",
    blurb:
      "Customers, products, invoicing with GST and PDF export. The most schema-heavy thing I've designed.",
    tech: ["Next.js", "PostgreSQL", "Supabase"],
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
  "Shipped 7 full-stack products end to end — 4 live in production.",
  "Cut build time for new features by approximately 30% with a shared component library at WebbyWolf.",
  "Engineered faceted search over a 250,000+ publisher catalog spanning 150+ countries.",
  "3 further MVPs in active development: Forge, Pulse, LedgerX.",
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
