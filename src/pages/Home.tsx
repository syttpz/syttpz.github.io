import { Mail, Github, Linkedin, Globe } from 'lucide-react'

const skills: Record<string, string[]> = {
  Languages:          ['C/C++', 'Python', 'TypeScript', 'SQL', 'Ruby', 'Rust'],
  'Robotics / Systems': ['ROS 2', 'ROS Noetic', 'Gazebo', 'Viam', 'WebRTC', 'rosserial', 'Linux/UNIX'],
  Frameworks:         ['React', 'Rails', 'Tauri', 'Flask'],
  Tools:              ['Git', 'Docker', 'Tailscale', 'MySQL', 'PostgreSQL'],
}

export default function Home() {
  return (
    <div className="min-h-screen px-8 py-12">

      {/* ── Hero ── */}
      <div className="flex flex-col items-center text-center mb-10">
        <img
          src="/profile_pic.jpg"
          className="w-44 h-44 rounded-full object-cover ring-4 ring-stone-200 dark:ring-stone-600 shadow-lg"
          alt="Eddy Hu"
        />
        <h2 className="mt-5 text-4xl font-bold tracking-tight">Eddy Hu</h2>
        <p className="mt-2 text-base text-stone-500 dark:text-stone-400">
          New York, NY · Math &amp; CS @ NYU Tandon
        </p>
      </div>

      <div className="max-w-xl mx-auto space-y-4">

        {/* ── About ── */}
        <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6 shadow-sm">
          <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-3">
            // about
          </p>
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Interested in collaborations across robotics, systems programming, desktop apps,
            and developer tooling. Currently contributing to NYU's HSRN datacenter teleoperation
            project and leading motion control for NYU RoboSub.
            Actively seeking Summer 2026 SWE / Robotics internships.
          </p>
        </div>

        {/* ── Skills ── */}
        <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6 shadow-sm">
          <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-4">
            // skills
          </p>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs font-mono text-stone-400 dark:text-stone-500 mb-2">
                  {category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="rounded-md border border-stone-200 dark:border-stone-600 bg-stone-50 dark:bg-stone-700/60 px-2.5 py-1 text-xs font-mono text-stone-700 dark:text-stone-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Contact ── */}
        <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6 shadow-sm">
          <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500 mb-3">
            // contact
          </p>
          <div className="space-y-3">
            {[
              { href: 'mailto:bh2730@nyu.edu',               icon: Mail,     label: 'bh2730@nyu.edu' },
              { href: 'https://github.com/syttpz',            icon: Github,   label: 'github.com/syttpz' },
              { href: 'https://linkedin.com/in/eddy-hu217/',  icon: Linkedin, label: 'linkedin.com/in/eddy-hu217' },
              { href: 'https://syttpz.github.io',             icon: Globe,    label: 'syttpz.github.io' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-3 text-base text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <Icon className="w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
