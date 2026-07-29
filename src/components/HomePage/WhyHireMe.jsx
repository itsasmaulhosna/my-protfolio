
"use client";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaPalette,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

const features = [
  {
    title: "High Performance",
    desc: "Fast, scalable and SEO optimized applications with modern architecture.",
    icon: <FaRocket />,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Modern UI/UX",
    desc: "Beautiful responsive interfaces with smooth interactions and animations.",
    icon: <FaPalette />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Secure Backend",
    desc: "Authentication, protected APIs and secure database management systems.",
    icon: <FaShieldAlt />,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    title: "Clean Code",
    desc: "Reusable components and maintainable code structure for scalability.",
    icon: <FaCode />,
    gradient: "from-orange-500 to-red-500",
  },
];

export default function WhyHireMe() {
  return (
    <section className="relative py-5 xl:py-30 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_30%)]" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-gray-900/70 mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-sm uppercase tracking-[3px] text-gray-300 font-semibold">
              Why Choose Me
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">

            What Makes Me{" "}

            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
              Different
            </span>
          </h2>

          {/* TEXT */}
          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-8">
            I build modern digital experiences focused on performance,
            scalability, clean architecture and visually engaging user interfaces.
          </p>

          {/* LINE */}
          <div className="w-44 h-[3px] rounded-full mx-auto mt-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="relative group"
            >

              {/* GLOW */}
              <div
                className={`absolute -inset-[1px] rounded-[30px] opacity-0 group-hover:opacity-40 blur-xl transition duration-500 bg-gradient-to-r ${item.gradient}`}
              />

              {/* CARD */}
              <div className="relative h-full rounded-[30px] border border-gray-800 bg-gray-900/80 backdrop-blur-xl p-8 overflow-hidden">

                {/* TOP LINE */}
                <div
                  className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.gradient}`}
                />

                {/* ICON */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white bg-gradient-to-r ${item.gradient}`}
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-7 text-2xl font-black text-white">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-4 text-gray-400 leading-7 text-sm">
                  {item.desc}
                </p>

                {/* HOVER CIRCLE */}
                <div
                  className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-3xl bg-gradient-to-r ${item.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

