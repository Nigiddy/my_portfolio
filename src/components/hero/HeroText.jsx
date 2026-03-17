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
        <span className="h-px w-8 bg-orange-500 hidden md:block" />
        <span className="text-xs font-mono text-orange-500 dark:text-orange-400 uppercase tracking-[0.2em]">
          Full-Stack Developer &amp; UI/UX Designer
        </span>
      </div>

      {/* Name */}
      <div className="animate-fadeSlideUp [animation-delay:100ms]">
        <p className="text-zinc-600 dark:text-zinc-500 text-sm font-mono mb-1">Hey there 👋 I'm</p>
        <h1 className="text-fluid-heading-1 font-black tracking-tight leading-none">
          <span className="name-gradient">Gideon</span>
          <br />
          <span className="text-black dark:text-white">Papa</span>
          <span className="cursor" aria-hidden />
        </h1>
      </div>

      {/* Bio */}
      <p className="text-zinc-700 dark:text-zinc-400 text-fluid-body leading-relaxed max-w-md animate-fadeSlideUp [animation-delay:200ms]">
        I build high-performance, conversion-focused web products — from seamless M-Pesa
        integrations to scalable multi-tenant SaaS. Based in Nairobi, shipping world-class
        digital experiences globally.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2 animate-fadeSlideUp [animation-delay:300ms]">
        <a
          href="#projects"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-600/30 transition-all duration-200 hover:scale-[1.02]"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white border border-zinc-300 hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500 bg-white/50 hover:bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 transition-all duration-200"
        >
          Get in Touch
        </a>
      </div>
    </motion.div>
  );
}
