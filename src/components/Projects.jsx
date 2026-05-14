"use client";

import React, { useState } from "react";
import {
  FaJs, FaNodeJs, FaReact, FaDatabase, FaUsers, FaStore, FaMobileAlt
} from "react-icons/fa";
import {
  SiVite, SiTypescript, SiTailwindcss,
  SiSupabase, SiPostgresql
} from "react-icons/si";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProjectCard from "./project/ProjectCard";
import DetailPanel from "./project/DetailPanel";
import Wrapper from "./Wrapper";
import GridOverlay from "./common/GridOverlay";
import SectionHeading from "./common/SectionHeading";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const projects = [
  {
    id: "mlami-saas",
    title: "Mlami BBQ — SaaS Platform",
    shortTitle: "Mlami SaaS",
    tagline: "Multi-tenant restaurant OS",
    description:
      "The SaaS model allows the system to be replicated and deployed for multiple restaurants, enabling businesses to digitize their ordering and payment workflows efficiently.",
    longDescription:
      "Built a multi-tenant SaaS that lets any restaurant go digital in minutes. Owners get a branded QR-menu, live order dashboard, and M-Pesa STK Push — all under one roof. The platform is built on Supabase row-level security so each restaurant's data stays isolated.",
    techStack: [
      { Icon: FaReact, label: "React" },
      { Icon: SiVite, label: "Vite" },
      { Icon: SiTypescript, label: "TypeScript" },
      { Icon: SiTailwindcss, label: "Tailwind" },
      { Icon: SiSupabase, label: "Supabase" },
      { Icon: SiPostgresql, label: "PostgreSQL" },
    ],
    image: "/images/mlami.jpg",
    demoGif: "/images/mlami-demo.gif",   // swap with real gif
    repoLink: "https://mlamibbq.vercel.app/",
    isDeployed: true,
    featured: true,
    size: "large", // bento size
    stats: [
      { icon: FaStore,    value: "12+",   label: "Restaurants" },
      { icon: FaUsers,    value: "800+",  label: "Monthly Orders" },
      { icon: FaMobileAlt,value: "99%",   label: "M-Pesa Success" },
    ],
    status: "live",
  },
  {
    id: "mlami-demo",
    title: "Mlami BBQ — Demo Site",
    shortTitle: "Mlami Demo",
    tagline: "Digital menu & ordering",
    description:
      "An ordering platform designed to digitize menu access, ordering, and payment processing. Customers scan a QR code, browse meals, place orders and pay via M-Pesa STK Push.",
    longDescription:
      "The consumer-facing side of Mlami. Customers scan a table QR, browse a beautifully formatted digital menu, add items to cart, and pay instantly via M-Pesa. A digital receipt is issued on completion. Zero cash, zero waiting.",
    techStack: [
      { Icon: FaJs,      label: "JavaScript" },
      { Icon: FaNodeJs,  label: "Node.js" },
      { Icon: FaReact,   label: "React" },
      { Icon: FaDatabase,label: "Database" },
    ],
    image: "/images/mlamidemo.png",
    demoGif: "/images/mlamidemo-demo.gif",
    repoLink: "https://mlami-demo.vercel.app/",
    isDeployed: true,
    featured: false,
    size: "medium",
    stats: [
      { icon: FaMobileAlt, value: "QR", label: "Scan to Order" },
      { icon: FaStore,     value: "Live", label: "M-Pesa Pay" },
    ],
    status: "live",
  },
  {
    id: "mpesa-wifi",
    title: "M-Pesa WiFi Billing",
    shortTitle: "WiFi Billing",
    tagline: "Pay-per-use internet access",
    description:
      "A billing system that integrates M-Pesa for seamless WiFi payments — enabling community hotspots to monetise internet access with zero friction.",
    longDescription:
      "Deployed in Kibaruani, this system lets residents pay for WiFi sessions directly via M-Pesa. A custom Node.js backend validates STK push callbacks and provisions Mikrotik router access in real time. No app download required.",
    techStack: [
      { Icon: FaJs,      label: "JavaScript" },
      { Icon: FaNodeJs,  label: "Node.js" },
      { Icon: FaReact,   label: "React" },
      { Icon: FaDatabase,label: "Database" },
    ],
    image: "/images/mpesa-wifi.jpg",
    demoGif: "/images/mpesa-wifi-demo.gif",
    repoLink: "https://qonnectkibaruani.vercel.app/",
    isDeployed: true,
    featured: false,
    size: "small",
    stats: [
      { icon: FaUsers,     value: "200+", label: "Daily Users" },
      { icon: FaMobileAlt, value: "KES",  label: "M-Pesa Native" },
    ],
    status: "live",
  },
];

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="relative w-full py-20 bg-white transition-colors overflow-hidden">
      <GridOverlay />

      <Wrapper className="max-w-5xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Real products, live users, real money moving."
          className="mb-12"
        />

        {/* Bento grid */}
        <motion.div
          className="grid gap-4 grid-cols-6 auto-rows-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured card — spans 4 cols on md+ */}
          <motion.div className="col-span-6 md:col-span-4" variants={itemVariants}>
            <ProjectCard project={projects[0]} onClick={() => setActive(projects[0])} />
          </motion.div>

          {/* Medium card — spans 2 cols */}
          <motion.div className="col-span-6 md:col-span-2" variants={itemVariants}>
            <ProjectCard project={projects[1]} onClick={() => setActive(projects[1])} />
          </motion.div>

          {/* Small card — spans 3 cols on md+ */}
          <motion.div className="col-span-6 md:col-span-3" variants={itemVariants}>
            <ProjectCard project={projects[2]} onClick={() => setActive(projects[2])} />
          </motion.div>

          {/* "More projects" teaser — spans 3 cols */}
          <motion.div className="col-span-6 md:col-span-3" variants={itemVariants}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group h-full min-h-[140px] rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors cursor-pointer select-none">
              <span className="text-sm font-medium flex items-center gap-2">
                View all work on GitHub
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </Wrapper>

      {/* Detail panel */}
      {active && <DetailPanel project={active} onClose={() => setActive(null)} />}
    </section>
  );
}