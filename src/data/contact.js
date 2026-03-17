import { FaClock, FaLocationDot, FaBriefcase } from "react-icons/fa6";

export const availability = [
  { Icon: FaClock,       text: "Replies within 24h"        },
  { Icon: FaLocationDot, text: "Based in Nairobi, KE"      },
  { Icon: FaBriefcase,   text: "Open to freelance & roles" },
];

export const EMAILJS = {
  SERVICE_ID:  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY:  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export const MESSAGE_MAX = 600;
export const FALLBACK_EMAIL = "gideonpapa.dev@gmail.com";
