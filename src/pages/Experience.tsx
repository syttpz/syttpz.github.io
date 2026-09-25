// src/pages/Experience.tsx

type ExpEntry = {
  title: string
  org: string
  location: string
  date: string
  bullets: string[]
  tags: string[]
}

const experiences: ExpEntry[] = [
  {
    title: 'Network Programmer',
    org: 'NYU High Speed Research Network Lab',
    location: 'New York, NY',
    date: 'May 2026–Present',
    bullets: [
      'Built an edge-offloaded RGB-D SLAM pipeline with ROS 2, RTAB-Map, Docker, and Kubernetes, moving mapping workloads from a Raspberry Pi robot to remote workers.',
      'Developed a ROS 2–Corelink bridge with serialization, fragmentation, reassembly, and UDP pacing for high-throughput RGB-D streams across networks.',
      'Patched TCP stream reassembly and UDP receive-buffer handling in the Corelink C++ client to resolve fragmented-header and datagram-corruption failures during sustained image streaming.',
      'Evaluated local and offloaded SLAM under controlled latency, jitter, and packet loss, measuring trajectory error (ATE/RPE), frame age, throughput, compute utilization, and energy use.',
    ],
    tags: ['ROS 2', 'RTAB-Map', 'C++', 'Corelink', 'Docker', 'Kubernetes'],
  },
  {
    title: 'IT Operations Intern',
    org: 'Shanghai Data Exchange',
    location: 'Shanghai, China',
    date: 'Jun–Aug 2024',
    bullets: [
      'Automated security audit report generation with a cron-scheduled Selenium and Baidu OCR workflow that handles login, screenshots, text extraction, and template filling.',
      'Deployed SmokePing probes across approximately 40 hosts and built a Flask/MySQL dashboard to monitor server TCP processes for incident triage.',
    ],
    tags: ['Python', 'Selenium', 'Flask', 'MySQL', 'Smokeping'],
  },
  {
    title: 'Data Analyst Intern',
    org: 'Neumetry Medical Inc.',
    location: 'Fremont, CA',
    date: 'Jul 2021–Aug 2022',
    bullets: [
      'Wrote Python scripts to run Fourier analysis on physiological time-series data, extracting dominant frequency peaks and generating plots for a wearable cardiovascular study.',
    ],
    tags: ['Python', 'NumPy', 'Signal Processing'],
  },
]

export default function Experience() {
  return (
    <div className="mx-auto max-w-7xl min-h-screen px-5 py-8 sm:px-8 md:px-12 md:py-12 break-words">
      <h1 className="text-3xl font-bold tracking-tight mb-10 text-stone-100 ">
        Experience
      </h1>

      <div className="max-w-4xl">
        {experiences.map((exp, i) => (
          <div key={i}>
            {/* Divider between entries */}
            {i > 0 && (
              <div className="border-t border-stone-700 " />
            )}

            <div className="py-8">
              {/* Header row */}
              <div className="flex items-baseline justify-between gap-6 flex-wrap mb-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h2 className="text-lg font-semibold text-stone-100">
                    {exp.title}
                  </h2>
                  <span className="text-stone-300 text-sm select-none">·</span>
                  <span className="text-base text-stone-300 ">{exp.org}</span>
                  <span className="text-stone-300 text-sm select-none">·</span>
                  <span className="text-sm text-stone-400 italic">{exp.location}</span>
                </div>
                <span className="text-sm text-stone-400 shrink-0 tabular-nums">
                  {exp.date}
                </span>
              </div>

              {/* Bullets */}
              <ul className="bullet-list space-y-1 text-base text-stone-300 leading-relaxed">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>

              {/* Tags */}
              <p className="mt-3 text-xs leading-relaxed text-stone-400">{exp.tags.join(' · ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
