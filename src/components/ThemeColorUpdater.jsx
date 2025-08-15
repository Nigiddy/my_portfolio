"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { themeColors } from "../themeColors";

export default function ThemeColorUpdater() {
  const pathname = usePathname();
  const color = themeColors[pathname] || themeColors["/"];

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", color);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.setAttribute("name", "theme-color");
      newMeta.setAttribute("content", color);
      document.head.appendChild(newMeta);
    }
  }, [pathname, color]);

  return null;
}
