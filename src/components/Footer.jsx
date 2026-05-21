
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white border-t border-gray-200 overflow-hidden pb-8 pt-12 sm:pb-10">
      <div className="w-full mx-auto px-6 sm:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-gray-900 font-bold font-mono text-lg">Gideon Papa</p>
              <p className="text-sm text-gray-500 mt-1">Bringing Ideas to reality.</p>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://github.com/Nigiddy"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-gray-900 transition-colors" aria-label="GitHub"><Github className="w-[18px] h-[18px]" /></a>


              <a href="https://linkedin.com/in/gideonpapa"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-gray-900 transition-colors" aria-label="LinkedIn"><Linkedin className="w-[18px] h-[18px]" /></a>


              <a href="https://twitter.com/niGiddy"
               target="_blank"
               rel="noopener noreferrer"
               className="hover:text-gray-900 transition-colors" aria-label="Twitter"><Twitter className="w-[18px] h-[18px]" /></a>
              <a href="mailto:hello@example.com" className="hover:text-gray-900 transition-colors" aria-label="Email"><Mail className="w-[18px] h-[18px]" /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-3">

            <nav className="flex flex-col gap-2">
              <a href="/projects" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-fit">Work</a>
              <a href="/Services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-fit">Services</a>
              <a href="/Contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors w-fit">Contact</a>
            </nav>
          </div>

          {/* Column 3: Status */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-500">Available for new opportunities</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Based in Nairobi, Kenya</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-gray-400 tabular-nums">
            © {year} Gideon Papa - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}