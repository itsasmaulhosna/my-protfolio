"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  School,
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  User,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";

const gradient = "from-cyan-400 via-blue-500 to-indigo-600";

export default function EducationModal({ selected, setSelected }) {
  if (!selected) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-[32px] border border-white/10 bg-white dark:bg-[#0f172a] shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-black/30 hover:bg-red-500 transition flex items-center justify-center cursor-pointer"
          >
            <X className="text-white w-5 h-5" />
          </button>

          {/* ================= HEADER ================= */}
          <div
            className={`relative overflow-hidden bg-gradient-to-r ${gradient} p-6 md:p-10`}
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Logo */}
              {selected.logo ? (
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-white p-4 shadow-xl">
                  <Image
                    src={selected.logo}
                    alt={selected.title}
                    width={130}
                    height={130}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-white flex items-center justify-center shadow-xl">
                  <GraduationCap
                    size={60}
                    className="text-slate-800"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-2 rounded-full bg-black/20 text-white text-sm font-semibold">
                  {selected.status}
                </span>

                <h2 className="mt-5 text-3xl md:text-5xl font-black text-black">
                  {selected.title}
                </h2>

                <p className="mt-2 text-lg md:text-xl text-black/80">
                  {selected.subtitle}
                </p>

                <p className="mt-3 text-black/70">
                  {selected.institution}
                </p>
              </div>

              {/* GPA Circle */}
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full border-[8px] border-white/30 bg-white/20 backdrop-blur-lg flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <h3 className="text-3xl font-black text-black">
                      {selected.gpa.includes("CGPA")
                        ? selected.gpa.replace("CGPA :", "")
                        : selected.gpa.split("/")[0]}
                    </h3>

                    <p className="text-sm font-semibold text-black/80">
                      GPA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BODY ================= */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-5">
              <InfoCard
                icon={<School size={18} />}
                title="Institution"
                value={selected.institution}
              />

              <InfoCard
                icon={<GraduationCap size={18} />}
                title="Degree"
                value={selected.degree}
              />

              <InfoCard
                icon={<Award size={18} />}
                title="Board"
                value={selected.board}
              />

              <InfoCard
                icon={<Calendar size={18} />}
                title="Academic Year"
                value={selected.year}
              />

              <InfoCard
                icon={<User size={18} />}
                title="Roll"
                value={selected.roll}
              />

              <InfoCard
                icon={<BadgeCheck size={18} />}
                title="Registration"
                value={selected.registration}
              />
            </div>
                        {/* About */}
            <div className="mt-8 rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/70 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold mb-4">
                <BookOpen size={20} className="text-cyan-400" />
                About This Degree
              </h3>

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                {selected.about}
              </p>
            </div>

            {/* Academic Focus */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-5">
                Academic Focus
              </h3>

              <div className="flex flex-wrap gap-3">
                {selected.focus.map((item) => (
                  <span
                    key={item}
                    className={`px-5 py-2 rounded-full font-semibold text-black bg-gradient-to-r ${gradient}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-10 flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className={`px-8 py-3 rounded-2xl font-bold text-black bg-gradient-to-r ${gradient} transition hover:scale-105`}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 p-5"
    >
      <div className="flex items-center gap-2 text-cyan-500 text-sm font-medium">
        {icon}
        <span>{title}</span>
      </div>

      <div className="mt-3 text-lg font-semibold text-slate-900 dark:text-white break-words">
        {value}
      </div>
    </motion.div>
  );
}