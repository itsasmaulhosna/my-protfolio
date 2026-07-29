
"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Full Stack Development",
    desc: "Complete web applications using MERN / Next.js with scalable architecture.",
    icon: <FaCode />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Frontend Development",
    desc: "Modern responsive UI with React, Next.js and Tailwind CSS.",
    icon: <FaPaintBrush />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend API Development",
    desc: "Secure REST APIs, authentication systems and database design.",
    icon: <FaServer />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Performance Optimization",
    desc: "Speed optimization, SEO improvements and scalable architecture.",
    icon: <FaRocket />,
    color: "from-orange-500 to-red-500",
  },
];

export default function ServicesSection() {
  return (
    <section className="xl:py-28 transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          My{" "}
          <span className="text-green-500">Services</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          What I can do for your business or startup
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="relative group rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm overflow-hidden"
          >

            {/* GLOW */}
            <div className={`absolute -inset-1 opacity-0 group-hover:opacity-20 blur-2xl bg-gradient-to-r ${item.color}`} />

            {/* ICON */}
            <div className={`text-4xl mb-4 bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}>
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-6">
              {item.desc}
            </p>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

