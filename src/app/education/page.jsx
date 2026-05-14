"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "@gravity-ui/icons";
import { FaGraduationCap } from "react-icons/fa6";

const data = [
  {
    id: "ssc",
    title: "SSC",
    subtitle: "Secondary School Certificate",
    status: "Completed",
    institution: "Joypurhat Govt. High School",
    board: "Dhaka Education Board",
    degree: "SSC (Science)",
    year: "2021",
    gpa: "5.00 / 5.00",
    roll: "120210",
    reg: "1711536124",
    about:
      "Completed SSC with a solid academic foundation in science and core subjects.",
    focus: "Strong Foundation",
    progress: 100,
    color: "from-cyan-500 via-sky-500 to-blue-500",
    side: "left",
  },
  {
    id: "hsc",
    title: "HSC",
    subtitle: "Higher Secondary Certificate",
    status: "Completed",
    institution: "Gazipur Govt. Mohila College",
    board: "Dhaka Education Board",
    degree: "HSC (Science)",
    year: "2023",
    gpa: "4.56 / 5.00",
    roll: "522234",
    reg: "1711536124",
    about:
      "Completed HSC with consistent academic performance and advanced study focus.",
    focus: "Advanced Studies",
    progress: 80,
    color: "from-purple-500 via-pink-500 to-rose-500",
    side: "right",
  },
  {
    id: "bsc",
    title: "BSC",
    subtitle: "Computer Science & Engineering",
    status: "In Progress",
    institution: "Model Institute of Science & Technology",
    board: "University Curriculum",
    degree: "BSc in CSE",
    year: "2024 - Present",
    gpa: "In Progress",
    roll: "-",
    reg: "-",
    about:
      "Currently pursuing Computer Science & Engineering degree with modern development technologies and problem solving.",
    focus: "Currently Enrolled",
    progress: 60,
    color: "from-emerald-500 via-green-500 to-teal-500",
    side: "left",
  },
];

