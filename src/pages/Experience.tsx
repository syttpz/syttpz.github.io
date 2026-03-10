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
    title: 'Teleoperation Systems',
    org: 'NYU Robotics Club',
    location: 'Brooklyn, NY',
    date: 'Feb 2026–Present',
    bullets: [
      "Contributing to NYU's HSRN datacenter teleoperation project, developing remote robot control and video feedback systems under ROS 2 Humble.",
      'Developing a real-time video streaming pipeline with the Viam C++ SDK and OpenCV; benchmarking latency across resolutions and frame rates, and investigating transmission efficiency optimizations.',
    ],
    tags: ['ROS 2 Humble', 'C++', 'Viam', 'OpenCV', 'Datacenter'],
  },
  {
    title: 'Motion Team Lead',
    org: 'NYU RoboSub',
    location: 'Brooklyn, NY',
    date: 'Jan 2024–Present',
    bullets: [
      'Implemented and tuned PID controllers using IMU and depth sensor feedback for 6-DOF underwater trajectory tracking; deployed on Jetson with rosserial for MCU communication and sensor integration.',
      'Designed autonomy logic and integrated YOLO perception models with the control pipeline to complete competition tasks such as gate passage, torpedo deployment, and path following.',
      "Ported the control stack to Gazebo 11 under ROS Noetic, leveraging Project DAVE's hydrodynamic and thruster physics; authored custom URDF with mesh geometries and simulation world files for competition environments.",
    ],
    tags: ['ROS Noetic', 'Python', 'PID', 'Gazebo 11', 'YOLO', 'Jetson', 'rosserial'],
  },
  {
    title: 'Member',
    org: 'NYU OSIRIS Lab',
    location: 'Brooklyn, NY',
    date: 'Oct 2024–May 2025',
    bullets: [
      'Led the Side-Channel Attack project; completed the OSIRIS Recruit CTF and participated in weekly CTF scrims.',
    ],
    tags: ['CTF', 'Security', 'Side-Channel', 'CPA'],
  },
  {
    title: 'IT Operations Intern',
    org: 'Shanghai Data Exchange',
    location: 'Shanghai, China',
    date: 'Jun–Aug 2024',
    bullets: [
      'Automated security audit report generation with a cron-scheduled Selenium and Baidu OCR workflow that handles login, screenshots, text extraction, and template filling.',
      'Set up Smokeping probes for network monitoring and built a Flask/MySQL dashboard to track TCP processes across servers for incident triage.',
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
  {
    title: 'High School Robotics Team Lead',
    org: 'First Tech Challenge',
    location: 'New York, NY',
    date: 'Sep 2019–2023',
    bullets: [
      'Software lead for an FTC robotics team with three consecutive Long Island Championship qualifications.',
      'Developed autonomous and driver-control pipelines in Java (Android Studio); implemented OpenCV-powered detection and localization.',
      'Created mechanical models in Fusion 360/OnShape.',
    ],
    tags: ['Java', 'OpenCV', 'FTC', 'Android Studio'],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen px-12 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-10 text-stone-900 dark:text-stone-100">
        Experience
      </h1>

      <div className="max-w-4xl">
        {experiences.map((exp, i) => (
          <div key={i}>
            {/* Divider between entries */}
            {i > 0 && (
              <div className="border-t border-stone-200 dark:border-stone-700" />
            )}

            <div className="py-8">
              {/* Header row */}
              <div className="flex items-baseline justify-between gap-6 flex-wrap mb-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-base font-semibold text-stone-900 dark:text-stone-100">
                    {exp.title}
                  </span>
                  <span className="font-mono text-stone-300 dark:text-stone-600 text-sm select-none">·</span>
                  <span className="text-base text-stone-600 dark:text-stone-300">{exp.org}</span>
                  <span className="font-mono text-stone-300 dark:text-stone-600 text-sm select-none">·</span>
                  <span className="text-sm text-stone-400 dark:text-stone-500 italic">{exp.location}</span>
                </div>
                <span className="font-mono text-sm text-stone-400 dark:text-stone-500 shrink-0 tabular-nums">
                  {exp.date}
                </span>
              </div>

              {/* Bullets */}
              <div className="space-y-2.5 pl-1">
                {exp.bullets.map((b, j) => (
                  <div key={j} className="grid grid-cols-[1rem_1fr] gap-2 text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                    <span className="font-mono text-amber-500 dark:text-amber-600 mt-0.5 select-none">›</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 pl-1">
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 rounded px-2 py-0.5 hover:border-stone-400 dark:hover:border-stone-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
