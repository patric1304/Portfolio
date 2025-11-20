import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-950/50 backdrop-blur-xl mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand / Copyright */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl font-bold text-white">Patric Pop</h3>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/patric1304"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/patric-pop-70b75033a/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:patric.pop@student.upt.ro" 
              className="text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
