"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  
  const words = ["Full Stack Developer", "MERN Stack Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentWord = words[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
      } else {
        setText(currentWord.substring(0, text.length - 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="min-h-screen flex items-center bg-white dark:bg-gray-900 transition">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">


        <div className="space-y-6">

          
          <div className="inline-block px-4 py-2 rounded-full border border-blue-500 text-blue-500 text-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Open to Full-time opportunities or Freelance projects
          </div>


          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Hello, I'm <br />
            <span className="text-blue-500">Asma Ul Hosna</span>
          </h1>


          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {text}
              <span className="animate-pulse text-blue-500">|</span>
            </span>
          </h2>


          <p className="text-gray-600 dark:text-gray-400 max-w-lg">
            I craft modern, high-performance web applications with clean architecture and intuitive user experiences.
            Turning complex problems into elegant digital solutions.
          </p>

          
          <div className="flex flex-wrap gap-4 pt-2">

            <motion.a
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg"
            >
              View Projects <FaProjectDiagram />
            </motion.a>

            <motion.a
              whileHover={{ y: 5 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-500 rounded-full"
            >
              Contact Me <FaArrowRight />
            </motion.a>

          </div>
        </div>

        {/* 🔹 RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* 🔥 Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src="/images/banner.jpeg"
              alt="profile"
              width={370}
              height={270}
              className="rounded-full border-4 border-blue-500 shadow-xl"
            />
          </motion.div>

          {/* 🔥 LEFT STATS */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute left-0 top-10 bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaProjectDiagram className="text-blue-500" />
            <div>
              <p className="font-bold text-blue-500">1+ Year</p>
              <p className="text-xs">Experience</p>
            </div>
          </motion.div>

          {/* 🔥 RIGHT STATS */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute right-0 bottom-10 bg-white dark:bg-gray-800 shadow-lg px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaProjectDiagram className="text-blue-500" />
            <div>
              <p className="font-bold text-blue-500">20+</p>
              <p className="text-xs">Projects</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Banner;