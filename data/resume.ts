export const header = {
  name: "Rishav Kumar",
  title: "Full-Stack Software Engineer",
  phone: "+91 70610 94592",
  phoneHref: "tel:+917061094592",
  email: "rishav9707@gmail.com",
  linkedin: "https://www.linkedin.com/in/rishav27/",
  github: "https://github.com/Rishav-27",
  location: "Jamshedpur, Jharkhand",
};

export type Project = {
  num: string; year: string; title: string; kind: "Team project" | "Personal project" | "In progress";
  kicker: string; img?: string; role: string; team: string; hard: string;
  description: string; items: string[]; tech: string[]; github?: string; live?: string;
};

export const projects: Project[] = [
  {
    num: "01", year: "2026", title: "SK Enterprises", kind: "Personal project",
    kicker: "Manufacturing & trading company site · Family business",
    img: "/skenterprises.png",
    role: "Sole engineer — full stack", team: "Solo",
    hard: "Making a manufacturing and trading business feel credible online, fast",
    description:
      "A marketing site for our family's manufacturing and trading business, built to give the company a fast, professional web presence and a clear way for buyers to get in touch.",
    items: [
      "Next.js site with product/catalog sections for the company's manufacturing and trading lines.",
      "Enquiry and contact forms with React Hook Form and Zod validation.",
      "Scroll-driven animation and page transitions with GSAP and Framer Motion.",
      "Smooth-scroll and carousel-based product showcases.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    live: "https://skenterprises-g2k2z0ru9-rishav-kumars-projects-f6216bfd.vercel.app/",
  },
  {
    num: "02", year: "2026", title: "Aeoix", kind: "Team project",
    kicker: "Answer Engine Optimization platform · Team project at WebbyWolf",
    img: "/aeoix.png",
    role: "Frontend engineering — marketing site and in-app surfaces",
    team: "WebbyWolf product team",
    hard: "Keeping 8 engines of daily-refreshed data legible on one screen",
    description:
      "A SaaS platform that tracks how ChatGPT, Perplexity, Gemini and five more engines answer for a brand's category — then turns that data into a ranked, do-this-next action plan.",
    items: [
      "My role: frontend engineering across the marketing site and in-app surfaces, alongside the WebbyWolf team.",
      "Built Next.js pages with SSR for fast first paint and clean indexing.",
      "Worked on views rendering daily-refreshed ranking, share-of-voice and sentiment data across 8 AI engines.",
      "Contributed to the actions kanban, in-app content editor and outreach pipeline UI.",
    ],
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PostgreSQL"],
    live: "https://aeoix.com/",
  },
  {
    num: "03", year: "2026", title: "Linkova", kind: "Team project",
    kicker: "Publisher marketplace, 250k+ listings · Team project at WebbyWolf",
    img: "/linkova.png",
    role: "Frontend engineering — catalog search and ordering flows",
    team: "WebbyWolf product team",
    hard: "Faceted search staying instant across a 250,000-row catalog",
    description:
      "A link marketplace for agencies and in-house SEO teams: filter a 250,000-publisher catalog across 150+ countries, brief an AI scout, or run competitor gap analysis.",
    items: [
      "My role: frontend engineering on the catalog and ordering flows, alongside the WebbyWolf team.",
      "Worked on faceted search over 250k+ listings — DR, traffic, country, topic and budget.",
      "Built the interactive world-coverage map and per-country catalog depth views.",
      "Contributed to EN/DE localisation and the cart-to-live-URL order workflow.",
    ],
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "i18n"],
    live: "https://linkova.club/",
  },
  {
    num: "04", year: "2025", title: "TradeVerse", kind: "Personal project",
    kicker: "Real-time trading platform · Personal project",
    img: "/tradeverse_ui.png",
    role: "Sole engineer — full stack", team: "Solo",
    hard: "Thousands of concurrent price streams without dropping frames",
    description: "A trading app that streams live market data and settles positions without the UI ever stalling.",
    items: [
      "WebSockets layer holding thousands of concurrent price streams.",
      "REST APIs for trades, portfolio performance and transaction history.",
      "JWT auth over HTTP-only cookies for hardened session handling.",
      "Real-time P&L engine computing analytics on open positions.",
    ],
    tech: ["React", "Node.js", "MongoDB", "WebSockets", "JWT"],
    github: "https://github.com/Rishav-27",
  },
  {
    num: "05", year: "2025", title: "Real Estate Platform", kind: "Personal project",
    kicker: "Listings marketplace · Personal project",
    img: "/realestate_ui.png",
    role: "Sole engineer — full stack", team: "Solo",
    hard: "Row-level access control that survives real agent workflows",
    description: "A full-stack property marketplace where search stays instant no matter how many filters are stacked.",
    items: [
      "Next.js App Router with SSR and dynamic routing for instant loads and clean SEO.",
      "Supabase for auth and Postgres, with row-level role-based access control.",
      "Multi-parameter filtering across price, location, type and amenities.",
      "Agent dashboards with listing management and lead capture.",
    ],
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Rishav-27",
  },
  {
    num: "06", year: "2024", title: "MultiLangDetect", kind: "Personal project",
    kicker: "Spoken-language classification · Personal project",
    img: "/multilang_ui.png",
    role: "Sole engineer — model and serving", team: "Solo",
    hard: "Getting accuracy to hold up on noisy, real-world audio",
    description: "A deep-learning service that identifies which language is being spoken, in under a second.",
    items: [
      "Convolutional neural network trained specifically for audio classification.",
      "MFCC feature extraction pipeline that lifted accuracy and noise robustness.",
      "Model served behind a high-concurrency Flask API for sub-second predictions.",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Flask"],
    github: "https://github.com/Rishav-27",
  },
  {
    num: "07", year: "2026", title: "Forge", kind: "In progress",
    kicker: "Gym & workout app",
    role: "Sole engineer — full stack", team: "Solo",
    hard: "Logging a set in under three taps, mid-workout",
    description: "Workout plans, an exercise library and progress tracking, built so logging a set takes seconds between reps.",
    items: [
      "Auth and profile setup on Supabase.",
      "Workout plan builder and a structured exercise library.",
      "Fast set-logging flow designed for one-handed use.",
      "Simple progress tracking across weeks.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    num: "08", year: "2026", title: "Pulse", kind: "In progress",
    kicker: "Real-time chat app",
    role: "Sole engineer — full stack", team: "Solo",
    hard: "Presence and delivery state that stay honest on a flaky connection",
    description: "One-to-one messaging with presence, typing indicators and delivery state.",
    items: [
      "Auth, profiles and one-to-one conversation model.",
      "Real-time messaging over Supabase Realtime channels.",
      "Online status and typing indicators.",
      "Optimistic sends with reconciliation on reconnect.",
    ],
    tech: ["Next.js", "TypeScript", "Supabase Realtime"],
  },
  {
    num: "09", year: "2026", title: "LedgerX", kind: "In progress",
    kicker: "ERP & accounting system",
    role: "Sole engineer — full stack", team: "Solo",
    hard: "A schema that handles GST correctly without becoming unreadable",
    description: "Company setup, customers, products, invoicing with GST and PDF export.",
    items: [
      "Multi-company auth and org setup.",
      "Customer and product catalogs with relational integrity.",
      "Invoice generation with GST calculation.",
      "Server-rendered PDF invoice export.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
  },
  {
    num: "10", year: "2026", title: "CVora", kind: "In progress",
    kicker: "AI resume builder · My own product",
    role: "Founder and sole engineer", team: "Solo",
    hard: "PDF output that survives every ATS parser",
    description: "A resume builder with form-driven editing, live preview and clean PDF export — built to be sold.",
    items: [
      "Form-to-preview editor with live rendering.",
      "Template system with typographic control.",
      "Reliable PDF export and download.",
      "Save, restore and version drafts.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
];

export const jobs = [
  {
    duration: "Jul 2025 — Present · Remote",
    role: "Software Engineer",
    company: "WebbyWolf Innovations",
    url: "https://www.webbywolf.com/",
    items: [
      "Frontend engineer on Aeoix and Linkova — two live SaaS products, built with the WebbyWolf team.",
      "Engineered a reusable component library that cut build time for new features by roughly 30%.",
      "Integrated REST APIs and Supabase for authentication, session handling, and real-time data.",
      "Led backend architecture discussions — API design and PostgreSQL data modelling.",
      "Applied SSR and caching strategies that measurably improved load times and SEO.",
      "Worked in an agile team: code review, debugging, continuous delivery.",
    ],
  },
  {
    duration: "Jun 2023 — Sep 2023 · Remote",
    role: "Web3 Development Intern",
    company: "MetaCrafters",
    url: "https://www.metacrafters.io/",
    items: [
      "Completed the MetaCrafters blockchain development track and earned a $175 scholarship award.",
      "Wrote and deployed Solidity smart contracts, testing them end to end on EVM test networks.",
      "Built dApp frontends that read and write on-chain state through wallet-connected clients.",
      "Selected into the MetaCrafters talent collective on completion of the programme.",
    ],
  },
];

export const education = [
  { level: "B.E. Computer Science & Engineering", institution: "Chandigarh University", location: "Mohali", duration: "2021 — 2025", score: "CGPA 7.43 / 10" },
  { level: "Class XII (PCM)", institution: "Valley View School", location: "Jamshedpur", duration: "2020 — 2021", score: "70%" },
  { level: "Class X", institution: "Ramakrishna Mission English School", location: "Jamshedpur", duration: "2018 — 2019", score: "76.4%" },
];

export const skills = [
  { num: "01", category: "Languages", core: ["TypeScript", "JavaScript"], rest: ["Python", "Java", "C++", "SQL"],
    note: "TypeScript everywhere it's an option — the compiler catches what code review doesn't." },
  { num: "02", category: "Frontend", core: ["Next.js", "React", "Tailwind CSS"], rest: ["Framer Motion", "Redux", "HTML5", "CSS3"],
    note: "App Router, SSR and caching. Comfortable owning a design system end to end." },
  { num: "03", category: "Backend & data", core: ["Node.js", "PostgreSQL", "Supabase"], rest: ["Express", "MongoDB", "REST APIs", "WebSockets"],
    note: "Schema design, row-level access control, and real-time transport when polling won't do." },
  { num: "04", category: "Tools & practice", core: ["Git / GitHub", "Vercel"], rest: ["Docker", "Postman", "CI/CD", "Agile", "System Design"],
    note: "Ship small, review everything, keep the pipeline green." },
];

export const building = [
  { name: "Forge", type: "Gym & workout app", status: "IN PROGRESS",
    blurb: "Workout plans, an exercise library, and logging that takes seconds between sets — not a spreadsheet with a skin on it.",
    tech: ["Next.js", "Supabase", "TypeScript"] },
  { name: "Pulse", type: "Real-time chat app", status: "IN PROGRESS",
    blurb: "One-to-one messaging with presence, typing indicators and delivery state. A reason to get real-time transport right from scratch.",
    tech: ["Next.js", "Supabase Realtime", "TypeScript"] },
  { name: "LedgerX", type: "ERP & accounting system", status: "IN PROGRESS",
    blurb: "Customers, products, invoicing with GST and PDF export. The most schema-heavy thing I've designed.",
    tech: ["Next.js", "PostgreSQL", "Supabase"] },
  { name: "CVora", type: "AI resume builder", status: "IN PROGRESS",
    blurb: "Form-driven resume editing with live preview and clean PDF export. My own product, built to be sold.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"] },
];

export const certifications = [
  { title: "$175 Blockchain Scholarship", issuer: "MetaCrafters", date: "2023" },
  { title: "Data Structures & Algorithms", issuer: "GeeksforGeeks", date: "2023" },
  { title: "Deep Learning Specialization", issuer: "Coursera", date: "2022" },
  { title: "Ethical Hacking Bootcamp", issuer: "Udemy", date: "2022" },
];

export const places = ["Ladakh","Kanyakumari","Meghalaya","Assam","Hyderabad","Bangalore","Nashik","Jamshedpur","Mohali","Chandigarh"];
