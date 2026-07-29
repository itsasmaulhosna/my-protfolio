"use client";

import Image from "next/image";
import {
  FaCheckCircle,
  FaRocket,
  FaDownload,
  FaProjectDiagram,
  FaUsers,
  FaCertificate,
  FaCalendarAlt,
} from "react-icons/fa";

const skills = [
  "React & Next.js Applications",
  "Database Design & Optimization",
  "Responsive & Accessible UI",
  "Cloud Deployment (AWS, Vercel)",
  "Performance Optimization",
  "Global State Management (Redux)",
  "Secure Authentication (Firebase, BetterAuth)",
  "Modern CSS Frameworks (Tailwind, DaisyUI)",
  "Server-side Logic (Node.js, Express.js)",
  "Version Control (Git & GitHub)",
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 xl:py-40 py-30 text-white">

      {/* ABOUT HEADER (AUTO WIDTH BORDER) */}
      <div className="text-center ">
        <div className="inline-block border border-gray-700 rounded-full px-3 py-2">
          <h1 className="text-xl font-bold">About Me</h1>
        </div>

        <p className="mt-2 text-5xl font-bold">
          Get to know{" "}
          <span className="text-[#4ac2c2]">who I am</span>
        </p>
      </div>

      {/* INTRO */}
      <div className=" p-8 text-center mb-16">
        <p className="text-gray-400 text-xl">
          A passionate developer dedicated to turning complex ideas into elegant,<br></br>
          high-performance digital experiences.
        </p>
      </div>

      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE (HOVER ANIMATION + BIGGER HEIGHT) */}
        <div className="overflow-hidden rounded-2xl border border-gray-700">
          <Image
            src="/images/banner.png"
            alt="profile"
            width={420}
            height={600}
            className="h-[580px] w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* RIGHT */}
        <div>

          {/* PROFESSIONAL BIO */}
                    <h2 className="text-xl font-semibold text-[#4ac2c2]">
            Professional Bio
          </h2>

          {/* GRADIENT TEXT SAME STYLE */}
          <h3 className="mt-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text ">
              Full Stack Web Developer
            </span>
            <br />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              React / Next.js Specialist
            </span>
          </h3>

          <p className="mt-4 text-sm text-gray-400">
            I'm Asma Ul Hosna — a Full Stack Web Developer focused on scalable,
            modern and high-performance web applications.
          </p>


          {/* SKILLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {skills.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border border-gray-700 rounded-full px-3 py-2 bg-gray-900"
              >
                <FaCheckCircle className="text-blue-400" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-xl hover:bg-blue-700 cursor-pointer">
              <FaRocket /> Let’s Work Together
            </button>

            <button className="flex items-center gap-2 border px-5 py-2 rounded-xl hover:bg-gray-800 cursor-pointer">
              <FaDownload /> Download CV
            </button>
          </div>
        </div>
      </div>

      {/* STATS WITH ICONS */}
      <div className="grid md:grid-cols-3 gap-6 mt-20 text-center">

        <div className="border border-gray-700 rounded-2xl p-8">
          <FaProjectDiagram className="mx-auto text-blue-400 text-xl mb-2" />
          <h2 className="text-3xl font-bold text-blue-400">20+</h2>
          <p>Projects</p>
        </div>

        <div className="border border-gray-700 rounded-2xl p-8">
          <FaUsers className="mx-auto text-purple-400 text-xl mb-2" />
          <h2 className="text-3xl font-bold text-purple-400">10+</h2>
          <p>Clients</p>
        </div>

        <div className="border border-gray-700 rounded-2xl p-8">
          <FaCertificate className="mx-auto text-pink-400 text-xl mb-2" />
          <h2 className="text-3xl font-bold text-pink-400">5+</h2>
          <p>Certificates</p>
        </div>

        {/* <div className="border border-gray-700 rounded-2xl p-8">
          <FaCalendarAlt className="mx-auto text-green-400 text-xl mb-2" />
          <h2 className="text-3xl font-bold text-green-400">1+</h2>
          <p>Years Exp</p>
        </div> */}

      </div>


<p className="mt-6 text-gray-400 leading-8">
  Hi, I'm <span className="text-white font-semibold">Asma Ul Hosna</span>, a
  passionate <span className="text-blue-400">Full Stack Web Developer</span>
  with a strong interest in building modern, responsive, and user-friendly web
  applications.

  <br />
  <br />

  My programming journey began with learning HTML and CSS out of curiosity.
  As I continued exploring web development, I mastered JavaScript and React,
  and later expanded my skills to Next.js, Node.js, Express.js, MongoDB, and
  modern development tools. Every project I build helps me improve my problem
  solving skills and understand real-world software development practices.

  <br />
  <br />

  I especially enjoy creating full-stack applications with clean UI, smooth
  user experiences, secure authentication, and scalable backend architecture.
  Turning ideas into functional products is the part of development I enjoy
  the most.

  <br />
  <br />

  Outside of programming, I enjoy learning new technologies, exploring modern
  UI/UX design trends, editing videos, and spending time improving my creative
  skills. I also enjoy listening to music and continuously challenging myself
  with new projects.

  <br />
  <br />

  I believe in continuous learning, writing clean code, and building solutions
  that make people's lives easier. My goal is to become a professional software
  engineer who creates meaningful digital experiences and contributes to
  impactful projects.
</p>
      {/* CORE STACK */}
      <div className="mt-16 border border-gray-700 p-6 rounded-2xl text-center">
        <p className="font-bold text-lg text-blue-400">
          Core Stack:
        </p>

        <p className="mt-2 text-gray-300">
          React, Next.js, Node.js, MongoDB, Tailwind CSS, Firebase, Docker, Vercel
        </p>
      </div>

    </div>
  );
}