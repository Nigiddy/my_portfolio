"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaGlobe, FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";

/** Expanded detail panel / drawer */
export default function DetailPanel({ project, onClose }) {
  const overlayRef = useRef(null);

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-gray-900/50 backdrop-blur-sm p-4"
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      <div
        className="
          relative w-full max-w-2xl max-h-[90vh] overflow-y-auto
          bg-white border border-gray-200 rounded-2xl shadow-2xl
          flex flex-col
        "
        style={{ animation: "slideUp 0.3s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {/* Header image */}
        <div className="relative w-full h-52 flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 text-gray-500 transition-colors shadow-sm"
            aria-label="Close panel"
          >
            <FaXmark className="text-sm" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-5 right-14">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-1">{project.tagline}</p>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">{project.title}</h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col gap-6">
          <p className="text-gray-600 leading-relaxed text-sm">{project.longDescription}</p>

          {/* Proof of Work stats */}
          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Proof of Work</h4>
            <div className="grid grid-cols-3 gap-3">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-1 bg-gray-50 border border-gray-200 rounded-xl p-3 text-center"
                >
                  <stat.icon className="text-blue-600 text-lg" />
                  <span className="text-gray-900 text-xl font-black">{stat.value}</span>
                  <span className="text-gray-500 text-xs leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(({ Icon, label }, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm border border-transparent"
                >
                  <Icon className="text-blue-600" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl
              bg-blue-600 hover:bg-blue-700 text-white font-semibold
              transition-all duration-200
            "
          >
            {project.isDeployed ? <FaGlobe /> : <FaGithub />}
            {project.isDeployed ? "View Live Demo" : "View on GitHub"}
            <FaArrowUpRightFromSquare className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
}
