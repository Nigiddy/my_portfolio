"use client";
import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <motion.div
      className="flex flex-col gap-5 text-center md:text-left items-center md:items-start"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2 animate-fadeSlideUp">
        <span className="h-px w-8 bg-blue-600 hidden md:block" />
        <span className="text-xs font-mono text-blue-600 uppercase tracking-[0.2em]">
          Full-Stack Developer &amp; UI/UX Designer
        </span>
      </div>

      {/* Name */}
      <div className="animate-fadeSlideUp [animation-delay:100ms]">
        <p className="text-gray-500 text-sm font-mono mb-1">Hey there 👋 I'm</p>
        <h1 className="text-fluid-heading-1 font-black tracking-tight leading-none">
          <span className="text-blue-600">Gideon</span>
          <br />
          <span className="text-gray-900">Papa</span>
        </h1>
      </div>

      {/* Bio */}
      <p className="text-gray-500 text-fluid-body leading-relaxed max-w-md animate-fadeSlideUp [animation-delay:200ms]">
        I build high-performance, conversion-focused web products — from seamless M-Pesa
        integrations to scalable multi-tenant SaaS. Based in Nairobi, shipping world-class
        digital experiences globally.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2 animate-fadeSlideUp [animation-delay:300ms]">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200 hover:scale-[1.02]"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 transition-all duration-200"
        >
          Get in Touch
        </a>
      </div>
    </motion.div>
  );
}
