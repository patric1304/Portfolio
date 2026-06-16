"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

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
    <main className="relative min-h-screen pt-40 pb-24 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4">
            <MessageSquare className="size-4 text-cyan-400" />
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-400">
              Get In Touch
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
            Let&apos;s build something{" "}
            <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 text-shimmer pb-2">
              extraordinary.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently open for internships, freelance opportunities, or just a chat about technology. Drop a message below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-sm font-mono text-slate-500 uppercase tracking-[0.2em]">
                Direct Contact
              </h3>

              <a
                href="mailto:patric.pop13@gmail.com"
                className="group flex items-start gap-5 text-slate-300 hover:text-white transition-colors"
              >
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-all duration-300 shadow-lg">
                  <Mail className="size-6 text-emerald-400" />
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-xs font-mono text-slate-500 tracking-wider">Email</p>
                  <p className="font-medium text-lg">patric.pop13@gmail.com</p>
                </div>
              </a>

              <div className="group flex items-start gap-5 text-slate-300">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 group-hover:border-violet-500/30 group-hover:bg-violet-500/5 transition-all duration-300 shadow-lg">
                  <Phone className="size-6 text-violet-400" />
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-xs font-mono text-slate-500 tracking-wider">Phone</p>
                  <p className="font-medium text-lg">(+40) 0745 235 833</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 text-slate-300">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all duration-300 shadow-lg">
                  <MapPin className="size-6 text-cyan-400" />
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-xs font-mono text-slate-500 tracking-wider">Location</p>
                  <p className="font-medium text-lg">Timișoara, Romania</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-white placeholder-slate-600 focus:border-emerald-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-white placeholder-slate-600 focus:border-emerald-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-slate-400 uppercase tracking-widest pl-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full rounded-2xl bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-white placeholder-slate-600 focus:border-emerald-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all resize-none text-base"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-8 py-5 font-bold text-white hover:bg-emerald-400 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] disabled:opacity-50 disabled:hover:scale-100 text-lg group/btn"
              >
                {formStatus === "sending" ? (
                  <span>Sending...</span>
                ) : formStatus === "sent" ? (
                  <span>Message Sent ✓</span>
                ) : (
                  <>
                    <Send className="size-5 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
