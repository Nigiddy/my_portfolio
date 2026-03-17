import "./globals.css";
import { Syne, DM_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* ─────────────────────────────────────────────
   FONTS
   Syne — bold, geometric display font (replaces Geist Sans)
   DM Mono — clean monospace for code/labels (replaces Geist Mono)
───────────────────────────────────────────── */
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

/* ─────────────────────────────────────────────
   METADATA — Next.js App Router native API
   Replaces all the manual <head> tags.
   next/head duplication is removed entirely.
───────────────────────────────────────────── */
export const metadata = {
  metadataBase: new URL("https://gideonpapa.me"),

  title: {
    default: "Gideon Papa — Full-Stack Developer & UI/UX Designer",
    template: "%s | Gideon Papa",
  },
  description:
    "Nairobi-based Full-Stack Developer building fast, beautiful, and revenue-generating web products — from M-Pesa integrations to multi-tenant SaaS platforms.",

  keywords: [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Next.js",
    "React",
    "Node.js",
    "M-Pesa integration",
    "SaaS",
    "Nairobi",
    "Kenya",
    "Gideon Papa",
  ],

  authors: [{ name: "Gideon Papa", url: "https://gideonpapa.me" }],
  creator: "Gideon Papa",

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    url: "https://gideonpapa.me",
    title: "Gideon Papa — Full-Stack Developer & UI/UX Designer",
    description:
      "Nairobi-based developer building fast, beautiful, revenue-generating web products.",
    siteName: "Gideon Papa",
    images: [
      {
        url: "/og-image.png",   // ← create a 1200×630 branded image and place it in /public
        width: 1200,
        height: 630,
        alt: "Gideon Papa — Full-Stack Developer & UI/UX Designer",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    title: "Gideon Papa — Full-Stack Developer & UI/UX Designer",
    description:
      "Nairobi-based developer building fast, beautiful, revenue-generating web products.",
    creator: "@niGiddy",
    images: ["/og-image.png"],
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },

  manifest: "/site.webmanifest",

  /* ── Canonical ── */
  alternates: {
    canonical: "https://gideonpapa.me",
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

/* ─────────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning   // required by next-themes
    >
      {/*
        Next.js App Router injects all <metadata> fields automatically.
        No manual <head> tags needed — they caused duplication before.
      */}

      <body
        className={`
          ${syne.variable} ${dmMono.variable}
          min-h-screen
          antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}