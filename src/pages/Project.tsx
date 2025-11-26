// src/pages/Project.tsx
import Nav from "../components/Nav";
import icon from "/icon.png";
import writebar from "/writebar.png";
import kelpie from "/kelpie.png";

export default function Project() {
  return (
    <div className="relative font-mono min-h-screen bg-black text-slate-100">
      <Nav />

      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-center">Projects</h1>

        <div className="mt-6 space-y-4">

          <section id="sysmon">
            <h2 className="text-xl font-bold">Sysmon.exe</h2>
            <img src={icon} className="w-24 h-24"alt="" />
            <p className="mt-1 text-slate-300">
              A lightweight Windows system monitor that displays device info, real-time CPU & memory, 
              per-core usage, disk usage & I/O, and network info with private/public IPs.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {["Rust","Tauri","React","Typescript","sysinfo"].map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5">{t}</span>
              ))}
            </div>
            <a className="mt-3 text-sm underline" href="https://github.com/syttpz/sysmon" target="_blank" rel="noreferrer">GitHub</a>
          </section>

          <hr className="my-6 border-white/10" />

          <section id="writebar">
            <h2 className="text-xl font-semibold">WriteBar</h2>
            <img src={writebar} className="w-65 h-24"alt="" />
            <p className="mt-1 text-slate-300">
            A simple Firefox add-on that shows a live word count and progress bar in Google Docs. Set a goal and watch your progress update as you type.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {["JS", "HTML/CSS"].map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5">{t}</span>
              ))}
            </div>
            <div className="mt-3 text-sm">
              <a className="underline" href="https://addons.mozilla.org/en-US/firefox/addon/write-bar/" target="_blank" rel="noreferrer">Add-on</a>
              <span className="mx-2">·</span>
              <a className="underline" href="https://github.com/syttpz/writebar" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </section>

          <hr className="my-6 border-white/10" />

          <section id="robosub">
            <h2 className="text-xl font-semibold">RoboSub</h2>
            <img src={kelpie} className="w-72 h-50"alt="" />
            <p className="mt-1 text-slate-300">
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>Implemented and tuned PID motion controllers with IMU and depth feedback for robust underwater trajectory tracking. 
            Collaborated closely with the vision team to integrate YOLO perception models and complete mission tasks (pass the gate, torpedo deployment, path following).</li>
            <li>Currently extending path-planning and control pipeline to Gazebo 11 simulation using URDF/thruster models for pre-deployment testing.</li>
            </ul>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {["ROS1","Python","PID","Controls"].map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5">{t}</span>
              ))}
            </div>
            <a className="underline mt-3 text-sm" href="https://nyuauviolets.com/" target="_blank" rel="noreferrer">Overview</a>
            <span className="mx-2">·</span>
            <a className="underline mt-3 text-sm" href="https://github.com/NYU-Robosub/Motion_2024" target="_blank" rel="noreferrer">GitHub</a>
          </section>

          <hr className="my-6 border-white/10" />
          
          <section id="sca">
            <h2 className="text-xl font-semibold">Side-Channel Attack Toolkit</h2>
            <p className="mt-1 text-slate-300">
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>Implemented a low-cost experimental setup using a high-precision ADC and instrumentation amplifier to capture 
            power traces from AES-128 encryption on an STM32. </li>
            <li>Analyzed the traces with correlation power analysis (CPA) in Python to identify potential information leakage.</li>
            </ul>
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {["ESP32-C6","ADS7883","AES-128","CPA"].map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5">{t}</span>
              ))}
            </div>
            <div className="mt-3 text-sm">
              <a className="underline" href="https://github.com/syttpz/SCA_testing_tool" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </section>

          <hr className="my-6 border-white/10" />

          <section id="finance/ds">
            <h2 className="text-xl font-semibold">Finance & Economics Time-Series Analysis</h2>
            <p className="mt-1 text-slate-300">
            Ongoing NYU Data Science Bootcamp project analyzing GDP, inflation, and interest-rate data using Python, NumPy/Pandas and SQL querying; performed EDA, built correlation heatmaps, and experimented with regression
models to uncover macroeconomic trends and short-term forecasting signals.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {["Python","Pandas","Seaborn"].map(t => (
                <span key={t} className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5">{t}</span>
              ))}
            </div>
            <div className="mt-3 text-sm">
              <a className="underline" href="https://github.com/syttpz/Finance-Economics-Time-Series-Analysis" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}
