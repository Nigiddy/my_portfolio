import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
