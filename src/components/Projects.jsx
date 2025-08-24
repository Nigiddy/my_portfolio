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

  // Template for adding future projects 
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % projects.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length),
    trackMouse: true,
  });

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const project = projects[current];

  return (
    <section className="w-full py-12 bg-white dark:bg-black transition-colors">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center">Projects</h2>
        <div {...handlers} className="mt-8 flex justify-center items-center">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Project: ${project.title}. ${project.isDeployed ? 'View Demo Site' : 'View on GitHub'}`}
            className="group block bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-lg"
            tabIndex={0}
          >
            <div className="w-full h-40 relative overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={160}
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
            <div className="flex items-center gap-3 mt-3">
              {project.techStack.map((Icon, idx) => (
                <Icon key={idx} className="text-2xl text-gray-700 dark:text-gray-300" />
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-blue-500 dark:text-blue-400 font-medium">
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
          </a>
        </div>
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? 'bg-blue-500 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-700'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
