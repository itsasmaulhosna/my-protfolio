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
  FaPaperPlane,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import ThemeToogle from "./ThemeToogle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm transition">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">

        
        <div className="flex items-center">
  <Image
    src="/images/nav-fot-logo.png"
    alt="Asma Ul Hoosna"
    width={72}
    height={72}
    priority
    className="h-14 lg:h-15 w-auto"
  />

  <div className="flex sm:flex flex-col justify-center leading-tight">
    <h1 className="text-sm sm:text-lg lg:text-xl font-black tracking-tight text-gray-900 dark:text-white">
  <span>ASMA</span>{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
    UL
  </span>{" "}
  <span>HOOSNA</span>
</h1>

<p className="mt-1 text-[8px] sm:text-[11px] lg:text-xs uppercase tracking-[0.18em] sm:tracking-[0.28em] text-slate-500 dark:text-slate-400">
  Full Stack Developer
</p>
  </div>
</div>

        
        <ul className="hidden md:flex items-center gap-7 px-7 py-3 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl shadow-lg">

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