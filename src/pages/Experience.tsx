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
            <li>Automated security audit report with a cron-scheduled Selenium and Baidu OCR workflow that logs in, takes screenshots, extracts text, and autofills templates.</li>
            <li>Configured Smokeping probes for concurrent monitoring, improving coverage of packet loss and latency.</li>
            <li>Built an internal dashboard with Flask and MySQL to inventory TCP listening processes across servers, accelerating incident triage.</li>
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
            <li>Automated Fourier-analysis scripts in Python to identify dominant signal peaks and generate plots from CSV datasets for invetigators.</li>
          </ul>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Motion Team Lead (2025-present) & Member · <span className="text-slate-300">NYU RoboSub</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Jan 2024 – Present</p>
          <p className="mt-2 text-sm text-slate-300">
          Motion team lead (Fall 2025-Present) of NYU's Autonomous Underwater Vehicle team, preparing for the 2026 RoboSub competition. 
          Responsibilities include designing and implementing motion control algorithms (PID, thruster mixing), integrating sensors (IMU, depth, cameras), and coordinating with other subsystems (vision, autonomy) to ensure robust AUV operation.
          </p>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
            Lab Member · <span className="text-slate-300">NYU OSIRIS</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Oct 2024 – Present</p>
          <p className="mt-2 text-sm text-slate-300">
          Member of NYU's student-run cybersecurity research lab; lead of the SCA project, completed the OSIRIS Recruit CTF, and regularly participates in weekly meetings and CTF scrims.</p>
        </section>

        <hr className="my-6 border-white/10" />

        <section>
          <h3 className="text-lg font-semibold">
          High School Robotics Team Lead · <span className="text-slate-300">First Tech Challenge</span>
          </h3>
          <p className="text-sm text-slate-400">New York, NY · Sep 2019 – 2023</p>
          <p className="mt-2 text-sm text-slate-300">
          Software lead for an FTC robotics team with three consecutive Long Island Championship qualifications. Developed autonomous and driver-control pipelines in Java (Android Studio), implemented OpenCV-powered detection and localization, created mechanical models in Fusion 360/OnShape. </p>
        </section>

      </main>
    </div>
  );
}
