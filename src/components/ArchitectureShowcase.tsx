import { useState } from "react";
import { Layers, Server, Cpu, Check, ArrowDown } from "lucide-react";

function FlyingWords({ text, baseDelay = 20 }: { text: string; baseDelay?: number }) {
  const words = text.split(" ");
  return (
    <span className="inline-flex flex-wrap gap-x-2">
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block animate-fly-word"
          style={{ animationDelay: `${baseDelay + i * 35}ms` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState<"ticket" | "media">("ticket");

  const handleTabChange = (nextTab: "ticket" | "media") => {
    if (nextTab === activeTab) return;
    setActiveTab(nextTab);
  };

  return (
    <section id="architecture" className="py-20 border-b border-zinc-800/80 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 font-mono mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>Systems Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for high concurrency & zero downtime.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            A look behind the scenes at how the bot gateways, real-time web dashboards, and headless media pipelines communicate.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-8 flex gap-2 border-b border-zinc-800/80 pb-px">
          <button
            onClick={() => handleTabChange("ticket")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium transition-all border-b-2 font-mono cursor-pointer ${
              activeTab === "ticket"
                ? "border-indigo-500 text-white bg-zinc-900/40"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Server className="h-4 w-4 text-indigo-400" />
            <span>TicketBot Full-Stack Portal</span>
          </button>

          <button
            onClick={() => handleTabChange("media")}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium transition-all border-b-2 font-mono cursor-pointer ${
              activeTab === "media"
                ? "border-pink-500 text-white bg-zinc-900/40"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Cpu className="h-4 w-4 text-pink-400" />
            <span>Quran Media Rendering Engine</span>
          </button>
        </div>

        {/* Architecture Content Container with Key-Based Re-render */}
        <div className="mt-8 rounded-2xl border border-zinc-800/90 bg-zinc-900/30 p-6 sm:p-8 backdrop-blur-sm overflow-hidden min-h-[440px] flex items-center">
          <div key={activeTab} className="w-full">
            {activeTab === "ticket" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Specs & Flying Words */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    className="inline-block rounded border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-indigo-300 animate-fly-word"
                    style={{ animationDelay: "10ms" }}
                  >
                    Full-Stack Distributed System
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    <FlyingWords text="Bidirectional Event Synchronization" baseDelay={30} />
                  </h3>

                  <p
                    className="text-sm text-zinc-400 leading-relaxed animate-fly-word"
                    style={{ animationDelay: "140ms" }}
                  >
                    The TicketBot integrates Discord Gateway WebSocket events with an Express & Vite web application via a normalized PostgreSQL/SQLite database managed by Drizzle ORM.
                  </p>

                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "170ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Discord OAuth2 session authentication & RBAC</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "200ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Real-time channel permissions & ephemeral controls</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "230ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Automated HTML/JSON transcript archiving</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "260ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Caddy reverse proxy with automated Let's Encrypt SSL</span>
                    </li>
                  </ul>
                </div>

                {/* Right Architecture Workflow with Flying Steps */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-xs text-zinc-300">
                    <div
                      className="text-zinc-500 mb-3 animate-fly-word"
                      style={{ animationDelay: "50ms" }}
                    >
                      // Architecture Workflow
                    </div>

                    <div className="space-y-2.5">
                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "80ms" }}
                      >
                        <span className="text-indigo-300 font-medium">1. Client / Staff</span>
                        <span className="text-zinc-500">Discord User / Web Admin</span>
                      </div>

                      <div
                        className="flex items-center justify-center gap-1.5 text-zinc-500 py-0.5 animate-fly-word"
                        style={{ animationDelay: "110ms" }}
                      >
                        <ArrowDown className="h-3.5 w-3.5 text-indigo-400/80" />
                        <span className="text-[11px] text-zinc-400">Slash Commands & OAuth2 Webhooks</span>
                      </div>

                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "140ms" }}
                      >
                        <span className="text-indigo-300 font-medium">2. Gateway & API Layer</span>
                        <span className="text-zinc-500">Discord.js v14 + Express Router</span>
                      </div>

                      <div
                        className="flex items-center justify-center gap-1.5 text-zinc-500 py-0.5 animate-fly-word"
                        style={{ animationDelay: "170ms" }}
                      >
                        <ArrowDown className="h-3.5 w-3.5 text-indigo-400/80" />
                        <span className="text-[11px] text-zinc-400">Drizzle Queries / Migrations</span>
                      </div>

                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "200ms" }}
                      >
                        <span className="text-indigo-300 font-medium">3. Persistence & Cache</span>
                        <span className="text-zinc-500">PostgreSQL / SQLite Storage</span>
                      </div>

                      <div
                        className="flex items-center justify-center gap-1.5 text-zinc-500 py-0.5 animate-fly-word"
                        style={{ animationDelay: "230ms" }}
                      >
                        <ArrowDown className="h-3.5 w-3.5 text-indigo-400/80" />
                        <span className="text-[11px] text-zinc-400">Automated Exports</span>
                      </div>

                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "260ms" }}
                      >
                        <span className="text-indigo-300 font-medium">4. Transcripts & CDN</span>
                        <span className="text-zinc-500">Static HTML Mirror + Attachment Storage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Specs & Flying Words */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    className="inline-block rounded border border-pink-500/20 bg-pink-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-pink-300 animate-fly-word"
                    style={{ animationDelay: "10ms" }}
                  >
                    Headless Media Engine
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    <FlyingWords text="Automated Video Compositing Pipeline" baseDelay={30} />
                  </h3>

                  <p
                    className="text-sm text-zinc-400 leading-relaxed animate-fly-word"
                    style={{ animationDelay: "140ms" }}
                  >
                    A high-throughput video processing runner built in Python. Handles RTL Arabic typography shaping, audio frequency analysis, dynamic subtitle synchronization, and automated social publishing.
                  </p>

                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "170ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>HarfBuzz & FriBidi sub-pixel Arabic ligatures</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "200ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Hardware-accelerated NVENC FFmpeg encoding (3.8x speed)</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "230ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Audio-reactive waveforms matched to vocal track</span>
                    </li>
                    <li className="flex items-center gap-2 animate-fly-word" style={{ animationDelay: "260ms" }}>
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Cron/interval background scheduler for social distribution</span>
                    </li>
                  </ul>
                </div>

                {/* Right Architecture Workflow with Flying Steps */}
                <div className="lg:col-span-7">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-xs text-zinc-300">
                    <div
                      className="text-zinc-500 mb-3 animate-fly-word"
                      style={{ animationDelay: "50ms" }}
                    >
                      // Media Pipeline Workflow
                    </div>

                    <div className="space-y-2.5">
                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "80ms" }}
                      >
                        <span className="text-pink-300 font-medium">1. Ingestion & Audio</span>
                        <span className="text-zinc-500">Recitation Audio + Background Loops</span>
                      </div>

                      <div
                        className="flex items-center justify-center gap-1.5 text-zinc-500 py-0.5 animate-fly-word"
                        style={{ animationDelay: "110ms" }}
                      >
                        <ArrowDown className="h-3.5 w-3.5 text-pink-400/80" />
                        <span className="text-[11px] text-zinc-400">RTL FriBidi & HarfBuzz</span>
                      </div>

                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "140ms" }}
                      >
                        <span className="text-pink-300 font-medium">2. Text Shaping & Subtitles</span>
                        <span className="text-zinc-500">Amiri Font + libass Subtitle Burn</span>
                      </div>

                      <div
                        className="flex items-center justify-center gap-1.5 text-zinc-500 py-0.5 animate-fly-word"
                        style={{ animationDelay: "170ms" }}
                      >
                        <ArrowDown className="h-3.5 w-3.5 text-pink-400/80" />
                        <span className="text-[11px] text-zinc-400">NVENC / FFmpeg Compositor</span>
                      </div>

                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "200ms" }}
                      >
                        <span className="text-pink-300 font-medium">3. Hardware GPU Render</span>
                        <span className="text-zinc-500">1080x1920 (9:16) 60fps MP4</span>
                      </div>

                      <div
                        className="flex items-center justify-center gap-1.5 text-zinc-500 py-0.5 animate-fly-word"
                        style={{ animationDelay: "230ms" }}
                      >
                        <ArrowDown className="h-3.5 w-3.5 text-pink-400/80" />
                        <span className="text-[11px] text-zinc-400">Automated Dispatch</span>
                      </div>

                      <div
                        className="flex items-center justify-between p-2.5 rounded bg-zinc-900 border border-zinc-800 animate-fly-step"
                        style={{ animationDelay: "260ms" }}
                      >
                        <span className="text-pink-300 font-medium">4. Scheduled Publishing</span>
                        <span className="text-zinc-500">Discord Webhooks / TikTok Upload</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}


