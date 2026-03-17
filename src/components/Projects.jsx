"use client";

import React, { useState } from "react";
import {
  FaJs, FaNodeJs, FaReact, FaDatabase, FaUsers, FaStore, FaMobileAlt
} from "react-icons/fa";
import {
  SiVite, SiTypescript, SiTailwindcss,
  SiSupabase, SiPostgresql
} from "react-icons/si";

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

  return (
    <section id="projects" className="relative w-full py-20 bg-zinc-950 transition-colors overflow-hidden">
      <GridOverlay />

      <Wrapper className="max-w-5xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="Real products, live users, real money moving."
          className="mb-12"
        />

        {/* Bento grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "auto",
          }}
        >
          {/* Featured card — spans 4 cols on md+ */}
          <div
            className="col-span-6 md:col-span-4"
            style={{ animation: "cardReveal 0.5s ease 0.1s both" }}
          >
            <ProjectCard project={projects[0]} onClick={() => setActive(projects[0])} />
          </div>

          {/* Medium card — spans 2 cols */}
          <div
            className="col-span-6 md:col-span-2"
            style={{ animation: "cardReveal 0.5s ease 0.2s both" }}
          >
            <ProjectCard project={projects[1]} onClick={() => setActive(projects[1])} />
          </div>

          {/* Small card — spans 3 cols on md+ */}
          <div
            className="col-span-6 md:col-span-3"
            style={{ animation: "cardReveal 0.5s ease 0.3s both" }}
          >
            <ProjectCard project={projects[2]} onClick={() => setActive(projects[2])} />
          </div>

          {/* "More coming" teaser — spans 3 cols */}
          <div
            className="col-span-6 md:col-span-3"
            style={{ animation: "cardReveal 0.5s ease 0.4s both" }}
          >
            <div className="h-full min-h-[140px] rounded-2xl border border-dashed border-zinc-700/50 flex flex-col items-center justify-center gap-2 text-zinc-600 hover:text-zinc-400 hover:border-zinc-600 transition-colors cursor-default select-none">
              <span className="text-3xl">✦</span>
              <span className="text-sm font-medium">More coming soon</span>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Detail panel */}
      {active && <DetailPanel project={active} onClose={() => setActive(null)} />}
    </section>
  );
}