"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Brush, ArrowRight, X } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  {
    Icon: Code2,
    title: "Full-Stack Development",
    tagline: "End-to-end web engineering",
    description:
      "Building scalable, production-ready web applications from database to UI. I own the full stack — architecture decisions, API design, auth, deployments, and everything in between.",
    bullets: [
      "Next.js, React, Node.js",
      "REST & GraphQL APIs",
      "Auth, payments & integrations",
      "CI/CD & cloud deployments",
    ],
    accent: "#f97316",          // orange
    size: "large",              // bento sizing
    stat: { value: "3+", label: "SaaS products shipped" },
  },
  {
    Icon: MonitorSmartphone,
    title: "Responsive Web Design",
    tagline: "Pixel-perfect on every screen",
    description:
      "Crafting high-performance websites that look and feel native on any device. Performance, accessibility, and delight — all three, not a trade-off.",
    bullets: [
      "Mobile-first layouts",
      "Tailwind CSS & Framer Motion",
      "Core Web Vitals optimised",
    ],
    accent: "#22d3ee",          // cyan
    size: "medium",
    stat: { value: "100ms", label: "avg load target" },
  },
  {
    Icon: Server,
    title: "API Development",
    tagline: "Robust, secure, documented",
    description:
      "Designing and implementing APIs that other systems can rely on — versioned, rate-limited, and well-documented from day one.",
    bullets: [
      "RESTful & webhook design",
      "M-Pesa STK Push integration",
      "PostgreSQL & Supabase",
    ],
    accent: "#a78bfa",          // violet
    size: "medium",
    stat: { value: "99%", label: "uptime target" },
  },
  {
    Icon: Brush,
    title: "UI/UX Design",
    tagline: "Interfaces people actually enjoy",
    description:
      "Turning complex requirements into clean, intuitive interfaces. From wireframe to polished component — I bridge design and engineering.",
    bullets: [
      "Figma prototyping",
      "Design systems & tokens",
      "Accessibility (WCAG 2.1)",
    ],
    accent: "#f472b6",          // pink
    size: "large",
    stat: { value: "4.9★", label: "avg client rating" },
  },
];

/* ─────────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────────── */
function ServiceCard({ service, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`${service.title} — click for details`}
      className="
        group relative flex flex-col cursor-pointer h-full
        bg-zinc-900/70 border border-zinc-800/70
        rounded-2xl overflow-hidden
        hover:border-zinc-700/80
        transition-all duration-400
        hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40
        focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
      "
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${service.accent}18 0%, transparent 60%)`,
        }}
      />

      {/* Top accent bar */}
      <div
        className="h-[3px] w-full flex-shrink-0 transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(90deg, ${service.accent}, transparent)`
            : "transparent",
        }}
      />

      <div className="flex flex-col flex-1 p-6 gap-4 relative z-10">

        {/* Icon + tagline */}
        <div className="flex items-start justify-between">
          <div
            className="w-11 h-11 flex items-center justify-center rounded-xl transition-colors duration-300"
            style={{ background: `${service.accent}18` }}
          >
            <service.Icon
              className="w-5 h-5 transition-colors duration-300"
              style={{ color: service.accent }}
            />
          </div>

          {/* Stat badge */}
          <div className="text-right">
            <p className="text-lg font-black text-white leading-none">{service.stat.value}</p>
            <p className="text-[10px] font-mono text-zinc-600 leading-tight">{service.stat.label}</p>
          </div>
        </div>

        {/* Title + tagline */}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: service.accent }}>
            {service.tagline}
          </p>
          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-white transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Description — only show on large cards by default */}
        <p className={`text-sm text-zinc-500 leading-relaxed ${service.size === "large" ? "line-clamp-2" : "line-clamp-3"}`}>
          {service.description}
        </p>

        {/* Bullet previews */}
        <ul className="flex flex-col gap-1.5 mt-auto">
          {service.bullets.slice(0, 2).map((b, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: service.accent }} />
              {b}
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className="flex items-center gap-1 text-xs font-mono mt-2 transition-colors duration-200"
          style={{ color: hovered ? service.accent : "#52525b" }}>
          <span>Learn more</span>
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DETAIL MODAL
───────────────────────────────────────────── */
function ServiceModal({ service, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Accent header strip */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }} />

        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top left, ${service.accent}14 0%, transparent 55%)` }} />

        <div className="relative z-10 p-7 flex flex-col gap-5">

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{ background: `${service.accent}20` }}>
                <service.Icon className="w-6 h-6" style={{ color: service.accent }} />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: service.accent }}>
                  {service.tagline}
                </p>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>

          {/* What's included */}
          <div>
            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-3">What's included</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.accent }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Stat */}
          <div className="flex items-center gap-4 px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl">
            <div>
              <p className="text-2xl font-black text-white">{service.stat.value}</p>
              <p className="text-xs text-zinc-500 font-mono">{service.stat.label}</p>
            </div>
            <div className="h-10 w-px bg-zinc-800" />
            <p className="text-xs text-zinc-500 leading-relaxed">
              Track record backed by real projects and satisfied clients.
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] shadow-lg"
            style={{ background: service.accent, boxShadow: `0 8px 24px ${service.accent}30` }}
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function ServicesPage() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="relative w-full py-24 bg-zinc-950 overflow-hidden">

      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, #f97316 0%, transparent 70%)" }} />

      {/* Grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-orange-500" />
            <p className="text-xs font-mono text-orange-400 uppercase tracking-[0.2em]">What I Do</p>
          </div>
          <h2 className="text-5xl font-black text-white tracking-tight">Services</h2>
          <p className="mt-4 text-zinc-500 text-base max-w-lg leading-relaxed">
            From idea to deployed product — I cover the full spectrum.
            Click any card to see what's included.
          </p>
        </motion.div>

        {/* Bento grid — 2 large + 2 medium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 auto-rows-fr">

          {/* Full-Stack — wide */}
          <div className="lg:col-span-3">
            <ServiceCard service={services[0]} index={0} onClick={() => setActive(services[0])} />
          </div>

          {/* Responsive Web — narrow */}
          <div className="lg:col-span-2">
            <ServiceCard service={services[1]} index={1} onClick={() => setActive(services[1])} />
          </div>

          {/* API — narrow */}
          <div className="lg:col-span-2">
            <ServiceCard service={services[2]} index={2} onClick={() => setActive(services[2])} />
          </div>

          {/* UI/UX — wide */}
          <div className="lg:col-span-3">
            <ServiceCard service={services[3]} index={3} onClick={() => setActive(services[3])} />
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
        >
          <div>
            <p className="text-white font-semibold text-sm">Have a project in mind?</p>
            <p className="text-zinc-500 text-xs mt-0.5">Let's talk scope, timeline, and budget — no strings attached.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-400 shadow-lg shadow-orange-500/20 hover:shadow-orange-400/30 transition-all duration-200 hover:scale-[1.02]"
          >
            Get a Free Estimate
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}