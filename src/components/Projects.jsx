"use client";

import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi2";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "mpesa-wifi",
    title: "WiFi Billing System",
    category: "Fintech · Hotspot Automation",
    subtitle:
      "Automated hotspot billing platform — customers pay via M-Pesa STK Push and get internet access instantly. Zero manual intervention.",
    status: "Live",
    statusColor: "bg-emerald-500",
    image: "/images/mpesa-wifi.jpg",
    features: [
      "MikroTik Integration",
      "M-Pesa STK Push",
      "Time-Based Packages",
      "Admin Dashboard",
      "User Management",
      "Real-Time Payment Updates",
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "Daraja API", "MikroTik API"],
    primaryCta: { label: "View Live Demo", href: "https://qonnectkibaruani.vercel.app/" },
  },
  {
    id: "mlami-bbq",
    title: "Mlami BBQ",
    category: "F&B · Restaurant Tech",
    subtitle:
      "Full-stack restaurant platform replacing paper menus — customers scan a QR code, order, and pay via M-Pesa from their table.",
    status: "Live",
    statusColor: "bg-blue-500",
    image: "/images/mlami.jpg",
    features: [
      "QR Code Ordering",
      "M-Pesa Checkout",
      "Live Menu Management",
      "Role-Based Admin (Finance / Ops)",
      "Reservation & Booking System",
      "Digital Receipts",
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL"],
    primaryCta: { label: "View Live Demo", href: "https://mlami-demo.vercel.app/" },
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StatusBadge = ({ label, color }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase text-white backdrop-blur-md border border-white/20 shadow-sm ${color}/90`}>
    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
    {label}
  </span>
);

const TechBadge = ({ label }) => (
  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50/60 dark:bg-blue-900/20 text-blue-500 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/40">
    {label}
  </span>
);

const CTAButton = ({
  href, label, icon, variant,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
      variant === "primary"
        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
    }`}
  >
    {label}
    {icon}
  </a>
);

// ─── Card ─────────────────────────────────────────────────────────────────────

const ProjectCard = ({ project, reverse }) => (
  <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
    {/* Image */}
    <div className="w-full lg:w-1/2 group relative">
      <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-15 group-hover:opacity-35 transition duration-700" />
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-gray-900">
        <div className="absolute top-3 left-3 z-10">
          <StatusBadge label={project.status} color={project.statusColor} />
        </div>
        <div className="aspect-[4/3] relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          {/* Subtle bottom gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <div>
        <p className="text-xs font-bold tracking-widest uppercase text-blue-500 dark:text-blue-400 mb-2">
          {project.category}
        </p>
        <h3 className="text-3xl md:text-[2.15rem] font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Features */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
        {project.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300 font-medium">
            <HiCheckCircle className="text-blue-500 shrink-0 text-base" />
            {f}
          </li>
        ))}
      </ul>

      {/* Tech */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((t) => <TechBadge key={t} label={t} />)}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 pt-1">
        <CTAButton href={project.primaryCta.href} label={project.primaryCta.label} icon={<FaExternalLinkAlt className="text-xs" />} variant="primary" />
        {project.secondaryCta && (
          <CTAButton href={project.secondaryCta.href} label={project.secondaryCta.label} icon={<FaGithub className="text-sm" />} variant="secondary" />
        )}
      </div>
    </div>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/[0.04] dark:bg-grid-slate-800/[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            My <span className="text-blue-500 dark:text-blue-500">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Production-ready applications built to solve real business problems and ship real outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
