import React, { useState } from "react";
import { MessageSquare, Mail, Copy, Check, Send, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { GithubIcon } from "./icons";

interface ContactSectionProps {
  discordHandle: string;
}

export function ContactSection({ discordHandle }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  
  const emailAddress = "seif10algaml@gmail.com";
  const webhookUrl = "https://discord.com/api/webhooks/1543968502711451698/9jeSPoclr-RICzn8ko_sspQsGfAfc1NFYTxPZoQohcM6X8tdkoSWCDtMbFOSjTb5kc_r";
  const myDiscordId = "938056009459576882";

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contact || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const nowUnix = Math.floor(Date.now() / 1000);

    const discordPayload = {
      content: `<@${myDiscordId}> 🚨 **New Portfolio Inquiry Received!**`,
      embeds: [
        {
          title: "💼 New Client Inquiry (Portfolio Website)",
          color: 0x5865f2, // Discord Blurple
          description: formData.message,
          fields: [
            {
              name: "👤 Client / Handle",
              value: formData.name ? `\`${formData.name}\`` : "*Anonymous / Not specified*",
              inline: true,
            },
            {
              name: "📫 Contact Method",
              value: `\`${formData.contact}\``,
              inline: true,
            },
            {
              name: "🕒 Sent At",
              value: `<t:${nowUnix}:F> (<t:${nowUnix}:R>)`,
              inline: false,
            },
          ],
          footer: {
            text: "Seif Developer Portfolio • Webhook Notification",
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordPayload),
      });

      if (!response.ok) {
        throw new Error(`Discord API returned status ${response.status}`);
      }

      setFormSent(true);
      setFormData({ name: "", contact: "", message: "" });
      setTimeout(() => setFormSent(false), 6000);
    } catch (err: any) {
      console.error("Webhook dispatch error:", err);
      setErrorMessage("Failed to dispatch message directly to Discord. Please contact directly via email or Discord.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-800/80 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 font-mono mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Let's Collaborate</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Need a custom bot, security audit, or automation pipeline?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                Whether you need enterprise ticket systems, anti-raid defenses, protocol security testing, or headless media rendering engines, I'm available for custom bot commissions and security contracting.
              </p>

              {/* Direct channels */}
              <div className="mt-8 space-y-3">
                {/* Discord Widget */}
                <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-3.5 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/20 text-[#5865F2]">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-mono">Discord Handle</div>
                      <div className="text-sm font-semibold text-white font-mono">@{discordHandle}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyDiscord}
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Email Widget */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-3.5 backdrop-blur-sm hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-mono">Direct Email</div>
                      <div className="text-sm font-semibold text-white font-mono">{emailAddress}</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-indigo-400">Send Mail →</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/xseif"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-3.5 backdrop-blur-sm hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/60 border border-zinc-700/50 text-white">
                      <GithubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-mono">Open Source</div>
                      <div className="text-sm font-semibold text-white font-mono">github.com/xseif</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-zinc-400">Visit Profile →</span>
                </a>
              </div>
            </div>

            <div className="mt-8 text-xs text-zinc-500 font-mono">
              Direct Discord notifications active &bull; Typical response time: &lt; 12 hours
            </div>
          </div>

          {/* Right Column: Quick Inquiry Form (Discord Webhook Attached) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Send a Direct Message
                  </h3>
                  <p className="mt-1 text-xs text-zinc-400">
                    Have a specification ready or want to discuss a custom bot or security audit? Drop a message below.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live to Discord
                </div>
              </div>

              {formSent ? (
                <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                  <Check className="mx-auto h-8 w-8 text-emerald-400" />
                  <h4 className="mt-2 text-sm font-bold text-white">Message Delivered to Discord!</h4>
                  <p className="mt-1 text-xs text-zinc-400">
                    Your inquiry was dispatched directly to Seif's private Discord channel. I'll reach out to your contact info shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {errorMessage && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 flex items-start gap-2.5 text-xs text-red-300">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 font-mono mb-1.5">
                      Your Name / Handle
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 font-mono mb-1.5">
                      Contact Info (Discord Tag or Email) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. @alex or alex@example.com"
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 font-mono mb-1.5">
                      Project Details / Requirement *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your bot concept, required features, dashboard, or security auditing needs..."
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 transition-all active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Dispatching to Discord...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
