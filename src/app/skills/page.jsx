"use client";

import { motion } from "framer-motion";

/* ================= ICONS ================= */
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPrisma,
  SiVercel,
} from "react-icons/si";

/* ================= DATA ================= */

const frontend = [
  { name: "React", level: 95, icon: <FaReact /> },
  { name: "Next.js", level: 90, icon: <SiNextdotjs /> },
  { name: "JavaScript", level: 95, icon: <SiJavascript /> },
  { name: "Tailwind", level: 92, icon: <SiTailwindcss /> },
  { name: "Redux", level: 80, icon: <FaReact /> },
];

const backend = [
  { name: "Node.js", level: 90, icon: <FaNodeJs /> },
  { name: "Express", level: 88, icon: <SiExpress /> },
  { name: "MongoDB", level: 85, icon: <SiMongodb /> },
];

const tools = [
  { name: "Git", level: 92, icon: <FaGitAlt /> },
  { name: "Docker", level: 78, icon: <FaDocker /> },
  { name: "Firebase", level: 85, icon: <SiFirebase /> },
  { name: "Prisma", level: 80, icon: <SiPrisma /> },
  { name: "Vercel", level: 90, icon: <SiVercel /> },
  { name: "Figma", level: 75, icon: <FaFigma /> },
];

/* ================= SMALL CARD ================= */

const SmallCard = ({ item }) => {
  return (
    <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-700 text-center ">

      {/* ICON */}
      <div className="text-3xl mb-2 flex justify-center text-blue-400">
        {item.icon}
      </div>

      {/* NAME */}
      <h4 className="font-semibold text-sm">{item.name}</h4>

      {/* % */}
      <p className="text-gray-400 text-xs">{item.level}%</p>

    </div>
  );
};

/* ================= SECTION ================= */

const Section = ({ title, data }) => {
  return (
    <div className="mb-12">

      {/* TITLE */}
      <div className="border-l-4 border-blue-500 pl-3 mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((item, i) => (
          <SmallCard key={i} item={item} />
        ))}
      </div>

    </div>
  );
};

/* ================= SUMMARY CARD ================= */

const SummaryCard = ({ title, data, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className="relative p-6 rounded-2xl bg-gray-900/60 border border-gray-700 overflow-hidden group"
    >

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {/* SKILLS */}
      <div className="space-y-3">

        {data.map((item, i) => (
          <div key={i}>

            {/* name + % */}
            <div className="flex justify-between text-sm mb-1">
              <span>{item.name}</span>
              <span className="text-gray-400 group-hover:text-white transition">
                {item.level}%
              </span>
            </div>

            {/* 🔥 ANIMATED BAR */}
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                transition={{ duration: 1 }}
                className={`h-1 bg-gradient-to-r ${color}`}
              />
            </div>

          </div>
        ))}

      </div>

      {/* GLOW EFFECT */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${color} blur-2xl transition`}
      />

    </motion.div>
  );
};

/* ================= MAIN PAGE ================= */

export default function SkillsPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 text-white py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text pt-30">
          Skills & Technologies
        </h1>
        <p className="text-gray-400 mt-3">
          Technologies I use to bring ideas to life
        </p>
      </div>

      {/* ================= SMALL SKILL CARDS ================= */}
      <Section title="Frontend Skills" data={frontend} />
      <Section title="Backend Skills" data={backend} />
      <Section title="Tools & Platforms" data={tools} />

      {/* ================= SUMMARY CARDS ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">

        <SummaryCard title="Frontend" data={frontend} color="from-blue-500 to-cyan-400" />
        <SummaryCard title="Backend" data={backend} color="from-purple-500 to-pink-500" />
        <SummaryCard title="Tools" data={tools} color="from-green-400 to-emerald-500" />

      </div>

    </section>
  );
}