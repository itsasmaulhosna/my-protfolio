"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const ProjectModal = ({ project }) => {
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
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition cursor-pointer"
      >
        View Details
        <FaArrowRight />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex justify-center items-center p-3 md:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#0f172a] rounded-3xl overflow-hidden max-h-[95vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-50 bg-black/70 p-3 rounded-full hover:bg-red-500 transition cursor-pointer"
            >
              <FaTimes />
            </button>

            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={800}
              className="w-full h-56 sm:h-72 md:h-[420px] object-cover"
            />

            <div className="p-5 md:p-8">
              {/* Title */}
              <h1 className="text-2xl md:text-4xl font-bold text-cyan-400">
                {project.title}
              </h1>

              {/* Type */}
              <span className="inline-block mt-4 border border-cyan-400 text-cyan-300 px-4 py-1 rounded-full text-sm">
                {project.type}
              </span>

              {/* Tech Stack */}
              <section className="mt-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Main Technology Stack
                </h2>

                <div className="flex flex-wrap gap-3">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-3 py-2 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Description */}
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Brief Description
                </h2>

                <p className="text-gray-300 leading-8">
                  {project.fullDescription}
                </p>
              </section>

              {/* Links */}
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-white mb-5">
                  Project Links
                </h2>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Project
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 border border-white/20 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    <FaGithub />
                    GitHub Repository
                  </a>
                </div>
              </section>

              {/* Challenges */}
              {project.challenges && (
                <section className="mt-10">
                  <h2 className="text-xl font-semibold text-white mb-5">
                    Challenges Faced
                  </h2>

                  <ul className="space-y-3">
                    {project.challenges.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <FaCheckCircle className="text-cyan-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Future Plans */}
              {project.futurePlans && (
                <section className="mt-10">
                  <h2 className="text-xl font-semibold text-white mb-5">
                    Potential Improvements & Future Plans
                  </h2>

                  <ul className="space-y-3">
                    {project.futurePlans.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;