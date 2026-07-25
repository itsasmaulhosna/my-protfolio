"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaRocket,
  FaTools,
} from "react-icons/fa";

export default function FeaturedProjectModal({ project }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Button */}

<button
  onClick={() => {
    console.log("clicked");
    setOpen(true);
  }}
  className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
>
  View Details
  <FaArrowRight />
</button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0B1120]"
          >
            {/* Close */}

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 transition hover:bg-red-500"
            >
              <FaTimes />
            </button>

            {/* Cover */}

            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="h-[240px] md:h-[420px] w-full object-cover"
            />

            {/* Content */}

            <div className="p-8">

              <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
                {project.type}
              </span>

              <h2 className="mt-5 text-4xl font-bold text-cyan-400">
                {project.title}
              </h2>

              <p className="mt-8 text-lg font-semibold flex items-center gap-3">
                <FaTools className="text-cyan-400" />
                Main Technology Stack
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Next Part */}
                            {/* Brief Description */}

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-cyan-400">
                  <FaCode />
                  Brief Description
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  {project.fullDescription}
                </p>
              </div>

              {/* Project Links */}

              <div className="mt-10 grid gap-5 md:grid-cols-2">

                {/* Live */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 transition hover:border-cyan-400 hover:bg-cyan-500/20"
                >
                  <div className="flex items-center gap-3 text-cyan-400 text-xl font-bold">
                    <FaExternalLinkAlt />
                    Live Project
                  </div>

                  <p className="mt-3 text-sm text-gray-400 break-all">
                    {project.live}
                  </p>
                </a>

                {/* Github */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 text-cyan-400 text-xl font-bold">
                    <FaGithub />
                    GitHub Repository
                  </div>

                  <p className="mt-3 text-sm text-gray-400">
                    Client Repository
                  </p>
                </a>

              </div>

              {/* Challenges */}

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

                <h3 className="flex items-center gap-3 text-2xl font-bold text-cyan-400">
                  <FaTools />
                  Challenges Faced
                </h3>

                <ul className="mt-6 space-y-4">
                  {project.challenges.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-300 leading-7"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
                            {/* Future Plans */}

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

                <h3 className="flex items-center gap-3 text-2xl font-bold text-cyan-400">
                  <FaRocket />
                  Potential Improvements & Future Plans
                </h3>

                <ul className="mt-6 space-y-4">
                  {project.futurePlans.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-gray-300 leading-7"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom Buttons */}

              <div className="mt-12 flex flex-wrap justify-end gap-4">

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 px-6 py-3 transition hover:border-red-500 hover:text-red-400"
                >
                  Close
                </button>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
                >
                  Visit Live
                  <FaExternalLinkAlt />
                </a>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}