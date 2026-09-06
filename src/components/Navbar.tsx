import { useState } from "react";
import { MessageSquare, Copy, Check, Menu, X, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons";

interface NavbarProps {
  discordHandle: string;
}

export function Navbar({ discordHandle }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText(discordHandle);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-white group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/60 bg-zinc-900/90 text-indigo-400 shadow-inner group-hover:border-indigo-500/50 group-hover:text-indigo-300 transition-all">
              <span className="font-mono text-base font-extrabold">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-zinc-100">Seif</span>
              <span className="text-[11px] font-medium text-zinc-500 font-mono">bot dev & sec engineer</span>
            </div>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for hire
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleCopyDiscord}
            className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all shadow-sm active:scale-95"
            title="Click to copy Discord username"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied @{discordHandle}</span>
              </>
            ) : (
              <>
                <MessageSquare className="h-3.5 w-3.5 text-[#5865F2]" />
                <span>@{discordHandle}</span>
                <Copy className="h-3 w-3 text-zinc-500" />
              </>
            )}
          </button>

          <a
            href="https://github.com/xSeiff"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 text-xs font-medium text-white shadow-sm shadow-indigo-500/20 transition-all active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get in touch</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex sm:hidden items-center justify-center rounded-lg border border-zinc-800 p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-[#09090b] px-4 py-4 sm:hidden flex flex-col gap-3">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-zinc-300 hover:text-white py-1"
          >
            Projects
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-zinc-300 hover:text-white py-1"
          >
            Architecture
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-zinc-300 hover:text-white py-1"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-zinc-300 hover:text-white py-1"
          >
            Contact
          </a>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <button
              onClick={handleCopyDiscord}
              className="flex items-center gap-2 text-xs font-medium text-zinc-300"
            >
              {copied ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> Copied @{discordHandle}
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-[#5865F2]" /> Copy @{discordHandle}
                </span>
              )}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
