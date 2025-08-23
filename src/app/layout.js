import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
// ...existing code...

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gideon Papa",
  description: "A showcase of my work and skills.",
  icons: {
    icon: "/favicon.ico", // Default favicon
    shortcut: "/favicon-32x32.png", // Shortcut icon
    apple: "/apple-touch-icon.png", // iOS icon
  },
  manifest: "/site.webmanifest", // Web manifest file
};

export default function RootLayout({ children }) {
// ...existing code...

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A showcase of my work and skills." />
        <meta property="og:title" content="Gideon Papa Portfolio" />
        <meta property="og:description" content="A showcase of my work and skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nigiddy.vercel.app/" />
        <meta property="og:image" content="/apple-touch-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gideon Papa Portfolio" />
        <meta name="twitter:description" content="A showcase of my work and skills." />
        <meta name="twitter:image" content="/apple-touch-icon.png" />
        <link rel="canonical" href="https://nigiddy.vercel.app/" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <meta name="theme-color" content="#ffffff" />
        <title>Gideon Papa</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}
      >
  {children}
  {/* Client component to update theme color dynamically */}
  {typeof window !== "undefined" && require("../components/ThemeColorUpdater.jsx").default()}
  <Analytics />
      </body>
    </html>
  );
}
