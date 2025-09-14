// src/pages/Project.tsx
import Nav from "../components/Nav";
import icon from "/icon.png";

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
            <p className="mt-1 text-slate-300">
              AUV built by student-run team. The vehicle performs missions such as gate traversal, 
              buoy interactions, marker drops, and navigation via visual cues.  
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
            <h2 className="text-xl font-semibold">Side-Channel Attack Project</h2>
            <p className="mt-1 text-slate-300">
            Designed a low-cost setup using an ADC and an instrumentation amplifier to measure minimal power changes 
            on an STM32 while it runs AES encryption.
            We analyze the traces in Python to visualize leakage and demonstrate simple key-recovery.
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
        </div>

      </main>
    </div>
  );
}
