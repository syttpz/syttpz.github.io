import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-3 flex items-center gap-2">
        <Link to="/" className="font-semibold text-slate-900 text-sm mr-4">
          Eddy Hu
        </Link>
        <div className="flex items-center gap-1">
          <Link to="/" className="px-3 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link to="/experience" className="px-3 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors">
            Experience
          </Link>
          <Link to="/project" className="px-3 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors">
            Projects
          </Link>
        </div>
        <div className="ml-auto">
          <a
            href="/Hu_Bo_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-slate-900 text-white rounded-md hover:bg-slate-700 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
