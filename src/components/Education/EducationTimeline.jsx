"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { educationData } from "./EducationData";
import EducationCard from "./EducationCard";
import EducationModal from "./EducationModal";

const gradient = "from-cyan-400 via-blue-500 to-indigo-600";

export default function EducationTimeline() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="relative py-28 overflow-hidden">
        {/* Background Blur */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-r ${gradient} opacity-10 blur-[140px]`}
          />

          <div
            className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r ${gradient} opacity-10 blur-[120px]`}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full">
              <div
                className={`w-1 h-full rounded-full bg-gradient-to-b ${gradient}`}
              />
            </div>

            <div className="space-y-28">
              {educationData.map((item) => (
                <EducationCard
                  key={item.id}
                  item={item}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-32"
          >
            <StatCard
              title="Education Levels"
              value="03+"
              subtitle="SSC • HSC • B.Sc"
              color={gradient}
            />

            <StatCard
              title="Average GPA"
              value="4.78"
              subtitle="Excellent Academic Performance"
              color={gradient}
            />

            <StatCard
              title="Current Status"
              value="2nd"
              subtitle="Year B.Sc in CSE"
              color={gradient}
            />
          </motion.div>
        </div>
      </section>

      <EducationModal
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl"
    >
      <div
        className={`absolute inset-0 opacity-10 blur-3xl bg-gradient-to-br ${color}`}
      />

      <div className="relative">
        <div className="text-sm uppercase tracking-widest text-slate-400">
          {title}
        </div>

        <h3 className="text-4xl md:text-5xl font-black mt-4">
          {value}
        </h3>

        <p className="text-slate-400 mt-3">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}