
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    "title": "Ai Prompt",
    "type": "Full Stack",
    "shortDescription": "A full-stack pet adoption platform that connects pets with loving homes.",
    "fullDescription": "Pet Adoption is a full-stack web application designed to simplify the pet adoption process. Users can browse available pets, view detailed information, submit adoption requests, and manage their activities through a secure and user-friendly interface. The platform includes authentication, pet management, and adoption request tracking to create a smooth experience for both adopters and pet owners.",
    "image": "/images/ai-prompt.png",
    "tech": ["Next.js",
  "Javascript",
  "MongoDB",
  "JWT",
  
],
    "live": "https://ai-prompt-client-two.vercel.app",
    "github": "https://github.com/itsasmaulhosna/PromptVault-Client"
  },
  {
    "title": "Fitness AI",
    "type": "Frontend/React",
    "shortDescription": "A dashboard to track job applications and interview progress.",
    "fullDescription": "Job Application Tracker helps users manage their job search by tracking applications, interviews, and rejections with a clean dashboard interface.",
    "image": "/images/fitness-ai.png",
    "tech": ["React", "TailwindCSS", "JS"],
    "live": "https://fitness-maya1234.vercel.app",
    "github": "https://github.com/itsasmaulhosna/fitness-ai-project"
  },
  {
    "title": "Course Hub",
    "type": "Full Stack",
    "shortDescription": "A real-time news portal with category filtering and admin dashboard.",
    "fullDescription": "Course Hub is a comprehensive full-stack news portal that delivers a fast and dynamic reading experience. It features real-time category filtering, secure authentication, and a powerful admin dashboard for content management.",
    "image": "/images/course-hub.png",
    "tech": ["Next.js", "MongoDB", "Better-Auth"],
    "live": "https://course-hub-pearl.vercel.app",
    "github": "https://github.com/itsasmaulhosna/course-hub"
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-28 transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-sm">
          Featured Work
        </div>

        <h2 className="text-4xl md:text-5xl font-black mt-5">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          A selection of projects that showcase my skills in full-stack development,
          UI/UX design, and performance optimization.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg dark:shadow-black/40"
          >

            {/* IMAGE */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              {/* TITLE */}
              <h3 className="text-xl font-bold group-hover:text-blue-500 transition">
                {project.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-6">

<a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
>
  Live <FaExternalLinkAlt size={12} />
</a>

                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
>
  Code <FaGithub size={14} />
</a>
              </div>
            </div>

            {/* GLOW EFFECT */}
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 to-purple-500 transition" />
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE */}
      <div className="text-center mt-14">
  <Link
    href="/projects"
    className="inline-block px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
  >
    View All Projects
  </Link>
</div>
    </section>
  );
}

