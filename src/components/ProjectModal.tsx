import { useEffect } from "react";
import { X, CheckCircle2, Code, Layers, Zap, ExternalLink, Lock, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg border border-zinc-800 p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & Status Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-0.5 text-xs font-medium text-indigo-300 font-mono">
            {project.category}
          </span>
          {project.isPrivate ? (
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-300 font-mono flex items-center gap-1.5">
              <Lock className="h-3 w-3" />
              Enterprise Client System (Private)
            </span>
          ) : project.featured ? (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 font-mono">
              Flagship Production
            </span>
          ) : null}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm font-medium text-zinc-400 font-mono">
              {project.tagline}
            </p>
          </div>

          {project.githubUrl && !project.isPrivate && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              <span>View Repository</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-lg sm:text-xl font-bold font-mono text-white">{m.value}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
            <Zap className="h-4 w-4 text-indigo-400" />
            System Architecture & Overview
          </h4>
          <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
            <Layers className="h-4 w-4 text-indigo-400" />
            Engineering Highlights
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Highlight Code or Architecture snippet if present */}
        {project.highlightCode && (
          <div className="mt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
              <Code className="h-4 w-4 text-indigo-400" />
              Source Excerpt / Architectural Logic
            </h4>
            <div className="mt-2 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 text-xs font-mono text-zinc-300">
              <pre><code>{project.highlightCode}</code></pre>
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mt-6 border-t border-zinc-800/80 pt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono mb-3">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800 pt-5">
          {project.isPrivate ? (
            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-mono">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>Commercial client repository under proprietary license.</span>
            </div>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 px-4 py-2 text-xs font-medium text-white transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>github.com/xSeiff/{project.repoName}</span>
              <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
            </a>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-lg bg-zinc-800 hover:bg-zinc-700 px-4 py-2 text-xs font-medium text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
