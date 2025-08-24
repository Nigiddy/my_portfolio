"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaJs, FaNodeJs, FaReact, FaPython, FaAws, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { SiVite, SiTypescript, SiTailwindcss, SiSupabase, SiPostgresql } from "react-icons/si"; 
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const projects = [
  {
    title: "Mpesa-Based WiFi Billing System",
    description: "A billing system that integrates Mpesa for seamless WiFi payments.",
    techStack: [FaJs, FaNodeJs, FaReact, FaDatabase],
    image: "/images/mpesa-wifi.jpg",
    repoLink: "https://github.com/Nigiddy/Mpesa_Based-WiFi-Billing-System",
    isDeployed: false
  },
  {
    title: "Mlami BBQ - Modern Restaurant Website",
    description: "A modern BBQ restaurant management system with M-Pesa STK Push payment integration.",
    techStack: [FaReact, SiVite, SiTypescript, SiTailwindcss, SiSupabase, SiPostgresql],
    image: "/images/mlami.jpg",
    repoLink: "https://mlamibbq.vercel.app/",
    isDeployed: true
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % projects.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length),
    trackMouse: true,
  });

  // Auto-swipe every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const project = projects[current];

  return (
    <section className="w-full py-16 bg-white dark:bg-black transition-colors">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Projects
        </h2>

        <div {...handlers} className="mt-12 flex justify-center items-center">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Project: ${project.title}. ${project.isDeployed ? 'View Demo Site' : 'View on GitHub'}`}
            className="group block w-full max-w-2xl rounded-2xl overflow-hidden
              bg-white/20 dark:bg-black/30 backdrop-blur-lg
              shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30"
          >
            {/* Image section */}
            <div className="w-full h-56 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={224}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack icons */}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {project.techStack.map((Icon, idx) => (
                  <Icon key={idx} className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-blue-400 transition-colors" />
                ))}
              </div>

              {/* Link */}
              <div className="mt-6 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                {project.isDeployed ? (
                  <>
                    <FaGlobe /> <span>View Demo Site</span>
                  </>
                ) : (
                  <>
                    <FaGithub /> <span>View on GitHub</span>
                  </>
                )}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}