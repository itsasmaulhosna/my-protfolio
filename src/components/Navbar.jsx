"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelope,
  FaFileAlt,
  FaPaperPlane,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import ThemeToogle from "./ThemeToogle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm transition">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="leading-tight">
            <h2 className="font-bold text-lg text-gray-800 dark:text-white">
              Asma
            </h2>
            <p className="text-sm text-blue-500">-dev</p>
          </div>
        </div>

        
        <ul className="hidden md:flex items-center gap-6 px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm text-gray-700 dark:text-gray-200">

          <li><Link href="/" className="flex items-center gap-1 hover:text-blue-500"><FaHome/> Home</Link></li>
          <li><Link href="/about" className="flex items-center gap-1 hover:text-blue-500"><FaUser/> About</Link></li>
          <li><Link href="/skills" className="flex items-center gap-1 hover:text-blue-500"><FaCode/> Skills</Link></li>
          <li><Link href="/projects" className="flex items-center gap-1 hover:text-blue-500"><FaProjectDiagram/> Projects</Link></li>
          <li><Link href="/education" className="flex items-center gap-1 hover:text-blue-500"><FaGraduationCap/> Education</Link></li>
          <li><Link href="/contact" className="flex items-center gap-1 hover:text-blue-500"><FaEnvelope/> Contact</Link></li>

        </ul>

        
        <div className="hidden md:flex items-center gap-4">

          <ThemeToogle />

          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition"
          >
            <FaFileAlt /> Resume
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            <FaPaperPlane /> Hire Me
          </a>
        </div>


        <div className="md:hidden flex items-center gap-3">
          <ThemeToogle />
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22}/> : <FaBars size={22}/>}
          </button>
        </div>
      </div>

      
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 space-y-4 text-gray-700 dark:text-gray-200">

          <Link onClick={()=>setOpen(false)} href="/" className="flex items-center gap-2"><FaHome/> Home</Link>
          <Link onClick={()=>setOpen(false)} href="/about" className="flex items-center gap-2"><FaUser/> About</Link>
          <Link onClick={()=>setOpen(false)} href="/skills" className="flex items-center gap-2"><FaCode/> Skills</Link>
          <Link onClick={()=>setOpen(false)} href="/projects" className="flex items-center gap-2"><FaProjectDiagram/> Projects</Link>
          <Link onClick={()=>setOpen(false)} href="/education" className="flex items-center gap-2"><FaGraduationCap/> Education</Link>
          <Link onClick={()=>setOpen(false)} href="/contact" className="flex items-center gap-2"><FaEnvelope/> Contact</Link>

          <div className="pt-4 flex flex-col gap-3">

            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-blue-500 text-blue-500 dark:text-blue-400"
            >
              <FaFileAlt /> Resume
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white"
            >
              <FaPaperPlane /> Hire Me
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;