import { useState } from "react";
import { ArrowRight, Copy, Check, Terminal, Server, ShieldCheck, MessageSquare } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

interface HeroProps {
  discordHandle: string;
}

export function Hero({ discordHandle }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-zinc-800/60">
      {/* Interactive dynamic particle canvas & mouse spotlight */}
      <ParticleBackground />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-sm mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Full-Stack Bot Developer • All Discord Versions • Cybersecurity</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineering high-scale{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Discord bots
              </span>{" "}
              & cybersecurity harnesses.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-zinc-200 font-semibold">Seif</strong>. I architect resilient Discord infrastructure—spanning across <strong className="text-zinc-200">all Discord.js & discord.py versions</strong>, protocol-level security stress testing (like <strong className="text-zinc-200">Seif Nuker</strong>), full-stack React dashboards, and autonomous media pipelines.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-white transition-all shadow-md hover:shadow-zinc-100/10 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="h-4 w-4 text-zinc-800" />
              </a>

              <button
                onClick={handleCopyDiscord}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/90 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-850 hover:text-white transition-all active:scale-95 shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied @{discordHandle}</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-4 w-4 text-[#5865F2]" />
                    <span>Copy Discord: @{discordHandle}</span>
                    <Copy className="h-3.5 w-3.5 text-zinc-500 ml-1" />
                  </>
                )}
              </button>
            </div>

            {/* Global Developer Caliber Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-zinc-800/80 w-full">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">15+</div>
                <div className="text-xs text-zinc-400 mt-0.5">Production Systems</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">All</div>
                <div className="text-xs text-zinc-400 mt-0.5">Discord API Versions</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">250+</div>
                <div className="text-xs text-zinc-400 mt-0.5">Req/s Concurrency</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white">Full-Stack</div>
                <div className="text-xs text-zinc-400 mt-0.5">Bots • Web • Security</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code / Architecture Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl border border-zinc-800/90 bg-zinc-950/80 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800/90 bg-zinc-900/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">security-harness.py</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STRESS-TEST READY
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-zinc-300">
                <p className="text-zinc-500"># Low-level protocol testing & rate limit auditing</p>
                <p className="mt-1">
                  <span className="text-pink-400">import</span> <span className="text-indigo-300">asyncio, aiohttp, uvloop</span>
                </p>
                <p className="mt-1">
                  <span className="text-pink-400">from</span> <span className="text-emerald-300">seif_nuker.audit</span> <span className="text-pink-400">import</span> <span className="text-indigo-300">BucketTelemetry</span>
                </p>
                
                <div className="my-3 py-2 px-3 rounded-md bg-zinc-900/90 border border-zinc-800/80 text-[11px]">
                  <p className="text-zinc-400">
                    <span className="text-indigo-400">async def</span> <span className="text-yellow-300">audit_resilience</span>(guild_id: str):
                  </p>
                  <p className="pl-4 text-zinc-300">
                    await harness.trace_429_recovery(guild_id)
                  </p>
                  <p className="pl-4 text-zinc-400">
                    # Discord API v6 through v10 verified
                  </p>
                </div>

                <div className="space-y-1.5 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                    <span>Seif Nuker: 250+ req/s Protocol Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Server className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Discord Versions: v12, v13, v14, d.py, Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Full-Stack Web Dashboards & Media Pipelines</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/70 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Stack: Python / TypeScript / React</span>
                  <span className="text-indigo-400 font-medium">@xseif</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
