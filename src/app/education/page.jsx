"use client";

import EducationTimeline from "@/components/Education/EducationTimeline";

export default function EducationPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#020617] text-gray-900 dark:text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-pink-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Hero */}
      <section className=" pt-28 xl:pt-35 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
            🎓 Academic Journey
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Education
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My academic journey has built a strong foundation in science,
            technology, and software development. Every step has helped me grow
            into a passionate developer committed to continuous learning and
            innovation.
          </p>

          <div className="mx-auto mt-8 h-1 w-52 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
        </div>
      </section>

      {/* Timeline */}
      <EducationTimeline />

      {/* Footer */}
      <section className="py-16 text-center">
        <p className="text-slate-500">
          📚 Education is the foundation of every successful developer.
        </p>
      </section>
    </main>
  );
}