import React from "react";
import { Terminal, Database, Layout, Wrench } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/projects";

export const SkillsSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="h-5 w-5 text-indigo-400" />;
      case 1:
        return <Database className="h-5 w-5 text-emerald-400" />;
      case 2:
        return <Layout className="h-5 w-5 text-blue-400" />;
      case 3:
      default:
        return <Wrench className="h-5 w-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-300 font-mono mb-4">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Expertise
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Specialized tools, backend frameworks, and bot architectures honed through production deployments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-6 backdrop-blur-sm hover:border-zinc-700/80 transition-all hover:bg-zinc-900/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/80 shadow-inner">
                  {getIcon(idx)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-zinc-800 bg-zinc-950/70 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
