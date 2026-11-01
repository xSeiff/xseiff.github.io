export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Full-Stack" | "Automation" | "Discord" | "Cybersecurity" | "AI";
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  highlightCode?: string;
  iconType: "ticket" | "video" | "gauge" | "shield" | "sparkles" | "lock" | "cpu" | "bot" | "database" | "globe" | "coins" | "mic";
  featured?: boolean;
  githubUrl?: string;
  isPrivate?: boolean;
  repoName?: string;
  liveUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "apexfleet-erp",
    title: "ApexFleet ERP",
    tagline: "Commercial Fleet Management & Automated Payroll Distribution System",
    description:
      "A complete enterprise resource planning system engineered for commercial distribution operations. Manages three vehicle tiers (Jumbo trucks, supervisor cars, tricycles), driver credentials with expiration countdowns, real-time payroll ledger, automated cash advance settlements, and printable tripartite payment vouchers.",
    category: "Full-Stack",
    techStack: [
      "React 18",
      "Vite",
      "TailwindCSS",
      "Express.js",
      "SQLite",
      "Caddy",
      "Multer",
      "Chart.js"
    ],
    features: [
      "Real-time payroll & cash advance balance tracking with automated deduction settlements",
      "Fleet operations logging: vehicle telemetry, oil intervals, fuel receipts, and highway toll logs",
      "Granular document lifecycle monitoring with days-remaining countdowns for licenses & insurance",
      "Tripartite printable payment vouchers (Recipient, Cashier/Accounting, General Manager)"
    ],
    metrics: [
      { label: "Fleet Tiers", value: "3 Vehicle Types" },
      { label: "Settlement", value: "Real-Time Ledger" },
      { label: "Deployment", value: "Production VPS" }
    ],
    highlightCode: `// Real-Time Payroll Settlement & Cash Advance Reconciliation
export async function calculateNetSettlement(employeeId: string, baseSalary: number) {
  const advances = await db.all(
    'SELECT SUM(amount) as total FROM cash_advances WHERE employee_id = ? AND status = "pending"',
    [employeeId]
  );
  const totalAdvances = advances[0]?.total || 0;
  const netPayable = Math.max(0, baseSalary - totalAdvances);
  return { baseSalary, totalAdvances, netPayable, voucherIssued: true };
}`,
    iconType: "database",
    featured: true,
    isPrivate: true,
    repoName: "apexfleet-erp"
  },
  {
    id: "aegisfleet-monorepo",
    title: "AegisFleet Monorepo",
    tagline: "Distributed Multi-Tenant Discord Bot SaaS & Cluster Orchestration Engine",
    description:
      "A high-scale Turbo monorepo architected for multi-tenant Discord bot generation and cluster supervision. Features decoupled API microservices, isolated bot execution instances, a modern Tailwind control dashboard, and shared database schemas with zero-downtime lifecycle management.",
    category: "Full-Stack",
    techStack: [
      "Turbo Monorepo",
      "TypeScript",
      "pnpm",
      "Node.js",
      "Discord.js v14",
      "Express.js",
      "TailwindCSS",
      "PostgreSQL"
    ],
    features: [
      "Multi-tenant bot provisioning engine with dynamic worker threads and cluster supervision",
      "Turbo monorepo orchestration linking apps/api, apps/bot, apps/dashboard, and shared packages",
      "Real-time WebSocket telemetry reporting memory consumption, gateway pings, and shard status",
      "Modular command loader isolating client instances to eliminate cross-guild interference"
    ],
    metrics: [
      { label: "Architecture", value: "Turbo Monorepo" },
      { label: "Workspace Apps", value: "3 Apps + 2 Pkgs" },
      { label: "Provisioning", value: "Zero Downtime" }
    ],
    highlightCode: `// AegisFleet Cluster Instance Supervisor
export async function spawnIsolatedWorker(clusterId: string, config: GuildClusterConfig) {
  const worker = new BotWorkerProcess({ clusterId, token: config.botToken });
  await worker.mountPackages(['@aegis/database', '@aegis/shared']);
  await worker.verifyGatewayShards();
  return worker.boot();
}`,
    iconType: "bot",
    featured: true,
    githubUrl: "https://github.com/xSeiff/aegisfleet-monorepo",
    repoName: "aegisfleet-monorepo"
  },
  {
    id: "editorshub-portal",
    title: "EditorsHub Portal",
    tagline: "Collaborative Video Production Marketplace & Real-Time Client Operations Hub",
    description:
      "A full-stack collaborative platform connecting digital creators with top-tier video editors. Built with React 18, Vite, Drizzle ORM, and Neon serverless PostgreSQL, featuring persistent WebSocket activity feeds, Radix UI dialogs, sliding-window rate limiters, and interactive order management.",
    category: "Full-Stack",
    techStack: [
      "React 18",
      "Vite",
      "Drizzle ORM",
      "Neon Serverless Postgres",
      "Radix UI",
      "TanStack Query",
      "WebSockets",
      "TailwindCSS"
    ],
    features: [
      "Live order pipelines and real-time status broadcasts driven by native WebSocket streams",
      "Optimized relational schema on Neon Serverless PostgreSQL with Drizzle ORM queries",
      "Interactive editor portfolios, video asset previews, and client review submission workflows",
      "Production-ready sliding-window rate limiting middleware guarding against API abuse"
    ],
    metrics: [
      { label: "Query Speed", value: "< 15ms (Neon)" },
      { label: "Feed Latency", value: "Sub-50ms (WS)" },
      { label: "UI Response", value: "60 FPS Fluid" }
    ],
    highlightCode: `// Rate-Limiting & Serverless Neon Relational Pool
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
export const db = drizzle(neon(process.env.DATABASE_URL!));`,
    iconType: "globe",
    featured: true,
    githubUrl: "https://github.com/xSeiff/editorshub-portal",
    repoName: "editorshub-portal"
  },
  {
    id: "ticketflow-suite",
    title: "TicketFlow Suite",
    tagline: "Enterprise Support Ecosystem with Discord Bot & Real-Time Operations Portal",
    description:
      "An enterprise-scale customer support and ticketing infrastructure. Integrates a high-throughput Discord bot handling dynamic modal questionnaire flows with a React 18/Vite operations dashboard. Features Drizzle ORM persistence, staff claiming queues, automated HTML transcripts, and CDN archival.",
    category: "Full-Stack",
    techStack: [
      "TypeScript",
      "React 18",
      "Vite",
      "Discord.js v14",
      "Express.js",
      "Drizzle ORM",
      "TailwindCSS",
      "HTML Transcripts"
    ],
    features: [
      "Interactive Discord embed panels with category routing and dynamic modal questions",
      "Full web operations dashboard with Discord OAuth2 authentication and live telemetry",
      "Automated standalone HTML & JSON transcript generator preserving message media",
      "Staff claim controls, internal note permissions, and automated vacancy timers"
    ],
    metrics: [
      { label: "Ticket Capacity", value: "5,000+ Active" },
      { label: "Modal Latency", value: "< 42ms" },
      { label: "Archival", value: "Automated HTML" }
    ],
    highlightCode: `// Dynamic Modal Ticket Router & Transcripts
export async function initializeTicketChannel(guild: Guild, user: User, category: string) {
  const channel = await guild.channels.create({
    name: \`ticket-\${user.username}\`,
    type: ChannelType.GuildText,
    permissionOverwrites: generateIsolatedPermissions(guild, user)
  });
  await db.insert(tickets).values({ channelId: channel.id, userId: user.id, category });
  return channel;
}`,
    iconType: "ticket",
    featured: true,
    githubUrl: "https://github.com/xSeiff/ticketflow-suite",
    repoName: "ticketflow-suite"
  },
  {
    id: "seifnuker-protocol-suite",
    title: "SeifNuker Protocol Suite",
    tagline: "High-Throughput Discord Gateway Security & Rate-Limit Benchmark Harness",
    description:
      "A high-concurrency educational cybersecurity research suite built in Python 3.11 with asyncio and uvloop. Engineered to benchmark Discord Gateway protocol resilience, discover HTTP 429 recovery curves across global and per-guild route buckets, and stress-test anti-raid bot response velocities.",
    category: "Cybersecurity",
    techStack: [
      "Python 3.11",
      "asyncio",
      "aiohttp",
      "uvloop",
      "Discord Gateway v10",
      "Proxy Rotation Pools",
      "Rate-Limit Buckets"
    ],
    features: [
      "Low-level asynchronous WebSocket & HTTP client bypassing high-level library overhead",
      "Sliding-window rate-limit telemetry tracking HTTP 429 backoff curves and bucket resets",
      "High-speed proxy pool rotation supporting massive concurrent requests without dropped sockets",
      "Security auditing harness benchmarking server permission cascades under extreme load"
    ],
    metrics: [
      { label: "Sustained Dispatch", value: "250+ Req/sec" },
      { label: "Heartbeat", value: "< 12ms" },
      { label: "Protocol", value: "Raw Gateway v10" }
    ],
    highlightCode: `// Low-Level Gateway Handshake & Rate-Limit Telemetry
async def audit_guild_resilience(target_guild: str, proxy_pool: ProxyManager):
    """Benchmarks permission cascades and anti-raid response velocity."""
    async with aiohttp.ClientSession(connector=proxy_pool.next_connector()) as session:
        telemetry = await trace_rate_limit_buckets(session, target_guild)
        return telemetry.analyze_recovery_window()`,
    iconType: "shield",
    featured: true,
    githubUrl: "https://github.com/xSeiff/seifnuker-protocol-suite",
    repoName: "seifnuker-protocol-suite"
  },
  {
    id: "ayatrender-media-engine",
    title: "AyatRender Media Engine",
    tagline: "Automated Headless Video Compositing & Cross-Platform Content Pipeline",
    description:
      "A production-grade automated video production engine that synthesizes ambient visual loops with synchronized recitations, audio waveforms, and sub-pixel right-to-left Arabic typography. Features a modular Typer CLI, containerized GPU NVENC rendering, and automated publishing runners.",
    category: "Automation",
    techStack: [
      "Python 3.11",
      "FFmpeg (NVENC GPU)",
      "HarfBuzz & FriBidi (RTL)",
      "OpenCV",
      "Typer CLI",
      "Docker Compose",
      "Caddy"
    ],
    features: [
      "Headless video compositor rendering 1080x1920 (9:16) vertical content for TikTok & Reels",
      "Sub-pixel Arabic typography shaping with diacritics using HarfBuzz and FriBidi engines",
      "Audio-reactive waveform synthesis synchronized with reciter audio frequencies",
      "Fully containerized Docker Compose setup with GPU acceleration for rapid batch processing"
    ],
    metrics: [
      { label: "Render Velocity", value: "3.8x Real-Time" },
      { label: "Typography", value: "HarfBuzz RTL" },
      { label: "Pipeline", value: "100% Headless" }
    ],
    highlightCode: `// GPU-Accelerated Headless Compositor Pipeline
def render_vertical_clip(audio_track: Path, background_loop: Path, verses_data: dict) -> Path:
    shaped_subtitles = shape_arabic_typography(verses_data, font="Amiri-Bold")
    cmd = build_ffmpeg_nvenc_pipeline(
        audio=audio_track, bg=background_loop, subs=shaped_subtitles, res=(1080, 1920)
    )
    subprocess.run(cmd, check=True)
    return output_path`,
    iconType: "video",
    featured: true,
    githubUrl: "https://github.com/xSeiff/ayatrender-media-engine",
    repoName: "ayatrender-media-engine"
  },
  {
    id: "robloxlink-core",
    title: "RobloxLink Core",
    tagline: "Enterprise Discord-Roblox Identity Synchronization & Group Rank Orchestrator",
    description:
      "An automated identity management and group rank orchestration bot built with Discord.js v14 and Roblox Open Cloud API v2. Features dynamic autocomplete across 20 group ranks, automated Discord-to-Roblox role synchronization, custom Canvas points cards, and Bloxlink/Rover account resolution.",
    category: "Discord",
    techStack: [
      "Node.js",
      "Discord.js v14",
      "Roblox Open Cloud API v2",
      "Node Canvas",
      "Dynamic Autocomplete",
      "RESTful API"
    ],
    features: [
      "Dynamic slash command autocomplete supporting all 20 group ranks with real-time member counters",
      "Bidirectional role synchronization granting matching Discord server roles upon Roblox rank changes",
      "Account verification resolving user identities via Bloxlink, Rover, and internal link registries",
      "Custom graphic canvas generation rendering branded user rank cards with avatars and points"
    ],
    metrics: [
      { label: "Group Ranks", value: "20 Dynamic Roles" },
      { label: "Account Sync", value: "Bloxlink & Rover" },
      { label: "Card Engine", value: "Custom Canvas" }
    ],
    highlightCode: `// Roblox Open Cloud API v2 Dynamic Role Assignment
export async function assignGroupRole(robloxUserId: number, roleId: number, groupId: number) {
  const response = await fetch(
    \`https://apis.roblox.com/cloud/v2/groups/\${groupId}/memberships/\${robloxUserId}\`,
    {
      method: "PATCH",
      headers: { "x-api-key": process.env.ROBLOX_OPEN_CLOUD_KEY! },
      body: JSON.stringify({ role: \`groups/\${groupId}/roles/\${roleId}\` })
    }
  );
  return response.ok;
}`,
    iconType: "cpu",
    githubUrl: "https://github.com/xSeiff/robloxlink-core",
    repoName: "robloxlink-core"
  },
  {
    id: "tempvoice-engine",
    title: "TempVoice Engine",
    tagline: "Dynamic Discord Voice Channel Orchestration & Ephemeral Session Lifecycle Engine",
    description:
      "An automated Join-to-Create voice channel orchestration bot built in Python 3.11 with discord.py and SQLite. Features sub-100ms room instantiation, interactive UI view modals (lock, hide, rename, user limits, bitrates), and an instant garbage collector that terminates vacant rooms with zero orphans.",
    category: "Automation",
    techStack: [
      "Python 3.11",
      "discord.py",
      "Pycord",
      "SQLite (aiosqlite)",
      "Discord UI Modals & Views",
      "Asyncio"
    ],
    features: [
      "Sub-85ms Join-to-Create room cloning with dynamic category and parent permissions inheritance",
      "Interactive ephemeral Discord button & modal control panel for room owners",
      "Zero-orphan garbage collector terminating vacant rooms immediately without lingering ghost channels",
      "Persistent SQLite database storing custom room configurations, ownerships, and blacklists"
    ],
    metrics: [
      { label: "Channel Creation", value: "< 85ms" },
      { label: "Cleanup Delay", value: "Instantaneous" },
      { label: "Ghost Channels", value: "0% Leftover" }
    ],
    highlightCode: `// Ephemeral Voice Channel Lifecycle & Instant Cleanup
@bot.event
async def on_voice_state_update(member, before, after):
    if after.channel and after.channel.id == TRIGGER_VOICE_ID:
        room = await create_ephemeral_room(member)
        await member.move_to(room)
    if before.channel and is_ephemeral_room(before.channel) and len(before.channel.members) == 0:
        await before.channel.delete(reason="TempVoice vacant room cleanup")`,
    iconType: "mic",
    githubUrl: "https://github.com/xSeiff/tempvoice-engine",
    repoName: "tempvoice-engine"
  },
  {
    id: "pulsebroadcast-engine",
    title: "PulseBroadcast Engine",
    tagline: "Distributed Multi-Guild Announcement & Webhook Synchronization Dispatcher",
    description:
      "A high-throughput announcement distribution engine designed for large multi-guild networks. Features sliding-window rate limiters preventing Discord 429 backoffs, multi-embed composers with interactive action buttons, and delivery telemetry tracking endpoint confirmations.",
    category: "Automation",
    techStack: [
      "Node.js",
      "Discord.js v14",
      "Async Queue Worker",
      "Sliding-Window Rate Limiter",
      "REST Webhooks"
    ],
    features: [
      "Sliding-window rate-limit backoff engine dispatching announcements across 100+ endpoints",
      "Interactive multi-embed composer with action rows, buttons, and custom brand footers",
      "Real-time delivery telemetry logging successful dispatches and identifying invalid webhooks",
      "Decoupled asynchronous queue worker isolating slow endpoints from blocking the main loop"
    ],
    metrics: [
      { label: "Dispatch Pacing", value: "Zero 429 Drops" },
      { label: "Channel Scope", value: "Multi-Guild Sync" },
      { label: "Payload", value: "Rich Embeds" }
    ],
    highlightCode: `// Sliding-Window Queue & Webhook Dispatcher
export async function queueBroadcast(endpoints: string[], embedPayload: EmbedBuilder) {
  const queue = new PacedQueue({ concurrency: 5, intervalMs: 250 });
  return Promise.all(
    endpoints.map((url) => queue.add(() => postWebhookSafe(url, embedPayload)))
  );
}`,
    iconType: "gauge",
    githubUrl: "https://github.com/xSeiff/pulsebroadcast-engine",
    repoName: "pulsebroadcast-engine"
  },
  {
    id: "geminivision-discord",
    title: "GeminiVision Assistant",
    tagline: "Multimodal AI Conversational Agent for Discord Powered by Google Gemini",
    description:
      "An intelligent conversational assistant integrating Google's official Gemini Generative AI SDK into Discord. Handles multi-turn conversational context, image vision recognition from attachments, and real-time streaming responses formatted into dynamic Discord embeds.",
    category: "AI",
    techStack: [
      "Node.js",
      "Discord.js v14",
      "@google/generative-ai",
      "TypeScript",
      "Multimodal Vision",
      "Context Memory"
    ],
    features: [
      "Zero-latency streaming responses integrated directly into live Discord message updates",
      "Multimodal vision analysis inspecting user image attachments and code screenshots",
      "Threaded conversation context memory allowing contextual multi-turn programming help",
      "Clean error handling with automatic fallback models to ensure high availability"
    ],
    metrics: [
      { label: "Core LLM", value: "Google Gemini 1.5" },
      { label: "Modality", value: "Text & Vision" },
      { label: "Streaming", value: "Real-Time Updates" }
    ],
    highlightCode: `// Google Generative AI Multimodal Model Integration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function processUserMessage(prompt: string, imageBuffer?: Buffer) {
  const parts: any[] = [prompt];
  if (imageBuffer) parts.push({ inlineData: { data: imageBuffer.toString("base64"), mimeType: "image/png" } });
  const result = await model.generateContent(parts);
  return result.response.text();
}`,
    iconType: "sparkles",
    featured: true,
    githubUrl: "https://github.com/xSeiff/geminivision-discord",
    repoName: "geminivision-discord"
  },
  {
    id: "salawat-tracker-bot",
    title: "SalawatTracker Bot",
    tagline: "Spiritual Community Goal Tracker with Dynamic SVG Progress Generation",
    description:
      "A high-engagement community bot that tracks spiritual goals (prayers upon the Prophet ﷺ) and generates dynamic visual progress graphics on the fly using `@resvg/resvg-js`. Features slash commands, server-wide milestones, and custom number emoji reactions.",
    category: "Discord",
    techStack: [
      "Node.js",
      "Discord.js v14",
      "@resvg/resvg-js",
      "Vector Graphics (SVG)",
      "Slash Commands",
      "JSON Storage"
    ],
    features: [
      "High-speed SVG-to-PNG vector rasterization rendering custom branded counter cards in <30ms",
      "Server-wide cumulative goal meters with interactive milestone celebrations and announcements",
      "Custom emoji reaction sequences providing instant visual feedback on message triggers",
      "Full Discord.js v14 slash command suite with administrative reset and configuration controls"
    ],
    metrics: [
      { label: "Render Engine", value: "resvg-js SVG" },
      { label: "Interactions", value: "Slash Commands" },
      { label: "Counter Sync", value: "Real-Time" }
    ],
    highlightCode: `// High-Speed SVG Vector Rasterization
export async function renderMilestoneCard(count: number, guildName: string): Promise<Buffer> {
  const svg = generateProgressSvgTemplate({ count, guildName });
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: 800 } });
  return resvg.render().asPng();
}`,
    iconType: "coins",
    githubUrl: "https://github.com/xSeiff/salawat-tracker-bot",
    repoName: "salawat-tracker-bot"
  },
  {
    id: "qureo-automation-platform",
    title: "QureoAutomation Platform",
    tagline: "High-Performance Headless Browser Orchestration & Automated Assessment Engine",
    description:
      "A commercial automated curriculum and browser orchestration platform. Built with Node.js, Express, and Puppeteer headless browser clusters, featuring Telegram webhook status notifications, SQLite progress registries, and automated test execution with real-time DOM telemetry.",
    category: "Automation",
    techStack: [
      "Node.js",
      "Express.js",
      "Puppeteer Headless",
      "SQLite3",
      "Telegram Telegraf API",
      "Compression"
    ],
    features: [
      "Multi-session Puppeteer cluster executing automated web assessments with anti-detection headers",
      "Telegram bot integration delivering instant completion alerts, error dumps, and screenshots",
      "Persistent SQLite tracking logging completed modules, attempt times, and diagnostic telemetry",
      "Commercial-grade Express web management console with live session inspection"
    ],
    metrics: [
      { label: "Automation", value: "Headless Chromium" },
      { label: "Alerts", value: "Telegram Webhooks" },
      { label: "Architecture", value: "Commercial Platform" }
    ],
    highlightCode: `// Automated Headless Session Solver & Telegram Telemetry
export async function runAutomatedSession(credentials: StudentAuth, chapterId: string) {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await executeCurriculumSolver(page, chapterId);
  await notifyTelegram(\`Session completed for \${credentials.username}\`);
  await browser.close();
}`,
    iconType: "lock",
    isPrivate: true,
    repoName: "qureo-automation-platform"
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
      "Turbo Monorepo Architecture",
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
