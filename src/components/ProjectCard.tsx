import { 
  Ticket, 
  Video, 
  Gauge, 
  Shield, 
  Sparkles, 
  Lock, 
  Cpu, 
  Bot, 
  Database, 
  Globe, 
  Coins, 
  Mic, 
  ArrowUpRight, 
  CheckCircle2
} from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const renderIcon = () => {
    switch (project.iconType) {
      case "bot":
        return <Bot className="h-5 w-5 text-indigo-400" />;
      case "globe":
        return <Globe className="h-5 w-5 text-cyan-400" />;
      case "sparkles":
        return <Sparkles className="h-5 w-5 text-amber-400" />;
      case "mic":
        return <Mic className="h-5 w-5 text-emerald-400" />;
      case "coins":
        return <Coins className="h-5 w-5 text-yellow-400" />;
      case "ticket":
        return <Ticket className="h-5 w-5 text-indigo-400" />;
      case "video":
        return <Video className="h-5 w-5 text-pink-400" />;
      case "gauge":
        return <Gauge className="h-5 w-5 text-teal-400" />;
      case "shield":
        return <Shield className="h-5 w-5 text-blue-400" />;
      case "lock":
        return <Lock className="h-5 w-5 text-red-400" />;
      case "database":
        return <Database className="h-5 w-5 text-emerald-400" />;
      case "cpu":
      default:
        return <Cpu className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <div 
      onClick={() => onSelect(project)}
      className="group relative flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer"
    >
      <div>
        {/* Top Header: Icon & Category Badge */}
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/80 shadow-inner group-hover:border-zinc-700 transition-colors">
            {renderIcon()}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400 font-mono">
              {project.category}
            </span>
            {project.featured && (
              <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-300">
                FEATURED
              </span>
            )}
          </div>
        </div>

        {/* Title and Tagline */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-all" />
          </div>
          <p className="mt-1 text-xs font-medium text-zinc-400 font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights Preview */}
        <div className="mt-4 space-y-1.5 border-t border-zinc-800/60 pt-3">
          {project.features.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Metric Badges */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-zinc-800/80 pt-4">
          {project.metrics.map((m, i) => (
            <div key={i} className="rounded-md bg-zinc-950/60 px-2 py-1.5 text-center border border-zinc-800/40">
              <div className="text-[11px] font-bold font-mono text-zinc-200">{m.value}</div>
              <div className="text-[10px] text-zinc-500 truncate">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="rounded bg-zinc-800/60 px-2 py-0.5 text-[11px] text-zinc-400 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded bg-zinc-800/40 px-1.5 py-0.5 text-[10px] text-zinc-500 font-mono">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
