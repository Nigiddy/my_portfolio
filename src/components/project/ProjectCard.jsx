import React, { useState } from "react";
import Image from "next/image";
import { FaStore, FaUsers, FaMobileAlt } from "react-icons/fa";
import {
  FaJs, FaNodeJs, FaReact,
  FaDatabase,
} from "react-icons/fa";
import {
  SiVite, SiTypescript, SiTailwindcss,
  SiSupabase, SiPostgresql
} from "react-icons/si";
import Card from "../common/Card";
import GlowBorder from "./GlowBorder";

/** Individual bento card */
export default function ProjectCard({
  project,
  onClick,
  style,
}) {
  const [hovered, setHovered] = useState(false);

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
        {/* Static image always shown */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        {/* GIF on hover — next/image doesn't support unoptimized gifs well, use img tag */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.demoGif}
          alt={`${project.title} demo`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full border ${
            project.status === "live"
              ? "border-green-400/30 text-green-400"
              : "border-orange-400/30 text-orange-400"
          }`}
        >
          {project.status === "live" ? "● Live" : project.status}
        </span>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black/60 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            View Details
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">{project.tagline}</p>
          <h3 className="text-lg font-bold text-white leading-snug group-hover:text-orange-400 transition-colors duration-300">
            {project.size === "large" ? project.title : project.shortTitle}
          </h3>
        </div>

        {project.size !== "small" && (
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">{project.description}</p>
        )}

        {/* Proof-of-work stats */}
        {project.stats.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-auto pt-3 border-t border-zinc-800/60">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <stat.icon className="text-orange-400 text-xs" />
                <span className="text-white text-sm font-bold">{stat.value}</span>
                <span className="text-zinc-500 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack icons */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map(({ Icon, label }, idx) => (
            <span
              key={idx}
              title={label}
              className="flex items-center gap-1 bg-zinc-800/60 rounded-md px-2 py-1 border border-zinc-700/40"
            >
              <Icon className="text-zinc-400 text-sm" />
              {project.size === "large" && (
                <span className="text-xs text-zinc-500 hidden sm:inline">{label}</span>
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
