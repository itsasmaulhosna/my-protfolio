"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* 🔹 Logo + Name + Social */}
        <div>
          <div className="flex items-center  mb-4">
            <Image
              src="/images/@logo.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            {/* <div className="leading-tight">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                Asma
              </h2>
              <p className="text-blue-500 text-sm">-dev</p>
            </div> */}
          </div>

          <p className="text-sm mb-4">
            Full Stack Developer building modern & scalable web apps.
          </p>

          {/* 🔥 Social Icons */}
          <div className="flex gap-4 text-lg">
            <a href="https://github.com/itsasmaulhosna" className="hover:text-blue-500 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/asma-ul-hosna-99a7553b4/" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/iamAsmaULHosna" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/iamasmaulhosnamaya/?hl=en" className="hover:text-blue-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 🔹 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
            <li><a href="/skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="/projects" className="hover:text-blue-500">Projects</a></li>
          </ul>
        </div>

        {/* 🔹 More */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            More
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#certificates" className="hover:text-blue-500">Certificates</a></li>
            <li><a href="#jobs" className="hover:text-blue-500">Jobs</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* 🔹 Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Get In Touch
          </h3>

          <div className="flex flex-col gap-3 text-sm">

            <a href="mailto:itsasmaulhosna@gmail.com" className="flex items-center gap-2 hover:text-blue-500">
              <FaEnvelope className="text-blue-500" />
              itsasmaulhosna@gmail.com
            </a>

            <a href="tel:01518455465" className="flex items-center gap-2 hover:text-blue-500">
              <FaPhoneAlt className="text-blue-500" />
              01518455465
            </a>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              Dhaka, Bangladesh
            </div>

          </div>
        </div>

      </div>

      {/* 🔻 Bottom */}
      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-5 text-sm">

        <p>
          © {new Date().getFullYear()} Asma. All rights reserved.
        </p>

        <p className="mt-1">
          Designed & Built by <span className="text-blue-500 font-medium">Asma</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;