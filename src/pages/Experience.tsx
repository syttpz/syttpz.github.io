// src/pages/Experience.tsx
import Nav from "../components/Nav";

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-mono">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-center">Experience</h1>

        <section className="mt-8">
          <h3 className="text-lg font-bold">
            IT Operations Intern · <span className="text-slate-300">Shanghai Data Exchange</span>
          </h3>
          <p className="text-sm text-slate-400">Shanghai, China · Jun 2024 – Aug 2024</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>Automated daily audit evidence with a cron-scheduled Selenium and Baidu OCR workflow that logs in, takes
screenshots, extracts text, and autofills templates, reducing prep to 5 minutes</li>
            <li>Configured Smokeping for concurrent monitoring across 40 hosts, improving coverage of packet loss and latency.</li>
            <li>Built an internal dashboard with Flask and MySQL to inventory TCP listening processes across servers, accel-
erating incident triage.</li>
          </ul>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Data Analyst Intern · <span className="text-slate-300">Neumetry Medical Inc.</span>
          </h3>
          <p className="text-sm text-slate-400">Fremont, CA · Jul 2021 – Aug 2022</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>Supported a wearable-based cardiovascular study: onboarded volunteers and data collection.</li>
            <li>Ran Python scripts to perform Fourier analysis on logged signals and annotated the top three peaks; generated plots from CSV data for investigators.</li>
          </ul>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Motion Team Lead (2025-present) & Member · <span className="text-slate-300">NYU RoboSub</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Jan 2024 – Present</p>
          <p className="mt-2 text-sm text-slate-300">
          State estimation & trajectory control; PID with gyroscope feedback for robust trajectory tracking; integrated depth sensor data
to ensure precise underwater positioning; deployed ROS 1 on Ubuntu using Docker to simulate motion; preparing for RoboSub 2026.
          </p>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Lab Member · <span className="text-slate-300">NYU OSIRIS</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Oct 2024 – Present</p>
          <p className="mt-2 text-sm text-slate-300">
          Member of NYU’s student-run cybersecurity research lab; lead of the SCA project, completed the OSIRIS Recruit CTF, and regularly participates in weekly meetings and CTF scrims.</p>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            <span className="text-slate-300">High School Robotics Team Lead (FTC)</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Sep 2019 – 2023</p>
          <p className="mt-2 text-sm text-slate-300">
          Led coding for FTC robotics team, qualifying for the Long Island Championship three consecutive years. Developed autonomous and driver control systems (Java/Android Studio), implemented OpenCV object detection, built 3D CAD models (Fusion 360, OnShape), and mentored junior programmers.</p>
        </section>

        <hr className="my-6 border-white/10" />
      </main>
    </div>
  );
}
