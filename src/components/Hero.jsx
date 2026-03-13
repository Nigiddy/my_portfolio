"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin, FaGithub, FaWhatsapp, FaInstagram,
  FaJs, FaNodeJs, FaReact, FaPython, FaAws, FaDatabase,
} from "react-icons/fa";
import { SiX, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaHouse } from "react-icons/fa6";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import laptopAnimation from "../animations/laptop.json";

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
   DOCK ICON
───────────────────────────────────────────── */
function DockIcon({ Icon, label, href, action }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (action === "scrollTop") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const inner = (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={!href ? handleClick : undefined}
      whileHover={{ y: -6, scale: 1.25 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="relative flex flex-col items-center cursor-pointer"
    >
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.15 }}
        className="
          absolute -top-9 left-1/2 -translate-x-1/2
          bg-zinc-800 border border-zinc-700 text-white text-[10px]
          font-mono uppercase tracking-widest px-2 py-1 rounded-md
          whitespace-nowrap pointer-events-none
        "
      >
        {label}
      </motion.span>

      <div className={`
        w-9 h-9 flex items-center justify-center rounded-xl
        transition-colors duration-200
        ${hovered ? "bg-orange-500/20 text-orange-400" : "text-zinc-400"}
      `}>
        <Icon className="text-lg" />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {inner}
      </a>
    );
  }
  return inner;
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function HeroSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes orbit {
          from { transform: rotate(0deg)   translateX(90px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }
        .cursor {
          display: inline-block;
          width: 3px;
          height: 1.1em;
          background: #f97316;
          margin-left: 3px;
          vertical-align: middle;
          animation: cursorBlink 1s step-end infinite;
          border-radius: 2px;
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .name-gradient {
          background: linear-gradient(90deg, #f97316, #ec4899, #f97316);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-zinc-950 overflow-hidden"
      >
        {/* Background ambient glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-[600px] h-[600px] opacity-10 -translate-x-1/3 -translate-y-1/3"
          style={{ background: "radial-gradient(circle, #f97316 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] opacity-8 translate-x-1/4 translate-y-1/4"
          style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 65%)" }}
        />

        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Text ── */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div
              className="flex items-center gap-2"
              style={{ animation: "fadeSlideUp 0.5s ease 0.1s both" }}
            >
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-mono text-orange-400 uppercase tracking-[0.2em]">
                Full-Stack Developer & UI/UX Designer
              </span>
            </div>

            {/* Name */}
            <div style={{ animation: "fadeSlideUp 0.5s ease 0.2s both" }}>
              <p className="text-zinc-500 text-sm font-mono mb-1">Hey there 👋 I'm</p>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
                <span className="name-gradient">Gideon</span>
                <br />
                <span className="text-white">Papa</span>
                <span className="cursor" aria-hidden />
              </h1>
            </div>

            {/* Bio */}
            <p
              className="text-zinc-400 text-base leading-relaxed max-w-md"
              style={{ animation: "fadeSlideUp 0.5s ease 0.3s both" }}
            >
              I build fast, beautiful, and revenue-generating web products —
              from M-Pesa integrations to multi-tenant SaaS platforms.
              Based in Nairobi, shipping globally.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mt-2"
              style={{ animation: "fadeSlideUp 0.5s ease 0.4s both" }}
            >
              <a
                href="#projects"
                className="
                  px-5 py-2.5 rounded-xl text-sm font-semibold text-white
                  bg-orange-500 hover:bg-orange-400
                  shadow-lg shadow-orange-500/20 hover:shadow-orange-400/30
                  transition-all duration-200 hover:scale-[1.02]
                "
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="
                  px-5 py-2.5 rounded-xl text-sm font-semibold
                  text-zinc-300 hover:text-white
                  border border-zinc-700 hover:border-zinc-500
                  bg-zinc-900 hover:bg-zinc-800
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
              className="absolute w-64 h-64 rounded-full opacity-20 blur-2xl"
              style={{ background: "radial-gradient(circle, #f97316, #ec4899)" }}
            />
            <Lottie
              animationData={laptopAnimation}
              loop
              autoPlay
              className="w-64 sm:w-80 relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </div>

        {/* ── Tech Stack ── */}
        <motion.div
          className="relative z-10 mt-20 w-full max-w-5xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px flex-1 bg-zinc-800" />
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] whitespace-nowrap">
              Tech Stack
            </p>
            <span className="h-px flex-1 bg-zinc-800" />
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
                // @ts-ignore
                style={{ animationDelay: `${0.6 + i * 0.05}s` }}
                className="
                  flex items-center gap-2 px-4 py-2.5 rounded-xl
                  bg-zinc-900 border border-zinc-800 hover:border-zinc-600
                  transition-colors duration-200 cursor-default
                  group
                "
              >
                <Icon className="text-lg transition-colors duration-200" style={{ color }} />
                <span className="text-zinc-400 group-hover:text-white text-xs font-mono transition-colors duration-200">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── FLOATING DOCK ─── */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="
          flex items-center gap-1 px-4 py-2.5
          bg-zinc-900/80 backdrop-blur-md
          border border-zinc-800/80
          rounded-2xl shadow-2xl shadow-black/40
        ">
          {/* Divider after Home */}
          {navLinks.map(({ Icon, label, href, action }, i) => (
            <div key={label} className="flex items-center">
              <DockIcon Icon={Icon} label={label} href={href} action={action} />
              {i === 0 && (
                <span className="mx-2 h-5 w-px bg-zinc-700/60 rounded-full" />
              )}
            </div>
          ))}

          {/* Divider + theme toggle */}
          <span className="mx-2 h-5 w-px bg-zinc-700/60 rounded-full" />
          <motion.button
            whileHover={{ y: -4, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark"
              ? <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.42-1.41l.71-.71zm-9.85 0l.71.71A1 1 0 115.67 5.9l-.71-.71a1 1 0 011.41-1.41zM10 6a4 4 0 100 8 4 4 0 000-8zm-8 4a1 1 0 011-1h1a1 1 0 010 2H3a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 010 2h-1a1 1 0 01-1-1zm-2.93 4.07a1 1 0 011.42 0l.7.71a1 1 0 01-1.41 1.41l-.71-.71a1 1 0 010-1.41zm-9.9 0a1 1 0 011.41 1.41l-.7.71a1 1 0 01-1.42-1.41l.71-.71zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"/></svg>
              : <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            }
          </motion.button>
        </div>
      </div>
    </>
  );
}