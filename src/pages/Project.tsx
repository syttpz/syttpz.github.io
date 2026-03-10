// src/pages/Project.tsx
import icon from '/icon.png'
import writebar from '/writebar.png'
import kelpie from '/kelpie.png'

type Project = {
  id: string
  title: string
  image: string | null
  imageClass?: string
  description: string | null
  bulletPoints?: string[]
  tags: string[]
  links: { label: string; url: string }[]
}

const projects: Project[] = [
  {
    id: 'sysmon',
    title: 'Sysmon.exe',
    image: icon,
    imageClass: 'max-w-40',
    description:
      'Desktop system monitor built with Tauri, React/TypeScript frontend and Rust backend. The backend manages a shared sysinfo instance behind a Mutex and exposes per-core CPU usage, memory, disk I/O, and local IP to the frontend through Tauri IPC commands using serde serialization.',
    tags: ['Rust', 'Tauri', 'React', 'TypeScript', 'sysinfo'],
    links: [{ label: 'GitHub', url: 'https://github.com/syttpz/sysmon' }],
  },
  {
    id: 'writebar',
    title: 'WriteBar',
    image: writebar,
    imageClass: 'max-w-80',
    description:
      'A simple Firefox add-on that shows a live word count and progress bar in Google Docs. Set a goal and watch your progress update as you type.',
    tags: ['JS', 'HTML/CSS'],
    links: [
      { label: 'Add-on', url: 'https://addons.mozilla.org/en-US/firefox/addon/write-bar/' },
      { label: 'GitHub', url: 'https://github.com/syttpz/writebar' },
    ],
  },
  {
    id: 'robosub',
    title: 'RoboSub',
    image: kelpie,
    imageClass: 'max-w-xl',
    description: null,
    bulletPoints: [
      'Implemented and tuned PID controllers using IMU and depth sensor feedback for 6-DOF underwater trajectory tracking; deployed on Jetson with rosserial for MCU communication and sensor integration.',
      'Designed autonomy logic and integrated YOLO perception models with the control pipeline to complete competition tasks such as gate passage, torpedo deployment, and path following.',
      "Ported the control stack to Gazebo 11 under ROS Noetic, leveraging Project DAVE's hydrodynamic and thruster physics; authored custom URDF with mesh geometries and simulation world files for competition environments.",
    ],
    tags: ['ROS Noetic', 'Python', 'PID', 'Gazebo 11', 'YOLO', 'Jetson', 'rosserial'],
    links: [
      { label: 'Overview', url: 'https://nyuauviolets.com/' },
      { label: 'GitHub', url: 'https://github.com/NYU-Robosub/Motion_2024' },
    ],
  },
  {
    id: 'sca',
    title: 'Side-Channel Attack Capture Platform',
    image: null,
    description: null,
    bulletPoints: [
      'Built a differential power analysis capture board with an INA333 instrumentation amplifier, ADS7883 ADC, and ESP32C6. The ESP32 reads the ADC over SPI and uses an I2C trigger line to sync captures to AES-128 encryption boundaries on an STM32.',
      'Runs on-device correlation power analysis to recover key bytes.',
    ],
    tags: ['ESP32-C6', 'ADS7883', 'INA333', 'AES-128', 'CPA', 'STM32'],
    links: [{ label: 'GitHub', url: 'https://github.com/syttpz/SCA_testing_tool' }],
  },
  {
    id: 'finance',
    title: 'Finance & Economics Time-Series Analysis',
    image: null,
    description:
      "Modeled macroeconomic time-series data using ARIMA and regularized regression (Lasso, Ridge) as part of NYU's Data Science Bootcamp; performed PCA and correlation analysis across daily, monthly, and quarterly granularities.",
    tags: ['Python', 'ARIMA', 'Lasso/Ridge', 'PCA', 'Pandas', 'NumPy'],
    links: [
      { label: 'GitHub', url: 'https://github.com/syttpz/Finance-Economics-Time-Series-Analysis' },
    ],
  },
]

export default function Project() {
  return (
    <div className="min-h-screen pl-12 pr-16 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-10 text-stone-900 dark:text-stone-100">
        Projects
      </h1>

      <div>
        {projects.map((project, i) => (
          <div key={project.id}>
            {i > 0 && (
              <div className="border-t border-stone-200 dark:border-stone-700" />
            )}

            <div className="py-8 flex items-start">

              {/* Content */}
              <div className="max-w-2xl">
                {/* Title + links */}
                <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
                  <span className="text-base font-semibold text-stone-900 dark:text-stone-100">
                    {project.title}
                  </span>
                  <div className="flex gap-4 shrink-0">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-sm text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-200 underline underline-offset-2 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Description */}
                {project.description && (
                  <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                    {project.description}
                  </p>
                )}

                {/* Bullets */}
                {project.bulletPoints && (
                  <div className="space-y-2.5">
                    {project.bulletPoints.map((point, idx) => (
                      <div key={idx} className="grid grid-cols-[1rem_1fr] gap-2 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                        <span className="font-mono text-amber-500 dark:text-amber-600 mt-0.5 select-none">›</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 rounded px-2 py-0.5 hover:border-stone-400 dark:hover:border-stone-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image — far right, natural size */}
              {project.image && (
                <img
                  src={project.image}
                  className={`${project.imageClass ?? 'max-w-72'} w-auto h-auto shrink-0 ml-auto`}
                  alt={project.title}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
