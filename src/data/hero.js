import {
  FaLinkedin, FaGithub, FaWhatsapp, FaInstagram,
  FaJs, FaNodeJs, FaReact, FaPython, FaAws, FaDatabase,
} from "react-icons/fa";
import { SiX, SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaHouse } from "react-icons/fa6";

export const techStack = [
  { Icon: FaJs,          label: "JavaScript", color: "#f7df1e" },
  { Icon: FaNodeJs,      label: "Node.js",    color: "#6cc24a" },
  { Icon: FaReact,       label: "React",      color: "#61dafb" },
  { Icon: SiTypescript,  label: "TypeScript", color: "#3178c6" },
  { Icon: FaPython,      label: "Python",     color: "#4584b6" },
  { Icon: SiTailwindcss, label: "Tailwind",   color: "#38bdf8" },
  { Icon: FaAws,         label: "AWS",        color: "#f97316" },
  { Icon: FaDatabase,    label: "PostgreSQL", color: "#a0aec0" },
];

export const navLinks = [
  { Icon: FaHouse,     label: "Home",      href: null,                                     action: "scrollTop" },
  { Icon: FaGithub,    label: "GitHub",    href: "https://github.com/Nigiddy"              },
  { Icon: FaLinkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/in/gideonpapa"  },
  { Icon: SiX,         label: "Twitter",   href: "https://x.com/niGiddy"                   },
  { Icon: FaWhatsapp,  label: "WhatsApp",  href: "https://wa.me/254775551019"              },
  { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/ni.giddy"      },
];
