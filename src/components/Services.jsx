"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Brush, ArrowRight } from "lucide-react";
import ServiceCard from "./services/ServiceCard";
import ServiceModal from "./services/ServiceModal";

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
            <p className="text-zinc-500 text-xs mt-0.5">Let's talk scope, timeline, and budget. </p>
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