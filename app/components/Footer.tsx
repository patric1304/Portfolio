"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-ink-950/50 backdrop-blur-xl mt-20 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">

          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let's <span className="text-emerald-400">Connect</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm currently open for <span className="text-emerald-300 font-medium">internships</span> and <span className="text-cyan-300 font-medium">freelance opportunities</span>.
                <br />
                Feel free to reach out if you have a project in mind or just want to say hi!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="size-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Email</p>
                  <a href="mailto:patric.pop13@gmail.com" className="hover:text-white transition-colors">
                    patric.pop13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="size-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p>Timisoara, Romania</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/patric1304"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:shadow-lg hover:shadow-white/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/patric-pop-70b75033a/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:scale-110 hover:shadow-lg hover:shadow-[#0077b5]/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <form
              action="https://formspree.io/f/mblwwrqq"
              method="POST"
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  suppressHydrationWarning
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  suppressHydrationWarning
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-semibold text-white hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg shadow-emerald-500/20"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Patric Pop. Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
