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

export default function EducationModal({ selected, setSelected }) {
  if (!selected) return null;

  const gradient = selected.color.gradient;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelected(null)}
      >
        <motion.div
          initial={{ scale: .85, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: .9, opacity: 0 }}
          transition={{ duration: .35 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[35px] overflow-hidden border border-white/10 bg-white dark:bg-[#0f172a]]"
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${gradient} p-8 text-black relative`}>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 transition flex items-center justify-center"
            >
<X className="text-white" />
            </button>

            <div className="flex flex-col md:flex-row items-center gap-6">

              {selected.logo ? (
                <div className="w-28 h-28 rounded-3xl bg-white p-4 shadow-xl">
                  <Image
                    src={selected.logo}
                    alt={selected.title}
                    width={120}
                    height={120}
                    className="object-contain w-full h-full"
                  />
                </div>
              ) : (
                <div className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center">
                  <GraduationCap size={55} />
                </div>
              )}

              <div className="flex-1">

                <span className="inline-block bg-black/20 px-4 py-2 rounded-full text-sm font-semibold">
                  {selected.status}
                </span>

<h2 className="text-3xl md:text-4xl font-black mt-4">
                  {selected.title}
                </h2>

                <p className="text-lg opacity-90">
                  {selected.subtitle}
                </p>

                <p className="mt-3 text-sm opacity-80">
                  {selected.institution}
                </p>

              </div>

              <div className="text-center">

                <div className="w-28 h-28 rounded-full border-[8px] border-white/30 flex items-center justify-center bg-white/20">
                  <div>
                    <div className="text-3xl font-black">
                      {selected.gpa.includes("CGPA")
                        ? selected.gpa.replace("CGPA :", "")
                        : selected.gpa.split("/")[0]}
                    </div>

                    <div className="text-sm">
                      GPA
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Body */}
          <div className="p-8">

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
            <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-6">

              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                About This Degree
              </h3>

              <p className="text-slate-700 dark:text-slate-300 leading-8">
                {selected.about}
              </p>

            </div>

            {/* Focus */}
            <div className="mt-8">

              <h3 className="font-bold text-xl mb-5">
                Academic Focus
              </h3>

              <div className="flex flex-wrap gap-3">

                {selected.focus.map((item) => (
                  <span
                    key={item}
                    className={`px-5 py-2 rounded-full bg-gradient-to-r ${gradient} text-black font-semibold`}
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
                className={`px-8 py-3 rounded-2xl font-bold bg-gradient-to-r ${gradient} text-black`}
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
    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">

      <div className="flex items-center gap-2 text-slate-400 text-sm">

        {icon}

        {title}

      </div>

      <div className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
        {value}
      </div>

    </div>
  );
}