"use client";
import { useState } from "react";
import Image from "next/image";
import Card from "../common/Card";
import GlowBorder from "./GlowBorder";

/** Individual bento card */
export default function ProjectCard({ project, onClick, style }) {
  const [hovered, setHovered] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  const inner = (
    <Card
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
      aria-label={`Open details for ${project.title}`}
    >
      {/* Image / GIF preview */}
      <div className="relative w-full overflow-hidden" style={{ height: project.size === "large" ? 220 : 160 }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-opacity duration-500"
          style={{ opacity: hovered && gifLoaded ? 0 : 1 }}
        />
        {/* GIF loads lazily on first hover — avoids bandwidth waste */}
        {hovered && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.demoGif}
            alt={`${project.title} demo`}
            loading="lazy"
            onLoad={() => setGifLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: gifLoaded ? 1 : 0 }}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full border ${
            project.status === "live"
              ? "border-green-400/30 text-green-400"
              : "border-blue-400/30 text-blue-600"
          }`}
        >
          {project.status === "live" ? "● Live" : project.status}
        </span>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/60 backdrop-blur-sm">
          <span className="bg-white text-blue-600 text-sm font-semibold px-4 py-2 rounded-full shadow-sm border border-gray-200">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-1">{project.tagline}</p>
          <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
            {project.size === "large" ? project.title : project.shortTitle}
          </h3>
        </div>

        {project.size !== "small" && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{project.description}</p>
        )}

        {/* Proof-of-work stats */}
        {project.stats.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-auto pt-3 border-t border-gray-200">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <stat.icon className="text-blue-600 text-xs" />
                <span className="text-gray-900 text-sm font-bold">{stat.value}</span>
                <span className="text-gray-500 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack — icons come from project.techStack data, not local imports */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map(({ Icon, label }, idx) => (
            <span
              key={idx}
              title={label}
              className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full"
            >
              <Icon className="text-sm" />
              {project.size === "large" && (
                <span className="hidden sm:inline">{label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );

  if (project.featured) {
    return <GlowBorder className="h-full">{inner}</GlowBorder>;
  }
  return inner;
}
