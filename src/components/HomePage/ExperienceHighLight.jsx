
"use client";

import { motion } from "framer-motion";
import { FaProjectDiagram, FaUsers, FaAward, FaClock } from "react-icons/fa";

const stats = [
  {
    title: "Projects",
    value: "20+",
    desc: "Completed full stack & frontend projects",
    icon: <FaProjectDiagram />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Clients",
    value: "10+",
    desc: "Happy clients worldwide",
    icon: <FaUsers />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Certificates",
    value: "5+",
    desc: "Professional certifications",
    icon: <FaAward />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Experience",
    value: "1+ Year",
    desc: "Real world development experience",
    icon: <FaClock />,
    color: "from-green-500 to-emerald-500",
  },
];

export default function ExperienceHighlights() {
  return (
    <section className="py-28 transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          Experience{" "}
          <span className="text-cyan-500">Highlights</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Key achievements that define my journey as a developer
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative group rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-lg dark:shadow-black/40 overflow-hidden"
          >

            {/* GLOW */}
            <div className={`absolute -inset-1 opacity-0 group-hover:opacity-20 blur-2xl bg-gradient-to-r ${item.color}`} />

            {/* ICON */}
            <div className={`text-3xl mb-4 bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
              {item.icon}
            </div>

            {/* VALUE */}
            <h3 className="text-3xl font-black">{item.value}</h3>

            {/* TITLE */}
            <p className="mt-1 font-semibold">{item.title}</p>

            {/* DESC */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {item.desc}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

