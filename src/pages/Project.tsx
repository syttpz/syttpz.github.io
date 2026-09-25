// src/pages/Project.tsx
import icon from '/icon.png'
import writebar from '/writebar.png'
import kelpie from '/kelpie.png'

type Project = {
  id: string
  title: string
  role?: string
  affiliation?: string
  image: string | null
  description: string | null
  bulletPoints?: string[]
  tags: string[]
  links: { label: string; url: string }[]
}

const projects: Project[] = [
  {
    id: 'robosub',
    title: 'RoboSub',
    role: 'Motion Team Lead · NYU RoboSub · Jan 2024–Present',
    affiliation: 'NYU VIP',
    image: kelpie,
    description: null,
    bulletPoints: [
      'Built PID motion control and YOLO-guided mission logic for underwater navigation; deployed on Jetson with IMU, depth feedback, and rosserial.',
      'Developed simulation with ROS Noetic, Gazebo 11, and Project DAVE; also worked with ROS 2 Humble and Gazebo Fortress.',
    ],
    tags: ['ROS 2 Humble', 'Gazebo Fortress', 'ROS Noetic', 'Gazebo 11', 'Python', 'PID', 'YOLO', 'Jetson', 'rosserial'],
    links: [
      { label: 'Overview', url: 'https://nyuauviolets.com/' },
      { label: 'GitHub', url: 'https://github.com/NYU-Robosub/Motion_2024' },
    ],
  },
  {
    id: 'data-center-robot',
    title: 'Data Center Robot',
    role: 'Data Center Software Lead · NYU Robotics Club · Feb 2026–Present',
    affiliation: 'NYU VIP · HSRN',
    image: '/create3.jpg',
    description: null,
    bulletPoints: [
      'Led ROS 2 software integration for remote data-center inspection: teleoperation, telemetry, and live video.',
      'Built and benchmarked a Viam C++ / OpenCV video pipeline to identify encoding and transport bottlenecks.',
    ],
    tags: ['ROS 2 Humble', 'C++', 'Viam', 'OpenCV', 'Datacenter'],
    links: [],
  },
  {
    id: 'sysmon',
    title: 'Sysmon.exe',
    image: icon,
    description:
      'Cross-platform system monitor built with Rust, Tauri, and React for CPU, memory, disk I/O, and network metrics.',
    tags: ['Rust', 'Tauri', 'React', 'TypeScript', 'sysinfo'],
    links: [{ label: 'GitHub', url: 'https://github.com/syttpz/sysmon' }],
  },
  {
    id: 'writebar',
    title: 'WriteBar',
    image: writebar,
    description:
      'Firefox add-on for live word counts and writing-goal progress in Google Docs.',
    tags: ['JS', 'HTML/CSS'],
    links: [
      { label: 'Add-on', url: 'https://addons.mozilla.org/en-US/firefox/addon/write-bar/' },
      { label: 'GitHub', url: 'https://github.com/syttpz/writebar' },
    ],
  },
  {
    id: 'sca',
    title: 'Side-Channel Attack Capture Platform',
    role: 'Member · NYU OSIRIS Lab · Oct 2024–May 2025',
    image: null,
    description: 'Built an ESP32-based power-analysis platform for an STM32 AES-128 target and applied correlation power analysis to recover key-byte candidates. Participated in OSIRIS CTFs and security scrimmages.',
    tags: ['ESP32-C6', 'ADS7883', 'INA333', 'AES-128', 'CPA', 'STM32'],
    links: [{ label: 'GitHub', url: 'https://github.com/syttpz/SCA_testing_tool' }],
  },
  {
    id: 'finance',
    title: 'Finance & Economics Time-Series Analysis',
    image: null,
    description:
      "Analyzed macroeconomic time series with ARIMA, regularized regression, and PCA in NYU’s Data Science Bootcamp.",
    tags: ['Python', 'ARIMA', 'Lasso/Ridge', 'PCA', 'Pandas', 'NumPy'],
    links: [
      { label: 'GitHub', url: 'https://github.com/syttpz/Finance-Economics-Time-Series-Analysis' },
    ],
  },
  {
    id: 'ftc',
    title: 'FIRST Tech Challenge Robotics',
    role: 'High School Robotics Team Lead · Sep 2019–2023',
    image: null,
    description: 'Led Java and OpenCV development for autonomous and driver control, with three consecutive Long Island Championship qualifications. Created mechanical models in Fusion 360 and Onshape.',
    tags: ['Java', 'OpenCV', 'FTC', 'Android Studio'],
    links: [],
  },
]

export default function Project() {
  return (
    <div className="mx-auto max-w-7xl min-h-screen px-5 py-8 sm:px-8 md:px-12 md:py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-10 text-stone-100 ">
        Projects
      </h1>

      <div>
        {projects.map((project, i) => (
          <div key={project.id}>
            {i > 0 && (
              <div className="border-t border-stone-700 " />
            )}

            <div className="py-6 flex flex-col items-start gap-6 xl:flex-row xl:gap-10">

              {/* Content */}
              <div className="w-full min-w-0 max-w-2xl flex-1 break-words">
                {/* Title + links */}
                <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
                  <h2 className="text-lg font-semibold text-stone-100">
                    {project.title}
                  </h2>
                  <div className="flex gap-4 shrink-0">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-stone-400 hover:text-stone-100 underline underline-offset-2 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {project.role && (
                  <p className="mb-2 text-sm text-stone-400 ">{project.role}</p>
                )}
                {project.affiliation && (
                  <p className="mb-4 text-xs leading-relaxed text-stone-400 ">{project.affiliation}</p>
                )}

                {/* Description */}
                {project.description && (
                  <p className="text-base text-stone-300 leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Bullets */}
                {project.bulletPoints && (
                  <ul className="bullet-list space-y-1 text-base text-stone-300 leading-relaxed">
                    {project.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <p className="mt-3 text-xs leading-relaxed text-stone-400 ">{project.tags.join(' · ')}</p>
              </div>

              {/* Consistent image area; preserve photos, icons, and screenshots in full. */}
              {project.image && (
                <div className="w-full max-w-72 min-w-0 xl:w-72 xl:shrink-0">
                  <a href={project.image} target="_blank" rel="noreferrer" aria-label={`View image: ${project.title}`} className="block aspect-[4/3]">
                    <img
                      src={project.image}
                      className="w-full h-full object-contain"
                      alt={project.title}
                      loading="lazy"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
