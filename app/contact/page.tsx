"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const springIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-16">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={springIn.hidden}
          animate={springIn.visible}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Let's <span className="text-emerald-400">Connect</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'm currently open for internships and freelance opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Contact Details</h3>
              
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
                  <Phone className="size-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Phone</p>
                  <p>(+40) 0745 235 833</p>
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
