"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin, FaGithub, FaWhatsapp, FaInstagram,
  FaJs, FaNodeJs, FaReact, FaPython, FaAws, FaDatabase,
} from "react-icons/fa";
import { SiX, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaHouse } from "react-icons/fa6";
import DockIcon from "./hero/DockIcon";
import ThemeSwitcher from "./theme/ThemeSwitcher";
import Wrapper from "./Wrapper";
import LottiePlayer from "./common/LottiePlayer";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const techStack = [
  { Icon: FaJs,         label: "JavaScript", color: "#f7df1e" },
  { Icon: FaNodeJs,     label: "Node.js",    color: "#6cc24a" },
  { Icon: FaReact,      label: "React",      color: "#61dafb" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  { Icon: FaPython,     label: "Python",     color: "#4584b6" },
  { Icon: SiTailwindcss,label: "Tailwind",   color: "#38bdf8" },
  { Icon: FaAws,        label: "AWS",        color: "#f97316" },
  { Icon: FaDatabase,   label: "PostgreSQL", color: "#a0aec0" },
];

const navLinks = [
  { Icon: FaHouse,    label: "Home",      href: null,                                  action: "scrollTop" },
  { Icon: FaGithub,   label: "GitHub",    href: "https://github.com/Nigiddy"                               },
  { Icon: FaLinkedin, label: "LinkedIn",  href: "https://www.linkedin.com/in/gideonpapa"                   },
  { Icon: SiX,        label: "Twitter",   href: "https://x.com/niGiddy"                                    },
  { Icon: FaWhatsapp, label: "WhatsApp",  href: "https://wa.me/254775551019"                               },
  { Icon: FaInstagram,label: "Instagram", href: "https://www.instagram.com/ni.giddy"                       },
];

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function HeroSection() {
  // Lazily fetch animation data — keeps it out of the JS bundle
  const [laptopAnim, setLaptopAnim] = useState(null);

  useEffect(() => {
    fetch("/animations/laptop.json")
      .then((r) => r.json())
      .then(setLaptopAnim);
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
      >
        {/* Background ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] opacity-20 dark:opacity-10 -translate-x-1/3 -translate-y-1/3"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 dark:opacity-8 translate-x-1/4 translate-y-1/4"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 65%)" }}
        />

        {/* Grid overlay */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <Wrapper className="relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Text ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div
              className="flex items-center gap-2 animate-fadeSlideUp"
            >
              <span className="h-px w-8 bg-orange-500" />
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
            <p
              className="text-zinc-700 dark:text-zinc-400 text-fluid-body leading-relaxed max-w-md animate-fadeSlideUp [animation-delay:200ms]"
            >
              I build high-performance, conversion-focused web products—from seamless M-Pesa integrations to scalable multi-tenant SaaS. A Full-Stack Developer and UI/UX Designer based in Nairobi, shipping world-class digital experiences globally.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mt-2 animate-fadeSlideUp [animation-delay:300ms]"
            >
              <a
                href="#projects"
                className="
                  px-5 py-2.5 rounded-xl text-sm font-semibold text-white
                  bg-orange-500 hover:bg-orange-600
                  shadow-lg shadow-orange-500/20 hover:shadow-orange-600/30
                  transition-all duration-200 hover:scale-[1.02]
                "
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="
                  px-5 py-2.5 rounded-xl text-sm font-semibold
                  text-zinc-700 hover:text-black
                  dark:text-zinc-300 dark:hover:text-white
                  border border-zinc-300 hover:border-zinc-500
                  dark:border-zinc-700 dark:hover:border-zinc-500
                  bg-white/50 hover:bg-white
                  dark:bg-zinc-900 dark:hover:bg-zinc-800
                  transition-all duration-200
                "
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* ── Lottie + floating tech icons ── */}
          <motion.div
            className="flex justify-center items-center relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Glowing ring behind Lottie */}
            <div
              aria-hidden
              className="absolute w-64 h-64 rounded-full opacity-30 dark:opacity-20 blur-2xl"
              style={{ background: "radial-gradient(circle, #f97316, #ec4899)" }}
            />
            <LottiePlayer
              animationData={laptopAnim}
              loop
              autoPlay
              className="w-64 sm:w-80 relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </div>
        </Wrapper>

        {/* ── Tech Stack ── */}
        <Wrapper className="relative z-10 mt-20 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.2em] whitespace-nowrap">
              Tech Stack
            </p>
            <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(({ Icon, label, color }, i) => (
              <motion.div
                key={label}
                title={label}
                whileHover={{ y: -4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  flex items-center gap-2 px-4 py-2.5 rounded-xl
                  bg-white/80 dark:bg-zinc-900 
                  border border-zinc-200 dark:border-zinc-800 
                  hover:border-zinc-400 dark:hover:border-zinc-600
                  transition-colors duration-200 cursor-default
                  group
                "
              >
                <Icon className="text-lg transition-colors duration-200" style={{ color }} />
                <span className="text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white text-xs font-mono transition-colors duration-200">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </Wrapper>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-400 dark:from-zinc-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── FLOATING DOCK ─── */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="
          flex items-center gap-1 px-4 py-2.5
          bg-white/80 dark:bg-zinc-900/80 
          backdrop-blur-md
          border border-zinc-200/80 dark:border-zinc-800/80
          rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40
        ">
          {/* Divider after Home */}
          {navLinks.map(({ Icon, label, href, action }, i) => (
            <div key={label} className="flex items-center">
              <DockIcon Icon={Icon} label={label} href={href} action={action} />
              {i === 0 && (
                <span className="mx-2 h-5 w-px bg-zinc-300 dark:bg-zinc-700/60 rounded-full" />
              )}
            </div>
          ))}

          {/* Divider + theme toggle */}
          <span className="mx-2 h-5 w-px bg-zinc-300 dark:bg-zinc-700/60 rounded-full" />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}