"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@gravity-ui/icons";
import { FaGraduationCap } from "react-icons/fa6";

export default function EducationCard({ item, setSelected }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative flex ${
        item.side === "left" ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <div className="hidden md:block">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 flex items-center">
          {item.side === "right" && (
            <>
              <div className="relative">
                <div
                  className={`absolute inset-0 w-10 h-10 rounded-full blur-xl opacity-40 bg-gradient-to-r ${item.color.gradient}`}
                />

                <div
                  className={`relative w-6 h-6 rounded-full border-4 border-[#0f172a] bg-gradient-to-r ${item.color.gradient}`}
                />
              </div>

              <span
                className={`ml-5 px-4 py-2 rounded-full border ${item.color.badge} backdrop-blur-xl font-semibold`}
              >
                {item.title}
              </span>
            </>
          )}

          {item.side === "left" && (
            <>
              <span
                className={`mr-5 px-4 py-2 rounded-full border ${item.color.badge} backdrop-blur-xl font-semibold`}
              >
                {item.title}
              </span>

              <div className="relative">
                <div
                  className={`absolute inset-0 w-10 h-10 rounded-full blur-xl opacity-40 bg-gradient-to-r ${item.color.gradient}`}
                />

                <div
                  className={`relative w-6 h-6 rounded-full border-4 border-[#0f172a] bg-gradient-to-r ${item.color.gradient}`}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        transition={{ duration: 0.35 }}
        className="relative group w-full md:w-[45%]"
      >
        {/* Glow */}
        <div
          className={`absolute -inset-[2px] rounded-[30px] opacity-0 group-hover:opacity-50 blur-xl transition duration-500 bg-gradient-to-r ${item.color.gradient}`}
        />

        {/* Card Body */}
        <div className="relative overflow-hidden rounded-[30px] border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#101624]/90 backdrop-blur-xl p-8">
          {/* Top Border */}
          <div
            className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.color.gradient}`}
          />

          {/* Floating Blur */}
          <div
            className={`absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-10 blur-3xl bg-gradient-to-br ${item.color.gradient}`}
          />

          {/* Header */}
          <div className="flex justify-between items-start mb-7 relative z-10">
            <div>
              <span
                className={`inline-flex px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${item.color.gradient} text-black`}
              >
                {item.year}
              </span>

              <h2 className="text-3xl font-black mt-5">{item.title}</h2>

              <p className="text-gray-600 dark:text-gray-400">{item.subtitle}</p>
            </div>

            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${item.color.gradient}`}
            >
              <FaGraduationCap className="text-2xl text-black" />
            </div>
          </div>

          {/* Institution */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-black/30 p-5 relative z-10">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Institution
            </p>

            <h3 className="mt-2 text-xl font-bold">{item.institution}</h3>

            <p className="text-gray-600 dark:text-gray-600 dark:text-gray-400 mt-2">{item.degree}</p>
          </div>

          {/* Progress */}
          <div className="mt-6 relative z-10">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Academic Progress</span>

              <span className="font-bold">{item.progress}%</span>
            </div>

            <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.progress}%` }}
                transition={{ duration: 1 }}
                className={`h-full rounded-full bg-gradient-to-r ${item.color.gradient}`}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-7 relative z-10">
            <div>
              <p className="text-sm text-gray-500">Result</p>

              <h3 className="text-lg font-bold">{item.gpa}</h3>
            </div>

            <span
              className={`px-4 py-2 rounded-full text-sm font-bold ${
                item.status === "Completed"
                  ? "bg-green-500 text-black"
                  : "bg-yellow-400 text-black"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Button */}
          <button
            onClick={() => setSelected(item)}
            className={`mt-8 w-full py-3 rounded-2xl bg-gradient-to-r ${item.color.gradient} font-bold text-black flex items-center justify-center gap-2 transition hover:scale-[1.02]`}
          >
            View Details
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}