export default function Education() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-32 overflow-hidden text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_30%)]" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-28"
        >

          {/* SMALL BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-gray-900/70 mb-6">

            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse" />

            <span className="text-sm uppercase tracking-[3px] text-gray-300 font-semibold">
              Academic Journey
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            My{" "}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
              Education
            </span>
          </h2>

          {/* PARAGRAPH */}
          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg leading-8">
            Academic path building strong knowledge, technical expertise,
            creativity, and problem solving mindset that power my journey as a
            developer and future software engineer.
          </p>

          {/* LINE */}
          <div className="w-44 h-[3px] rounded-full mx-auto mt-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full rounded-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500" />

          <div className="space-y-28">

            {data.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`relative flex ${
                  item.side === "left"
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* CENTER DOT + LABEL */}
                <div className="hidden md:block">

                  {/* LEFT */}
                  {item.side === "left" && (
                    <div className="absolute left-1/2 top-16 -translate-x-1/2 flex items-center">

                      {/* LABEL */}
                      <div
                        className={`mr-5 px-4 py-2 rounded-full text-sm font-bold border border-white/10 backdrop-blur-xl bg-gradient-to-r ${item.color} bg-opacity-10`}
                      >
                        {item.title}
                      </div>

                      {/* DOT */}
                      <div className="relative">

                        {/* GLOW */}
                        <div
                          className={`absolute inset-0 w-10 h-10 rounded-full blur-xl opacity-30 bg-gradient-to-r ${item.color}`}
                        />

                        {/* MAIN DOT */}
                        <div
                          className={`relative w-6 h-6 rounded-full border-4 border-[#0f172a] bg-gradient-to-r ${item.color}`}
                        />
                      </div>
                    </div>
                  )}

                  {/* RIGHT */}
                  {item.side === "right" && (
                    <div className="absolute left-1/2 top-16 -translate-x-1/2 flex items-center">

                      {/* DOT */}
                      <div className="relative">

                        {/* GLOW */}
                        <div
                          className={`absolute inset-0 w-10 h-10 rounded-full blur-xl opacity-30 bg-gradient-to-r ${item.color}`}
                        />

                        {/* MAIN DOT */}
                        <div
                          className={`relative w-6 h-6 rounded-full border-4 border-[#0f172a] bg-gradient-to-r ${item.color}`}
                        />
                      </div>

                      {/* LABEL */}
                      <div
                        className={`ml-5 px-4 py-2 rounded-full text-sm font-bold border border-white/10 backdrop-blur-xl bg-gradient-to-r ${item.color} bg-opacity-10`}
                      >
                        {item.title}
                      </div>
                    </div>
                  )}
                </div>

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-full md:w-[44%]"
                >

                  {/* SOFT GLOW */}
                  <div
                    className={`absolute -inset-[1px] rounded-[30px] opacity-0 group-hover:opacity-40 blur-lg transition duration-500 bg-gradient-to-r ${item.color}`}
                  />

                  {/* CARD BODY */}
                  <div className="relative rounded-[30px] border border-gray-800 bg-gray-900/90 backdrop-blur-xl p-7 overflow-hidden">

                    {/* TOP LINE */}
                    <div
                      className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.color}`}
                    />

                    {/* YEAR + STATUS */}
                    <div className="flex items-center gap-3 mb-5">

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${item.color} text-black`}
                      >
                        {item.year}
                      </span>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === "Completed"
                            ? "bg-green-500 text-black"
                            : "bg-yellow-500 text-black"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* TITLE */}
                    <div className="flex items-center gap-4">

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r ${item.color}`}
                      >
                        <FaGraduationCap className="text-black text-2xl" />
                      </div>

                      <div>
                        <h3 className="text-3xl font-black">
                          {item.title}
                        </h3>

                        <p className="text-gray-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* ABOUT */}
                    <div className="mt-6 rounded-2xl border border-gray-800 bg-black/30 p-5">
                      <p className="text-gray-300 leading-7">
                        {item.about}
                      </p>
                    </div>

                    {/* PROGRESS */}
                    <div className="mt-6">

                      <div className="flex justify-between mb-2 text-sm">
                        <span className="text-gray-400">
                          {item.focus}
                        </span>

                        <span className="font-bold">
                          {item.progress}%
                        </span>
                      </div>

                      <div className="h-3 rounded-full overflow-hidden bg-gray-800">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        />
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => setSelected(item)}
                      className={`mt-7 w-full py-3 rounded-2xl font-bold flex justify-center items-center gap-2 bg-gradient-to-r ${item.color} text-black hover:opacity-90 transition`}
                    >
                      View Details
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-36">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gray-900/70 p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-cyan-500 to-blue-500 blur-3xl" />

              <div className="relative z-10">

                <div className="text-cyan-400 text-sm uppercase tracking-widest">
                  Completed
                </div>

                <h3 className="text-4xl font-black mt-4">
                  03+
                </h3>

                <p className="text-gray-400 mt-2">
                  Academic Milestones
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gray-900/70 p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl" />

              <div className="relative z-10">

                <div className="text-purple-400 text-sm uppercase tracking-widest">
                  Average GPA
                </div>

                <h3 className="text-4xl font-black mt-4">
                  4.78
                </h3>

                <p className="text-gray-400 mt-2">
                  Excellent Academic Result
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl border border-green-500/20 bg-gray-900/70 p-8"
            >

              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-green-500 to-emerald-500 blur-3xl" />

              <div className="relative z-10">

                <div className="text-green-400 text-sm uppercase tracking-widest">
                  Current Year
                </div>

                <h3 className="text-4xl font-black mt-4">
                  2nd
                </h3>

                <p className="text-gray-400 mt-2">
                  BSc Running Semester
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setSelected(null)}
          >

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-[35px] border border-gray-800 bg-gray-900 p-8"
            >

              {/* HEADER */}
              <div className="flex items-center justify-between">

                <div>
                  <h2 className="text-3xl font-black">
                    {selected.title}
                  </h2>

                  <p className="text-gray-400 mt-1">
                    {selected.subtitle}
                  </p>
                </div>

                <div
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    selected.status === "Completed"
                      ? "bg-green-500 text-black"
                      : "bg-yellow-500 text-black"
                  }`}
                >
                  {selected.status}
                </div>
              </div>

              {/* GRID */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">

                {[
                  ["Institution", selected.institution],
                  ["Degree", selected.degree],
                  ["Board", selected.board],
                  ["GPA", selected.gpa],
                  ["Roll", selected.roll],
                  ["Registration", selected.reg],
                ].map((info, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-gray-800 bg-black/30 p-5"
                  >

                    <p className="text-gray-500 text-sm">
                      {info[0]}
                    </p>

                    <h4 className="mt-2 font-semibold">
                      {info[1]}
                    </h4>
                  </div>
                ))}
              </div>

              {/* ABOUT */}
              <div className="mt-6 rounded-2xl border border-gray-800 bg-black/30 p-5">

                <p className="text-gray-300 leading-7">
                  {selected.about}
                </p>
              </div>

              {/* CLOSE */}
              <button
                onClick={() => setSelected(null)}
                className="mt-7 w-full py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 font-bold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}