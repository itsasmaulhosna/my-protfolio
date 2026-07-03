
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    text: "Amazing work! The project was delivered on time with excellent quality.",
  },
  {
    name: "Sarah Khan",
    role: "UI/UX Designer",
    text: "Very clean UI and smooth performance. Highly recommended developer.",
  },
  {
    name: "Michael Lee",
    role: "Product Manager",
    text: "Great communication and strong technical skills. Loved working together.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="py-28 transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black">
          Client{" "}
          <span className="text-pink-500">Testimonials</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-4">
          What clients say about my work and collaboration
        </p>
      </div>

      {/* TESTIMONIAL CARD */}
      <div className="max-w-3xl mx-auto px-5">

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative p-10 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg text-center overflow-hidden"
        >

          {/* GLOW */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl" />

          {/* TEXT */}
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-300 relative z-10">
            “{current.text}”
          </p>

          {/* NAME */}
          <h3 className="mt-6 text-xl font-bold relative z-10">
            {current.name}
          </h3>

          {/* ROLE */}
          <p className="text-sm text-gray-500 dark:text-gray-400 relative z-10">
            {current.role}
          </p>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6 relative z-10">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === index
                    ? "bg-pink-500 w-6"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

