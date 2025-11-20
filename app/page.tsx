"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Activity,
  Network,
  Briefcase,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide">
                Currently leveling up my Full Stack skills
              </span>
            </div>

            {/* Profile Picture Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-32 h-32 rounded-full bg-slate-900 ring-4 ring-slate-900 overflow-hidden flex items-center justify-center">
                 {/* Replace with actual image: <img src="/me.jpg" alt="Patric" className="w-full h-full object-cover" /> */}
                 <span className="text-4xl">👨‍💻</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Patric</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                A Computer Science student bridging the gap between <br className="hidden md:block" />
                complex backend logic and intuitive frontend experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link href="/about">
              <button className="group relative px-8 py-4 rounded-full bg-white text-slate-950 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                More About Me
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
             <a
              href="/POP_PATRIC_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-6 py-3 font-medium text-white hover:bg-emerald-500/30 transition-colors backdrop-blur-md border border-emerald-500/30"
            >
              <Download className="size-5" />
              Download CV
            </a>
          </motion.div>
        </section>

        {/* Featured Project */}
        <section className="relative">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-wider uppercase">
                  <Activity className="size-4" />
                  Featured Project
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    AI Stock Sentiment Predictor
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    A hybrid machine learning pipeline that correlates news sentiment with historical price action to forecast market trends.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "NewsAPI", "Pandas"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <Link href="/about#projects">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                      View Analysis
                      <ArrowRight className="size-4" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Abstract Visual - Neural Network / Data Stream */}
              <div className="relative h-64 lg:h-full min-h-[300px] rounded-2xl border border-white/5 bg-black/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
                
                {/* Nodes and Connections */}
                <div className="relative w-full h-full p-8">
                  {/* Animated Data Stream Lines */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse" />
                  <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent delay-75 animate-pulse" />
                  <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent delay-150 animate-pulse" />

                  {/* Nodes */}
                  <div className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] animate-ping" />
                  <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                  <div className="absolute top-2/3 left-3/4 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
                  
                  {/* Connecting Lines (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <path d="M100 150 Q 200 100 300 150 T 500 150" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(16,185,129,0)" />
                        <stop offset="50%" stopColor="rgba(16,185,129,1)" />
                        <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-emerald-500/50 font-mono">
                  <Network className="size-3" />
                  <span>NEURAL_NET_ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-8 text-center">
            <Link href="/about" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
              See All Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Latest Experience */}
        <section>
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Briefcase className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Latest Role</h3>
                <p className="text-slate-400">Full Stack Intern @ HiByte</p>
              </div>
            </div>
            <Link href="/about#experience" className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
              View Details <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-12 text-center space-y-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Collaborate?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              I am currently open to <span className="text-emerald-300 font-medium">internship opportunities</span> and <span className="text-cyan-300 font-medium">freelance projects</span>. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="pt-4">
              <a
                href="mailto:patric.pop13@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-slate-950 shadow-lg hover:scale-105 transition-transform"
              >
                Let's Talk
                <ArrowRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
