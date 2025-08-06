import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

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
        <title>Gideon Papa</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
