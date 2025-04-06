"use client";
import { useTheme } from "next-themes"; 
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  
  FaWhatsapp,
  FaInstagram,
  FaHome,
  FaMoon,
  FaSun,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import { SiX } from 'react-icons/si';

import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import laptopAnimation from "../animations/laptop.json";

export default function HeroSection() {
  const { theme, setTheme } = useTheme(); // 🧩 Global theme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Prevents hydration mismatch
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null; // Ensure theme is ready before render

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className={`relative w-full h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-white text-black dark:bg-black dark:text-white`} // 🔥 Tailwind handles theme
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-lg uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Welcome to My Portfolio
            </h4>
            <h1 className="text-4xl sm:text-6xl font-bold mt-3">
              Hey, I'm <span className="text-blue-500">Gideon</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium mt-2">
              Full-Stack Developer 
            </h2>
          </motion.div>

          {/* Animation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Lottie
              animationData={laptopAnimation}
              loop
              autoPlay
              className="w-72 sm:w-96"
            />
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-12 w-full max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-6">
            Tech Stack & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <FaJs className="text-yellow-500 text-4xl hover:scale-110 transition-transform duration-300" />
            <FaNodeJs className="text-green-600 text-4xl hover:scale-110 transition-transform duration-300" />
            <FaReact className="text-blue-500 text-4xl hover:scale-110 transition-transform duration-300" />
            <FaPython className="text-blue-400 text-4xl hover:scale-110 transition-transform duration-300" />
            <FaAws className="text-orange-500 text-4xl hover:scale-110 transition-transform duration-300" />
            <FaDatabase className="text-gray-500 text-4xl hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Floating Icon Bar with Tooltip & Bounce Animation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-full shadow-lg px-5 py-3 flex gap-5 z-50">
        {/* Home */}
        <div className="relative group">
          <FaHome
            className="text-xl cursor-pointer hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300"
            onClick={scrollToTop}
          />
          <span className="tooltip">Home</span>
        </div>

        {/* GitHub */}
        <div className="relative group">
          <a
            href="https://github.com/Nigiddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">GitHub</span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <a
            href="https://linkedin.com/in/gideon-papa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">LinkedIn</span>
        </div>

        {/* Twitter */}
        <div className="relative group">
          <a
            href="https://x.com/ni_giddy?t=6l78-sWuQwh3Hi2hpi6hvA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiX className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">Twitter</span>
        </div>

        {/* WhatsApp */}
        <div className="relative group">
          <a
            href="https://wa.me/254756521055"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">WhatsApp</span>
        </div>

        {/* Instagram */}
        <div className="relative group">
          <a
            href="https://www.instagram.com/ni.giddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">Instagram</span>
        </div>

        {/* Dark Mode Toggle */}
        <div className="relative group">
          {theme === "dark" ? (
            <FaSun
              className="text-xl hover:text-yellow-400 hover:rotate-180 hover:scale-125 transition-all duration-300 cursor-pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <FaMoon
              className="text-xl hover:text-gray-800 hover:rotate-180 hover:scale-125 transition-all duration-300 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          )}
          <span className="tooltip">Toggle Mode</span>
        </div>
      </div>

      {/* Tooltip Styling */}
      <style jsx>{`
        .tooltip {
          position: absolute;
          bottom: 150%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #000000cc;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }

        .group:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
