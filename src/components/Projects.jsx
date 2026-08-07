"use client";

import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaNodeJs, FaReact, FaJs, FaDatabase } from "react-icons/fa";
import { SiPostgresql, SiTypescript, SiTailwindcss, SiSupabase, SiVite } from "react-icons/si";
import { HiCheckCircle } from "react-icons/hi2";

// ─── Data ────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "mpesa-wifi",
    title: "WiFi Billing System",
    category: "Fintech · Hotspot Automation",
    subtitle:
      "Automated hotspot billing platform — customers pay via M-Pesa STK Push and get internet access instantly.",
    image: "/images/mpesa-wifi.jpg",
    features: [
      "MikroTik Integration",
      "M-Pesa STK Push",
      "Time-Based Packages",
      "Admin Dashboard",
      "User Management",
      "Real-Time Payment Updates",
    ],
    techStack: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "React", Icon: FaReact },
      { name: "JavaScript", Icon: FaJs },
      { name: "MySQL", Icon: FaDatabase },
    ],
    primaryCta: { label: "View Live Demo", href: "https://qonnectkibaruani.vercel.app/" },
  },
  {
    id: "mlami-bbq",
    title: "Mlami BBQ",
    category: "F&B · Restaurant Tech",
    subtitle:
      "Full-stack restaurant platform — customers scan a QR code for Menu, order, and pay via M-Pesa STK Push and receive a digital receipt. Admins manage menu, orders, and reservations in real-time.",
    image: "/images/mlami.jpg",
    features: [
      "QR Code Ordering",
      "M-Pesa Checkout",
      "Live Menu Management",
      "Role-Based Admin (Finance / Ops)",
      "Reservation & Booking System",
      "Digital Receipts",
    ],
    techStack: [
      { name: "React", Icon: FaReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "TailwindCSS", Icon: SiTailwindcss },
      { name: "Supabase", Icon: SiSupabase },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
    primaryCta: { label: "View Live Demo", href: "https://mlami-demo.vercel.app/" },
  },
  {
  id: "milkia",
  title: "MILKIA Car Rental",
  category: "Travel & Mobility · Car Rental",
  subtitle:
    "Modern car rental platform that allows customers to browse the fleet, view detailed vehicle galleries, compare features, and reserve premium vehicles through a seamless, mobile-first experience. Built with a focus on speed, trust, and a premium user experience.",
  image: "/images/milkia.png",
  features: [
    "Premium Fleet Showcase",
    "Vehicle Gallery & Specifications",
    "Responsive Mobile Experience",
    "Customer Reviews & Testimonials",
  ],
  techStack: [
    { name: "React", Icon: FaReact },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "TailwindCSS", Icon: SiTailwindcss },
    { name: "Vite", Icon: SiVite },
  ],
  primaryCta: {
    label: "View Live Demo",
    href: "https://milkia-gamma.vercel.app/",
  },
},
];

// ─── Sub-components ───────────────────────────────────────────────────────────


const TechBadge = ({ label, Icon }) => (
  <span 
    aria-label={label}
    title={label}
    className="p-1.5 sm:p-2 text-base sm:text-lg flex items-center justify-center rounded-full bg-blue-50/60 dark:bg-blue-900/20 text-blue-500 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/40 backdrop-blur-sm hover:scale-110 hover:text-blue-600 dark:hover:text-blue-200 transition-all duration-200 cursor-help"
  >
    <Icon />
  </span>
);

const CTAButton = ({
  href, label, icon, variant,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
      variant === "primary"
        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-sm hover:shadow-md hover:shadow-blue-500/30"
        : "bg-transparent text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500"
    }`}
  >
    {label}
    <span className="transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
      {icon}
    </span>
  </a>
);

// ─── Card ─────────────────────────────────────────────────────────────────────

const ProjectCard = ({ project, reverse }) => (
  <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
    {/* Image */}
    <div className="w-full lg:w-1/2 group relative">
      <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl blur-xl opacity-15 lg:group-hover:opacity-35 transition duration-700" />
      <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-gray-900">
        <div className="absolute top-3 left-3 z-10">
        </div>
        <div className="aspect-video lg:aspect-[4/3] relative">
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
    <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-6">
      <div>
        <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-500 dark:text-blue-400 mb-2">
          {project.category}
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-[2.15rem] font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Features */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
        {project.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
            <HiCheckCircle className="text-blue-500 shrink-0 text-sm sm:text-base" />
            {f}
          </li>
        ))}
      </ul>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 pt-1 lg:pt-0">
        {project.techStack.map((t) => (
          <TechBadge key={t.name} label={t.name} Icon={t.Icon} />
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 pt-2 lg:pt-1">
        <CTAButton 
          href={project.primaryCta.href} 
          label={project.primaryCta.label} 
          icon={<FaExternalLinkAlt className="text-[10px] sm:text-xs" />} 
          variant="primary" 
        />
        {project.secondaryCta && (
          <CTAButton 
            href={project.secondaryCta.href} 
            label={project.secondaryCta.label} 
            icon={<FaGithub className="text-xs sm:text-sm" />} 
            variant="secondary" 
          />
        )}
      </div>
    </div>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 lg:py-24 bg-white-50 dark:bg-[#0a0a0a] transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/[0.04] dark:bg-grid-slate-800/[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Production-ready applications built to solve real business problems.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-16 lg:space-y-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}