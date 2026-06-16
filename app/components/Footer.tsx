"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mblwwrqq", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setFormStatus("sent");
      form.reset();
      setTimeout(() => setFormStatus("idle"), 4000);
    } catch {
      setFormStatus("idle");
    }
  };

  return (
    <footer
      id="contact"
      className="relative z-10 border-t border-white/[0.06] mt-0"
    >
      {/* Contact section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <p className="text-sm font-mono tracking-[0.2em] uppercase text-emerald-400">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let's build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  together
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-md">
                Currently open for{" "}
                <span className="text-emerald-300">internships</span> and{" "}
                <span className="text-cyan-300">freelance opportunities</span>.
                Drop me a line.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:patric.pop13@gmail.com"
                className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/30 transition-colors">
                  <Mail className="size-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="font-medium">patric.pop13@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <MapPin className="size-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Location</p>
                  <p className="font-medium">Timișoara, Romania</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/patric1304"
                target="_blank"
                rel="noreferrer"
                className="group p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/patric-pop-70b75033a/"
                target="_blank"
                rel="noreferrer"
                className="group p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="footer-name"
                    className="text-xs font-mono text-slate-500 uppercase tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="footer-name"
                    required
                    suppressHydrationWarning
                    className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3.5 text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="footer-email"
                    className="text-xs font-mono text-slate-500 uppercase tracking-wider"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="footer-email"
                    required
                    suppressHydrationWarning
                    className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3.5 text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="footer-message"
                    className="text-xs font-mono text-slate-500 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="footer-message"
                    rows={4}
                    required
                    className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] px-4 py-3.5 text-white placeholder-slate-600 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all resize-none text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-white hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 disabled:opacity-50 text-sm"
                >
                  {formStatus === "sending" ? (
                    <span>Sending...</span>
                  ) : formStatus === "sent" ? (
                    <span>Message Sent ✓</span>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Patric Pop
          </p>
          <p className="text-xs text-slate-600 font-mono">
            Next.js • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
