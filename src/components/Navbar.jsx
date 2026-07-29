"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

const navClass = (path) =>
  `flex items-center gap-1 transition-all duration-300 ${
    pathname === path
      ? "text-blue-500 font-semibold"
      : "text-gray-700 dark:text-gray-200 hover:text-blue-500"
  }`;
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm transition">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">

        
        {/* <div className="flex items-center">
  <Image
    src="/images/@logo.png"
    alt="Asma Ul Hoosna"
    width={80}
    height={80}
    priority
    className="h-14 lg:h-20 w-auto"
  />

  
</div> */}
<div className="flex items-center h-16 overflow-visible">
  <Image
    src="/images/@logo.png"
    alt="Asma Ul Hoosna"
    width={100}
    height={100}
    priority
    className={`
    w-auto object-contain
    h-12
    sm:h-17
    md:h-18
    lg:h-20
    xl:h-24
  `}

  />
</div>

        
        <ul className="hidden md:flex items-center gap-7 px-7 py-3 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-800/70 backdrop-blur-xl shadow-lg">

  <li>
    <Link href="/" className={navClass("/")}>
      <FaHome /> Home
    </Link>
  </li>

  <li>
    <Link href="/about" className={navClass("/about")}>
      <FaUser /> About
    </Link>
  </li>

  <li>
    <Link href="/skills" className={navClass("/skills")}>
      <FaCode /> Skills
    </Link>
  </li>

  <li>
    <Link href="/projects" className={navClass("/projects")}>
      <FaProjectDiagram /> Projects
    </Link>
  </li>

  <li>
    <Link href="/education" className={navClass("/education")}>
      <FaGraduationCap /> Education
    </Link>
  </li>

  <li>
    <Link href="/contact" className={navClass("/contact")}>
      <FaEnvelope /> Contact
    </Link>
  </li>

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

          <Link
  href="/"
  onClick={() => setOpen(false)}
  className={navClass("/")}
>
  <FaHome /> Home
</Link>

<Link
  href="/about"
  onClick={() => setOpen(false)}
  className={navClass("/about")}
>
  <FaUser /> About
</Link>

<Link
  href="/skills"
  onClick={() => setOpen(false)}
  className={navClass("/skills")}
>
  <FaCode /> Skills
</Link>

<Link
  href="/projects"
  onClick={() => setOpen(false)}
  className={navClass("/projects")}
>
  <FaProjectDiagram /> Projects
</Link>

<Link
  href="/education"
  onClick={() => setOpen(false)}
  className={navClass("/education")}
>
  <FaGraduationCap /> Education
</Link>

<Link
  href="/contact"
  onClick={() => setOpen(false)}
  className={navClass("/contact")}
>
  <FaEnvelope /> Contact
</Link>

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