
"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiExpress,
} from "react-icons/si";

const techs = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    color: "text-sky-400",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-400",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "text-white",
  },
];

/* DUPLICATE FOR INFINITE EFFECT */
const duplicated = [...techs, ...techs];

export default function TrustedTechStack() {
  return (
    <section className="relative py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.06),transparent_35%)]" />

      {/* BLUR LIGHT */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-gray-900/70 mb-6">

            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            <span className="text-sm uppercase tracking-[3px] text-gray-300 font-semibold">
              Technologies
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">

            Trusted{" "}

            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text">
              Tech Stack
            </span>
          </h2>

          {/* TEXT */}
          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-8">
            Modern technologies and tools I use to craft scalable,
            high-performance and visually engaging web applications.
          </p>

          {/* LINE */}
          <div className="w-44 h-[3px] rounded-full mx-auto mt-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
        </motion.div>

        {/* MARQUEE */}
        <div className="relative overflow-hidden">

          {/* FADE LEFT */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent" />

          {/* FADE RIGHT */}
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent" />

          {/* MOVING ROW */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >

            {duplicated.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                className="group relative min-w-[220px]"
              >

                {/* GLOW */}
                <div className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500 bg-gradient-to-r from-cyan-500 to-purple-500" />

                {/* CARD */}
                <div className="relative flex items-center gap-4 rounded-3xl border border-gray-800 bg-gray-900/80 backdrop-blur-xl px-6 py-5 overflow-hidden">

                  {/* ICON */}
                  <div
                    className={`text-4xl ${tech.color}`}
                  >
                    {tech.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {tech.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      Modern Development
                    </p>
                  </div>

                  {/* HOVER LIGHT */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {/* CARD */}
          <div className="rounded-3xl border border-cyan-500/20 bg-gray-900/70 p-8 text-center">

            <h3 className="text-4xl font-black text-cyan-400">
              10+
            </h3>

            <p className="mt-2 text-gray-400">
              Modern Technologies
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-3xl border border-purple-500/20 bg-gray-900/70 p-8 text-center">

            <h3 className="text-4xl font-black text-purple-400">
              20+
            </h3>

            <p className="mt-2 text-gray-400">
              Completed Projects
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-3xl border border-green-500/20 bg-gray-900/70 p-8 text-center">

            <h3 className="text-4xl font-black text-green-400">
              100%
            </h3>

            <p className="mt-2 text-gray-400">
              Responsive & Optimized
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

