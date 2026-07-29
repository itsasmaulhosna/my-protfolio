
"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { name: "React", level: 95, icon: <FaReact /> },
  { name: "Next.js", level: 90, icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss /> },
  { name: "Node.js", level: 88, icon: <FaNodeJs /> },
  { name: "MongoDB", level: 85, icon: <SiMongodb /> },
  { name: "Firebase", level: 80, icon: <SiFirebase /> },
  { name: "Git & GitHub", level: 90, icon: <FaGitAlt /> },
];

export default function SkillsPreview() {
  return (
    <section className="xl:py-28  transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          Skills{" "}
          <span className="text-blue-500">Overview</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Technologies I use to build modern full-stack applications
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-5xl mx-auto px-5 space-y-6">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition"
          >

            {/* TOP ROW */}
            <div className="flex items-center justify-between mb-2">

              <div className="flex items-center gap-3">
                <span className="text-2xl text-blue-500">
                  {skill.icon}
                </span>

                <h3 className="font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>

            {/* PROGRESS BAR */}
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
              />
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

