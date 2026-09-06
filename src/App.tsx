import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";
import { ArchitectureShowcase } from "./components/ArchitectureShowcase";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { PROJECTS_DATA } from "./data/projects";
import type { Project } from "./data/projects";
import { Terminal } from "lucide-react";

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const discordHandle = "xseif";

  const categories = ["All", "Full-Stack", "AI", "Cybersecurity", "Automation", "Discord"];

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col selection:bg-indigo-500/20 selection:text-indigo-300">
      {/* Sticky Navigation */}
      <Navbar discordHandle={discordHandle} />

      {/* Hero Section */}
      <Hero discordHandle={discordHandle} />

      {/* Projects Showcase Section */}
      <section id="projects" className="py-20 border-b border-zinc-800/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-300 font-mono mb-4">
                <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                <span>Production Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Bots, Web Portals & Security Systems
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-400">
                A selection of {PROJECTS_DATA.length}+ deployed systems—ranging from multi-tenant bot SaaS platforms and Google Gemini AI integrations, to anti-raid security harnesses and automated video pipelines.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveModalProject(p)}
              />
            ))}
          </div>

          {/* Quick info note */}
          <div className="mt-12 text-center text-xs text-zinc-500 font-mono">
            Click on any card to inspect architecture breakdowns, code excerpts, and technical metrics.
          </div>

        </div>
      </section>

      {/* Architecture Showcase */}
      <ArchitectureShowcase />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Contact Section */}
      <ContactSection discordHandle={discordHandle} />

      {/* Footer */}
      <Footer />

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}

export default App;
