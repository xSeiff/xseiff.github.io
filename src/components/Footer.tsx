export function Footer() {
  return (
    <footer className="py-10 bg-[#09090b] text-zinc-500 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-zinc-300 font-semibold">Seif</span>
          <span>•</span>
          <span>Full-Stack Discord Bot Developer & Automation Engineer</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#projects" className="hover:text-zinc-300 transition-colors">Projects</a>
          <a href="#architecture" className="hover:text-zinc-300 transition-colors">Architecture</a>
          <a href="#skills" className="hover:text-zinc-300 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
        </div>

        <div className="text-zinc-600 font-mono">
          &copy; {new Date().getFullYear()} Seif. Built with React, Vite & Tailwind.
        </div>
      </div>
    </footer>
  );
}
