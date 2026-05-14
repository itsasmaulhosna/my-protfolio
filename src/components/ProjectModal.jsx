"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const ProjectModal = ({ project }) => {
  const [open, setOpen] = useState(false);

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-cyan-400 text-black px-5 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
      >
        View Details
        <FaArrowRight />
      </button>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* MODAL BOX */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#111827] w-full max-w-5xl rounded-3xl overflow-hidden"
          >
            {/* CLOSE BUTTON (TOP RIGHT) */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-black/70 text-white p-3 rounded-full hover:bg-red-500 transition"
            >
              <FaTimes />
            </button>

            {/* IMAGE */}
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="w-full h-[250px] md:h-[450px] object-cover"
            />

            {/* CONTENT */}
            <div className="p-8">
              {/* TITLE */}
              <h1 className="text-4xl font-bold text-cyan-400">
                {project.title}
              </h1>

              {/* TYPE */}
              <span className="inline-block mt-4 border border-cyan-400 text-cyan-300 px-4 py-1 rounded-full text-sm">
                {project.type}
              </span>

              {/* TECH */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech?.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 leading-8 mt-8">
                {project.fullDescription}
              </p>

              {/* LINKS */}
              <div className="flex gap-5 mt-10 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;