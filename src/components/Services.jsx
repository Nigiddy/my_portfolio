"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, MonitorSmartphone, Server, Brush, ArrowRight } from "lucide-react";
import ServiceCard from "./services/ServiceCard";
import ServiceModal from "./services/ServiceModal";
import Wrapper from "./Wrapper";
import GridOverlay from "./common/GridOverlay";
import SectionHeading from "./common/SectionHeading";

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
    accent: "#2563eb",          // blue-600
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
    accent: "#93c5fd",
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
    accent: "#60a5fa",
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
    accent: "#bfdbfe",
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
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-24"
    >
      <GridOverlay />

      <Wrapper className="relative z-10 max-w-5xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Services"
          subtitle="From idea to deployed product — I cover the full spectrum. Click any card to see what's included."
          className="mb-12 sm:mb-16"
        />

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
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl"
        >
          <div>
            <p className="text-gray-900 font-semibold text-sm">Have a project in mind?</p>
            <p className="text-gray-500 text-xs mt-0.5">Let's talk scope, timeline, and budget. </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get a Free Estimate
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Wrapper>

      {/* Modal */}
      <AnimatePresence>
        {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}