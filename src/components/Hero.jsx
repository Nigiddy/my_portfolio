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
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiX } from 'react-icons/si';

import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import laptopAnimation from "../animations/laptop.json";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const word = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
};

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
        className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <p className="text-overline text-gray-500 dark:text-gray-400">
                Welcome to My Portfolio
              </p>
            </motion.div>
            <motion.div variants={item}>
              <h1
                className="font-heading font-bold mt-3 tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(2.25rem, 5.5vw, 4rem)" }}
              >
                Hey, I'm <span className="text-blue-500">Gideon Papa</span>
              </h1>
            </motion.div>
            <motion.div variants={item}>
              <motion.p
                className="text-base sm:text-lg font-medium mt-4 text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {"I build high-performance web products solving real business problems. Bringing ideas to life with code, creativity, and a touch of magic."
                  .split(" ")
                  .map((w, i) => (
                    <motion.span key={i} variants={word} style={{ display: "inline-block", marginRight: "0.25em" }}>
                      {w}
                    </motion.span>
                  ))}
              </motion.p>
            </motion.div>
            <motion.div variants={item}>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Let's work together
                  <FaArrowRight className="text-xs" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  View projects
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          </motion.div>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-6 tracking-tight">
            Tech Stack & Expertise
          </h2>
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
            aria-label="GitHub profile"
            tabIndex={0}
          >
            <FaGithub className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">GitHub</span>
        </div>

        {/* LinkedIn */}
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/gideon-papa-8b121124b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            tabIndex={0}
          >
            <FaLinkedin className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">LinkedIn</span>
        </div>

        {/* Twitter */}
        <div className="relative group">
          <a
            href="https://x.com/niGiddy"
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
            href="https://wa.me/254775551019"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp contact"
            tabIndex={0}
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
            aria-label="Instagram profile"
            tabIndex={0}
          >
            <FaInstagram className="text-xl hover:text-blue-500 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-pointer" />
          </a>
          <span className="tooltip">Instagram</span>
        </div>
      </div>

    </>
  );
}
