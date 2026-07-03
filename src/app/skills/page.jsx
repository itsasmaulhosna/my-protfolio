"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaFigma,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiPython,
  SiVercel,
} from "react-icons/si";

const frontend = [
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    level: 95,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    title: "React",
    icon: <FaReact />,
    level: 95,
    color: "from-cyan-400 to-sky-500",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    level: 90,
    color: "from-gray-300 to-white",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: 95,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
    level: 95,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "HTML",
    icon: <FaHtml5 />,
    level: 96,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Redux",
    icon: <SiRedux />,
    level: 85,
    color: "from-violet-500 to-purple-500",
  },
];

const backend = [
  {
    title: "WordPress",
    icon: <FaWordpress />,
    level: 95,
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "PHP",
    icon: <FaPhp />,
    level: 82,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs />,
    level: 85,
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Express",
    icon: <SiExpress />,
    level: 80,
    color: "from-gray-300 to-white",
  },
  {
    title: "MySQL",
    icon: <SiMysql />,
    level: 80,
    color: "from-blue-400 to-cyan-500",
  },
];

const tools = [
  {
    title: "Git",
    icon: <FaGitAlt />,
    level: 95,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    level: 92,
    color: "from-gray-300 to-white",
  },
  {
    title: "Docker",
    icon: <FaDocker />,
    level: 75,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Vercel",
    icon: <SiVercel />,
    level: 90,
    color: "from-gray-300 to-white",
  },
  {
    title: "Figma",
    icon: <FaFigma />,
    level: 80,
    color: "from-pink-500 via-orange-500 to-purple-500",
  },
];

const languages = [
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    level: 95,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    title: "PHP",
    icon: <FaPhp />,
    level: 82,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    title: "TypeScript (Learning)",
    icon: <SiTypescript />,
    level: 55,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Python (Learning)",
    icon: <SiPython />,
    level: 45,
    color: "from-yellow-400 to-blue-500",
  },
];

function SkillCard({ title, subtitle, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
rounded-3xl
border
border-gray-200
dark:border-white/10
bg-white
dark:bg-white/[0.03]
backdrop-blur-md
p-8
transition-all
duration-300
`}
    >
      <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold mb-3">
        {title}
      </p>

      <p className="text-gray-600 dark:text-gray-400 mb-8">{subtitle}</p>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.title}
            className={`
rounded-2xl
border
border-gray-200
dark:border-white/10
bg-gray-100
dark:bg-black/20
p-5
transition-all
duration-300
`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl text-white">{item.icon}</div>

                <span className="font-semibold text-lg">
                  {item.title}
                </span>
              </div>

              <span className="text-gray-400 font-semibold">
                {item.level}%
              </span>
            </div>

            <div className="h-[3px] rounded-full bg-gray-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                transition={{ duration: 1.2 }}
                className={`h-full bg-gradient-to-r ${item.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 bg-gray-50 dark:bg-[#05080F] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold pt-15">
          Technical Proficiency
        </p>

        <h2 className="text-6xl font-black mt-3">
          Skills &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-gray-500 mt-5 text-lg">
          Technologies I work with to build scalable web applications and
          modern WordPress solutions.
        </p>

        <div className="mt-20 grid lg:grid-cols-2 gap-12">
          <SkillCard
            title="Frontend & UI/UX"
            subtitle="Building fast, interactive user interfaces"
            items={frontend}
          />

          <SkillCard
            title="Backend & WordPress"
            subtitle="Developing scalable backend systems"
            items={backend}
          />

          <SkillCard
            title="Tools & Platforms"
            subtitle="Development workflow and productivity"
            items={tools}
          />

          <SkillCard
            title="Core & Language"
            subtitle="Programming languages and fundamentals"
            items={languages}
          />
        </div>
      </div>
    </section>
  );
}