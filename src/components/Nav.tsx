import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="
        relative p-4
        bg-gradient-to-r from-[#0f1115] via-[#101217]/90 to-[#0b0d12]
        border-b border-white/10
        after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px
        after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent
      "
    >
      <ul className="mx-auto flex items-center gap-6 text-sm text-slate-200">
        <li><Link to="/" className="px-2 py-1 rounded-md hover:bg-white/5 hover:text-white transition-colors">Home</Link></li>
        <li><Link to="/experience" className="px-2 py-1 rounded-md hover:bg-white/5 hover:text-white transition-colors">Experience</Link></li>
        <li><Link to="/project" className="px-2 py-1 rounded-md hover:bg-white/5 hover:text-white transition-colors">Project</Link></li>
        <li>
          <a href="/Hu_Eddy_resume.pdf" target="_blank" rel="noopener noreferrer"
          className="px-2 py-1 rounded-md hover:bg-white/5 hover:text-white transition-colors">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
