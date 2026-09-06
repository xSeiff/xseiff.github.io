export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "Automation" | "Discord" | "Cybersecurity" | "AI" | "Python";
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  highlightCode?: string;
  iconType: "ticket" | "video" | "gauge" | "shield" | "sparkles" | "lock" | "cpu" | "bot" | "database" | "globe" | "coins" | "mic";
  featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "botmaker-platform",
    title: "BotMaker: Multi-Tenant Bot Creation SaaS",
    tagline: "Full-Stack Cloud Discord Bot Generator & Fleet Management Portal",
    description:
      "A complete multi-tenant platform empowering communities to generate, configure, and host customized Discord bots directly through a modern web portal. Handles automated token validation, dynamic command loaders, process supervision, and per-guild configuration persistence.",
    category: "Full-Stack",
    techStack: [
      "TypeScript",
      "React 18",
      "Node.js",
      "Discord.js (All Versions)",
      "Express.js",
      "Drizzle ORM",
      "PostgreSQL",
      "TailwindCSS",
      "WebSockets"
    ],
    features: [
      "Automated bot provisioning and process supervision engine with zero-downtime restarts",
      "Web-based visual control panel for custom commands, embed builders, and event hooks",
      "Multi-tenant PostgreSQL isolation managing independent bot instances and guild states",
      "Real-time WebSocket telemetry tracking memory consumption, uptime, and gateway latencies"
    ],
    metrics: [
      { label: "Deployment Speed", value: "< 3 Seconds" },
      { label: "Architecture", value: "Multi-Tenant" },
      { label: "Fleet Isolation", value: "100% Sandboxed" }
    ],
    highlightCode: `// BotMaker Instance Supervisor
export async function spawnManagedBot(instanceId: string, token: string) {
  const container = new BotWorker({ id: instanceId, token });
  await container.validateCredentials();
  await container.mountModules(['moderation', 'tickets', 'welcome']);
  return container.start();
}`,
    iconType: "bot",
    featured: true
  },
  {
    id: "enterprise-web-dashboard",
    title: "Enterprise Guild Portal & Telemetry Hub",
    tagline: "Full-Stack React + Neon Serverless Dashboard with Real-Time WebSockets",
    description:
      "An enterprise-grade administrative dashboard featuring Neon serverless PostgreSQL, Radix UI primitives, Recharts live telemetry, and WebSocket streams. Built with production-ready rate limiting middleware, session authentication, and dynamic analytics.",
    category: "Full-Stack",
    techStack: [
      "React 18",
      "Vite",
      "Neon Serverless Postgres",
      "Drizzle ORM",
      "Radix UI",
      "TanStack Query",
      "Recharts",
      "Framer Motion",
      "TailwindCSS",
      "Express & WebSockets"
    ],
    features: [
      "Live server metrics and event monitoring powered by persistent WebSockets and Recharts",
      "Normalized relational schema utilizing Drizzle ORM and Neon serverless connection pooling",
      "Granular permission-based access control (RBAC) with Passport.js and session persistence",
      "Production-grade sliding-window rate limiting middleware guarding against API abuse"
    ],
    metrics: [
      { label: "Query Speed", value: "< 15ms (Neon)" },
      { label: "UI Response", value: "60 FPS Fluid" },
      { label: "Security", value: "Rate-Limited" }
    ],
    highlightCode: `// Rate Limiting Middleware & Serverless Neon Connection
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
export const db = drizzle(neon(process.env.DATABASE_URL));`,
    iconType: "globe",
    featured: true
  },
  {
    id: "seif-nuker-security",
    title: "Seif Nuker (Security & Stress Harness)",
    tagline: "High-Concurrency Protocol Resilience & Server Security Auditing Suite",
    description:
      "An educational cybersecurity research tool engineered to stress-test Discord bot gateways and server permissions under catastrophic simulated attacks. Built to identify rate-limit bucket vulnerabilities (HTTP 429 recovery curves), privilege escalation cascades, and test anti-raid bot response velocities.",
    category: "Cybersecurity",
    techStack: [
      "Python 3.11",
      "asyncio",
      "aiohttp",
      "uvloop",
      "Discord Gateway WebSocket (v6-v10)",
      "Proxy Rotation Pools",
      "Protocol Fuzzing"
    ],
    features: [
      "Low-level asynchronous WebSocket & HTTP client bypassing standard library abstraction overhead",
      "Instrumented telemetry tracking sliding-window rate limits (Global, Per-Route, and Per-Guild buckets)",
      "Guild disaster recovery simulation to stress-test anti-raid defenses and bot failovers",
      "Multi-threaded proxy rotation supporting massive concurrent dispatch without socket drops"
    ],
    metrics: [
      { label: "Sustained Dispatch", value: "250+ Req/sec" },
      { label: "Socket Latency", value: "< 12ms Heartbeat" },
      { label: "Auditing Scope", value: "Security Research" }
    ],
    highlightCode: `// Low-Level Gateway Handshake & Rate-Limit Instrumentation
async def audit_guild_resilience(target_guild: str, proxy_pool: ProxyManager):
    """Benchmarks permission cascades and anti-raid latency under load."""
    async with aiohttp.ClientSession(connector=proxy_pool.next_connector()) as session:
        telemetry = await trace_rate_limit_buckets(session, target_guild)
        return telemetry.analyze_recovery_window()`,
    iconType: "shield",
    featured: true
  },
  {
    id: "gemini-ai-bot",
    title: "Discord Gemini AI Assistant",
    tagline: "Next-Gen Multi-Modal AI Assistant Powered by Google Generative AI",
    description:
      "An intelligent conversational Discord bot integrating Google's official Gemini Generative AI SDK. Handles multi-turn conversational context, image vision recognition, and real-time streaming completions formatted into Discord embeds.",
    category: "AI",
    techStack: [
      "Node.js",
      "Discord.js v14",
      "@google/generative-ai",
      "TypeScript",
      "Markdown Formatter"
    ],
    features: [
      "Zero-latency streaming responses integrated directly with Discord message updates",
      "Multi-modal vision analysis inspecting images uploaded directly into text channels",
      "Threaded conversation context memory allowing contextual multi-turn programming help",
      "Author-attributed by @xSeif on GitHub with clean environment configuration"
    ],
    metrics: [
      { label: "Model Engine", value: "Google Gemini" },
      { label: "Vision Support", value: "Multi-Modal" },
      { label: "Response Latency", value: "Sub-Second" }
    ],
    highlightCode: `// Google Gemini Generative Model Integration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({ history: previousThreadHistory });
const result = await chat.sendMessage(userPrompt);`,
    iconType: "sparkles",
    featured: true
  },
  {
    id: "temp-voice-engine",
    title: "TempVoice: Dynamic Voice Channels",
    tagline: "Automated Join-to-Create Temporary Voice Channel Infrastructure",
    description:
      "An automated voice channel orchestration system. Users join a primary trigger channel to instantly generate an isolated private room with interactive control interfaces (lock, unlock, user limit, hide, kick, and rename). Automatically cleans up channels upon vacancy.",
    category: "Automation",
    techStack: [
      "Python 3.11",
      "discord.py / Pycord (All Versions)",
      "Asyncio",
      "Discord UI Views & Modals"
    ],
    features: [
      "Instantaneous Join-to-Create channel cloning with dynamic parent category assignment",
      "Interactive Discord button & select menu interface allowing channel owners to manage permissions",
      "Zero-orphan auto-cleanup garbage collector terminating empty voice rooms immediately",
      "Granular user limit adjustment, bitrate tuning, and room locking mechanisms"
    ],
    metrics: [
      { label: "Channel Creation", value: "< 85ms" },
      { label: "Cleanup Delay", value: "Instantaneous" },
      { label: "Orphan Channels", value: "0% Leftover" }
    ],
    iconType: "mic"
  },
  {
    id: "bankbot-economy",
    title: "BankBot: Guild Virtual Economy",
    tagline: "Transactional Virtual Banking, Currency Systems & Guild Marketplace",
    description:
      "A complete virtual economy and financial simulation engine for communities. Includes ACID-compliant currency transfers, balance interest, daily streaks, gambling games, and customizable guild item shops.",
    category: "Discord",
    techStack: [
      "TypeScript",
      "Discord.js",
      "Drizzle ORM / SQLite",
      "Node.js",
      "Transaction Locks"
    ],
    features: [
      "Atomic transactional balances preventing race conditions or currency duplication glitches",
      "Interactive inventory systems with consumable items and guild role purchases",
      "Configurable banking interest, work routines, and economy leaderboards"
    ],
    metrics: [
      { label: "Concurrency Safety", value: "Race-Proof" },
      { label: "Transaction Speed", value: "< 25ms" },
      { label: "Feature Depth", value: "Full Banking" }
    ],
    iconType: "coins"
  },
  {
    id: "ticket-bot-dashboard",
    title: "TicketBot & Web Dashboard",
    tagline: "Enterprise Guild Support Suite & Real-Time Web Operations Portal",
    description:
      "A full-stack Discord support ecosystem pairing a high-throughput Discord bot with a responsive React/Vite dashboard. Features dynamic modal question flows, category routing, ephemeral claim controls, Drizzle ORM relational persistence, and automated HTML transcripts with CDN archival.",
    category: "Full-Stack",
    techStack: [
      "TypeScript",
      "React 18",
      "Vite",
      "Discord.js (All Versions)",
      "TailwindCSS",
      "Drizzle ORM",
      "PostgreSQL / SQLite",
      "Express.js",
      "Caddy"
    ],
    features: [
      "Interactive Discord embed panels with category dropdowns and dynamic modal flows",
      "Full-featured web dashboard with Discord OAuth2 authentication and live telemetry",
      "Automated HTML & JSON transcript generator with attachment archival",
      "Granular staff claiming, permission isolation, and auto-close countdown timers"
    ],
    metrics: [
      { label: "Interaction Latency", value: "< 42ms" },
      { label: "Concurrent Tickets", value: "5,000+" },
      { label: "Resolution Speed", value: "+65% Efficiency" }
    ],
    iconType: "ticket"
  },
  {
    id: "quran-tiktok-engine",
    title: "Quran TikTok Media Engine",
    tagline: "Automated Headless Video Compositing & Social Publishing Pipeline",
    description:
      "An automated video production pipeline that synthesizes high-definition ambient visual loops with synchronized recitations, audio-reactive waveforms, and RTL Arabic typography. Includes a modular Typer CLI, background scheduling, and containerized GPU rendering.",
    category: "Automation",
    techStack: [
      "Python 3.11",
      "FFmpeg (NVENC)",
      "MoviePy / OpenCV",
      "FriBidi & HarfBuzz",
      "Typer CLI",
      "Docker Compose"
    ],
    features: [
      "Headless video compositor generating 1080x1920 (9:16) vertical content for TikTok & Reels",
      "Sub-pixel Arabic typography shaping with diacritics using HarfBuzz and FriBidi engines",
      "Audio-reactive waveform synthesis synchronized with reciter frequencies",
      "Automated scheduling runner delivering daily content to webhooks and social endpoints"
    ],
    metrics: [
      { label: "Render Throughput", value: "3.8x Real-Time" },
      { label: "Audio-Sub Alignment", value: "< 15ms Drift" },
      { label: "Touchless Runs", value: "100% Autonomous" }
    ],
    iconType: "video"
  },
  {
    id: "discord-suggest-system",
    title: "DiscordSuggest: Community Feedback",
    tagline: "Interactive Feedback Pipeline with Voting & Status Workflows",
    description:
      "A structured suggestion and feature voting bot. Allows server members to submit ideas via modal forms, collects community upvotes/downvotes, and provides moderators with approval, denial, and implementation pipeline states.",
    category: "Discord",
    techStack: ["TypeScript", "Discord.js v14", "Node.js", "Embed Builder"],
    features: [
      "Modal submission forms preventing incomplete or low-effort suggestions",
      "Dynamic reaction/button voting with auto-calculated consensus percentages",
      "Staff administration commands (`/suggest approve`, `/suggest implement`) with automated DM alerts"
    ],
    metrics: [
      { label: "User Interaction", value: "Button Voting" },
      { label: "State Workflow", value: "Approved / Denied" },
      { label: "Embed Engine", value: "Auto-Updating" }
    ],
    iconType: "gauge"
  },
  {
    id: "broadcast-manager",
    title: "Broadcast: Community Announcement Engine",
    tagline: "Mass Announcement & Multi-Channel Webhook Dispatcher",
    description:
      "A high-throughput announcement delivery engine designed for multi-server communities. Allows administrators to broadcast rich embeds with buttons across multiple channels or guilds simultaneously with strict rate-limit pacing.",
    category: "Automation",
    techStack: ["Node.js", "Discord.js", "Queue Worker", "Rate-Limit Pacer"],
    features: [
      "Token and webhook distribution engine with sliding-window backoff",
      "Rich multi-embed composer with action row buttons and customized footer branding",
      "Delivery analytics tracking successful dispatches and failed endpoints"
    ],
    metrics: [
      { label: "Dispatch Pacing", value: "Zero 429 Drops" },
      { label: "Multi-Guild Sync", value: "Simultaneous" },
      { label: "Payload Support", value: "Rich Embeds" }
    ],
    iconType: "cpu"
  },
  {
    id: "sentinel-shield",
    title: "Sentinel: Defensive Server Shield",
    tagline: "Anti-Raid Velocity Defense, Mass-Purge Suite & Lockdown Engine",
    description:
      "A dedicated security and defensive automation guard designed to protect servers from coordinated raids, spam attacks, and token swarms. Identifies anomalous join spikes, avatar clusters, and provides instant full-server lockdown capabilities.",
    category: "Cybersecurity",
    techStack: ["TypeScript", "Discord.js (All Versions)", "Node.js", "Fast-Glob", "Security Heuristics"],
    features: [
      "Join-velocity heuristic analyzer detecting automated raid swarms in real time",
      "Emergency `/lockdown` command revoking write permissions across 50+ channels in <1.5s",
      "High-speed purge filters targeting raid bots, malicious invite links, or regex patterns",
      "Immutable audit log webhooks for post-incident security analysis"
    ],
    metrics: [
      { label: "Server Lockdown", value: "< 1.5 Seconds" },
      { label: "Purge Capacity", value: "100 msgs / batch" },
      { label: "Protection Scope", value: "Zero False-Positives" }
    ],
    iconType: "lock"
  },
  {
    id: "nexus-community-bot",
    title: "Nexus: Community Engagement & Voice XP",
    tagline: "Voice Activity Leveling, Custom Rank Cards & Bilingual Moderation",
    description:
      "A high-engagement community infrastructure bot featuring voice channel presence tracking, XP leveling algorithms, Pillow-generated dynamic rank cards, and bilingual moderation tools.",
    category: "Python",
    techStack: [
      "Python 3.11",
      "discord.py / Pycord (All Versions)",
      "SQLite (aiosqlite)",
      "Pillow (PIL)",
      "Asyncio"
    ],
    features: [
      "Voice and text activity tracking with anti-farming XP cooldown algorithms",
      "Dynamic graphic generation for server rank cards with user avatars and progress bars",
      "Native bilingual interface (Arabic & English) with localized embed responses",
      "Automated regex-based moderation filters intercepting malicious links and spam raids"
    ],
    metrics: [
      { label: "Message Pipeline", value: "< 35ms" },
      { label: "Rank Card Gen", value: "< 120ms" },
      { label: "Localization", value: "Arabic & English" }
    ],
    iconType: "sparkles"
  },
  {
    id: "nova-edge-framework",
    title: "Nova: Edge-Optimized Discord Framework",
    tagline: "Decoupled Microservice Architecture with Hot-Reloading Support",
    description:
      "A modular, developer-centric starter architecture for high-performance bots. Features zero-downtime hot reloading for commands and event listeners, strict TypeScript types, and an ultra-low memory footprint.",
    category: "Discord",
    techStack: ["TypeScript", "Discord.js (All Versions)", "Node.js", "ESBuild"],
    features: [
      "Dynamic file-system loader with instant hot-reload for rapid feature prototyping",
      "Decoupled event and command dispatchers with robust try-catch error boundaries",
      "Microscopic memory footprint (<35MB RAM), ideal for cost-efficient VPS hosting"
    ],
    metrics: [
      { label: "Startup Duration", value: "< 800ms" },
      { label: "Memory Footprint", value: "< 35MB RAM" },
      { label: "Architecture", value: "100% Decoupled" }
    ],
    iconType: "cpu"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Discord Architecture (All Generations)",
    description: "Deep engineering across every era of Discord's API, libraries, and protocols.",
    skills: [
      "Discord.js (v12, v13, v14)",
      "discord.py (all versions)",
      "Disnake & Pycord",
      "Discord Gateway (v6-v10)",
      "Slash Commands & Modals",
      "Buttons & Select Menus",
      "Legacy Prefix Handlers",
      "OAuth2 Authentication",
      "Automated Transcripts",
      "Temporary Voice Channels"
    ]
  },
  {
    title: "Cybersecurity & Protocol Auditing",
    description: "Low-level security testing, rate-limit benchmarking, and anti-raid defenses.",
    skills: [
      "Penetration Testing (Educational)",
      "Rate-Limit Bucket Telemetry (HTTP 429)",
      "Protocol Fuzzing & Stress Testing",
      "Privilege Escalation Auditing",
      "Anti-Raid Heuristics & Mitigation",
      "Proxy Rotation & High Concurrency",
      "WebSocket Security & Sniffing",
      "Disaster Recovery Simulation"
    ]
  },
  {
    title: "Backend, APIs & Databases",
    description: "High-throughput servers, relational schemas, and memory caching.",
    skills: [
      "TypeScript & Node.js",
      "Python 3.11+",
      "Drizzle ORM & Drizzle Kit",
      "PostgreSQL (Neon Serverless)",
      "SQLite / aiosqlite",
      "Redis Caching",
      "Express.js & FastAPI",
      "REST & Real-Time WebSockets"
    ]
  },
  {
    title: "Frontend, Media & DevOps",
    description: "Responsive management dashboards, headless video engines, and deployment.",
    skills: [
      "React 18 & Vite",
      "TailwindCSS",
      "Radix UI & Framer Motion",
      "Docker & Docker Compose",
      "FFmpeg (NVENC GPU)",
      "Caddy Reverse Proxy",
      "HarfBuzz & FriBidi (RTL Arabic)",
      "Google Generative AI (Gemini)"
    ]
  }
];
