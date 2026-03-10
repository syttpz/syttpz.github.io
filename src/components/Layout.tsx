import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Moon, Sun, FileText, Briefcase, FolderOpen, Menu, X, Mail, Github, Linkedin, Globe } from 'lucide-react'

type Props = {
  dark: boolean
  onToggleDark: () => void
  children: React.ReactNode
}

const navItems = [
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/project',    label: 'Projects',   icon: FolderOpen },
  { to: '/resume',     label: 'Resume',     icon: FileText },
]

export default function Layout({ dark, onToggleDark, children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
      isActive
        ? 'bg-stone-800 dark:bg-stone-100 text-stone-50 dark:text-stone-900 shadow-sm'
        : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
    }`

  return (
    <div className="flex min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-800 dark:text-stone-100 font-sans">

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 py-3 bg-stone-100/90 dark:bg-stone-800/90 backdrop-blur border-b border-stone-200 dark:border-stone-700">
        <span className="font-bold tracking-tight text-base">Eddy Hu</span>
        <div className="flex items-center gap-1">
          <button onClick={onToggleDark} className="p-2 rounded-md text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors" aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={() => setMobileOpen(o => !o)} className="p-2 rounded-md text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors" aria-label="Toggle menu">
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[49px] inset-x-0 z-40 bg-stone-100 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 px-4 py-3 flex flex-col gap-1">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} onClick={() => setMobileOpen(false)}>
              {label}
            </NavLink>
          ))}
        </div>
      )}

      {/* ── Desktop sidebar ── */}
      <aside className="dot-bg hidden md:flex w-72 shrink-0 fixed h-screen flex-col border-r border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800/60 overflow-y-auto">

        {/* Top accent stripe */}
        <div className="h-0.5 shrink-0 bg-gradient-to-r from-amber-400 via-orange-300 to-stone-400 dark:from-amber-600 dark:via-orange-500 dark:to-stone-500" />

        {/* Profile section */}
        <div className="px-7 pt-8 pb-7 border-b border-stone-200 dark:border-stone-700">
          <img
            src="/profile_pic.jpg"
            className="w-32 h-32 rounded-full object-cover ring-2 ring-stone-300 dark:ring-stone-600 shadow-md mb-5"
            alt="Eddy Hu"
          />
          <h1 className="text-2xl font-bold tracking-tight leading-tight">Eddy Hu</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-1.5 leading-snug font-light tracking-wide"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Math &amp; CS @ NYU Tandon<br />New York, NY
          </p>

          {/* Contact links */}
          <div className="mt-5 space-y-2.5">
            {[
              { href: 'mailto:bh2730@nyu.edu',              icon: Mail,     label: 'bh2730@nyu.edu' },
              { href: 'https://github.com/syttpz',           icon: Github,   label: 'github.com/syttpz' },
              { href: 'https://linkedin.com/in/eddy-hu217/', icon: Linkedin, label: 'eddy-hu217' },
              { href: 'https://syttpz.github.io',            icon: Globe,    label: 'syttpz.github.io' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-100 transition-colors truncate"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-5 flex flex-col gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={linkClass}>
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <div className="px-4 pb-6">
          <div className="h-px bg-stone-200 dark:bg-stone-700 mb-3" />
          <button
            onClick={onToggleDark}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-base text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {dark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="md:ml-72 flex-1 min-h-screen pt-[49px] md:pt-0">
        {children}
      </main>
    </div>
  )
}
