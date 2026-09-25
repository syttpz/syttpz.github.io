import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Mail, Github, Linkedin, Globe } from 'lucide-react'

type Props = {
  children: React.ReactNode
}

const navItems = [
  { to: '/experience', label: 'Experience' },
  { to: '/project',    label: 'Projects' },
  { to: '/activities', label: 'Activities' },
  { to: '/resume',     label: 'Resume' },
]

const contactItems = [
  { href: 'mailto:bh2730@nyu.edu', icon: Mail, label: 'bh2730@nyu.edu' },
  { href: 'https://github.com/syttpz', icon: Github, label: 'github.com/syttpz' },
  { href: 'https://linkedin.com/in/eddy-hu217/', icon: Linkedin, label: 'eddy-hu217' },
  { href: 'https://syttpz.github.io', icon: Globe, label: 'syttpz.github.io' },
]

export default function Layout({ children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!mobileOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [mobileOpen])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block border-l-2 px-4 py-2 text-sm transition-colors ${
      isActive
        ? 'border-stone-100 text-stone-100 font-semibold'
        : 'border-transparent text-stone-400 hover:text-stone-100'
    }`

  return (
    <div className="flex min-h-screen bg-stone-900 text-stone-100 font-sans">
      <a href="#main-content" onClick={event => {
        event.preventDefault()
        setMobileOpen(false)
        document.getElementById('main-content')?.focus()
      }} className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-stone-800 focus:px-4 focus:py-3 focus:text-white">Skip to content</a>

      {/* ── Mobile top bar ── */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-5 bg-stone-900 border-b border-stone-700">
        <span className="font-bold tracking-tight text-base">Eddy Hu</span>
        <div className="flex items-center gap-1">
          <button ref={menuButton} onClick={() => setMobileOpen(o => !o)} className="p-3 rounded-md text-stone-400 hover:bg-stone-700 transition-colors" aria-label="Toggle menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation">
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <>
        <div className="md:hidden fixed inset-0 top-16 z-30 bg-black/20" onClick={() => setMobileOpen(false)} aria-hidden="true" />
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden fixed top-16 inset-x-0 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto bg-stone-900 border-b border-stone-700 px-4 py-3 flex flex-col gap-1">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} onClick={() => setMobileOpen(false)}>
              {label}
            </NavLink>
          ))}
          <div className="mt-2 border-t border-stone-700 pt-2 ">
            {contactItems.map(({ href, icon: Icon, label }) => (
              <a key={href} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-stone-300 hover:bg-stone-700 ">
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </nav>
        </>
      )}

      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex w-72 shrink-0 fixed h-screen flex-col border-r border-stone-700 bg-stone-900 overflow-y-auto">

        {/* Profile section */}
        <div className="px-8 pt-12 pb-8">
          <img
            src="/profile_pic.jpg"
            className="w-32 h-32 rounded-full object-cover mb-6"
            alt="Eddy Hu"
          />
          <h1 className="text-2xl font-bold tracking-tight leading-tight">Eddy Hu</h1>
          <p className="text-sm text-stone-400 mt-2 leading-relaxed">
            Math &amp; CS @ NYU Tandon<br />New York, NY
          </p>

          {/* Contact links */}
          <div className="mt-5 space-y-2.5">
            {contactItems.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-stone-400 hover:text-stone-100 transition-colors truncate"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Main navigation" className="px-8 pb-10 flex flex-col gap-2">
          {navItems.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

      </aside>

      {/* ── Main content ── */}
      <main id="main-content" tabIndex={-1} className="md:ml-72 min-w-0 flex-1 min-h-screen pt-16 md:pt-0">
        {children}
      </main>
    </div>
  )
}
