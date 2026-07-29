
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    title: "SSC (Science)",
    institute: "Joypurhat Govt. High School",
    year: "2021",
    result: "GPA 5.00",
  },
  {
    title: "HSC (Science)",
    institute: "Gazipur Govt. Mohila College",
    year: "2023",
    result: "GPA 4.56",
  },
  {
    title: "BSc in CSE",
    institute: "Model Institute of Science & Technology",
    year: "2024 - Present",
    result: "Running",
  },
];

export default function EducationPreview() {
  return (
    <section className="xl:py-28 transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          Education{" "}
          <span className="text-purple-500">Journey</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          My academic background that shaped my development journey
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto px-5">

        {/* CENTER LINE */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500" />

        <div className="space-y-12">

          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-center ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >

              {/* DOT */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />

              {/* CARD */}
              <div className="ml-12 md:ml-0 md:w-[45%] group">

                <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition">

                  {/* ICON */}
                  <div className="text-purple-500 text-2xl mb-3">
                    <FaGraduationCap />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  {/* INSTITUTE */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.institute}
                  </p>

                  {/* YEAR + RESULT */}
                  <div className="flex justify-between mt-4 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.year}
                    </span>

                    <span className="font-semibold text-purple-500">
                      {item.result}
                    </span>
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

