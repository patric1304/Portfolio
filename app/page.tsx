"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Activity,
  Network,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { technicalSkills, skills } from "../lib/data";
import TechBadge from "./components/ui/TechBadge";
import SkillCard from "./components/ui/SkillCard";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-40">
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
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Patric Pop</span>
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
            <Link href="/about" className="group relative px-8 py-4 rounded-full bg-white text-slate-950 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              More About Me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/PATRIC_POP_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-6 py-3 font-medium text-white hover:bg-emerald-500/30 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 backdrop-blur-md border border-emerald-500/30"
            >
              <Download className="size-5" />
              Download CV
            </a>
          </motion.div>
        </section>

        {/* Technical Arsenal */}
        <section className="relative">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Technical Arsenal
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Technologies and tools I work with across the full development stack
              </p>
            </div>

            {/* Broad Skill Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard
                  key={skill.title}
                  {...skill}
                  index={index}
                  variants={springIn}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Main project */}
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
                  Technical Deep Dive
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    iTECify / CollabCode
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Built during iTEC as a team project, this is a full-stack collaborative coding platform with realtime editing, secure Docker-based execution, Supabase-powered auth/data sync, and Gemini-assisted workflows.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["React", "Fastify", "Supabase", "Docker", "Monaco", "Gemini"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-6">
                  <Link href="/about#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                    View Project
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="https://github.com/AlexandruCL/iTEC_2026/tree/main"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    GitHub Repo
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>

              {/* Abstract Visual - Execution Pipeline */}
              <div className="relative h-64 lg:h-full min-h-[300px] rounded-2xl border border-white/5 bg-black/20 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />

                <div className="relative w-full h-full p-8">
                  <div className="absolute top-1/4 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-pulse" />
                  <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse" />
                  <div className="absolute top-3/4 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse" />

                  <div className="absolute top-10 left-10 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs font-mono text-cyan-300">queued</div>
                  <div className="absolute top-[42%] left-[36%] rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs font-mono text-emerald-300">scanning</div>
                  <div className="absolute top-[62%] right-10 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs font-mono text-cyan-200">building</div>
                  <div className="absolute bottom-10 left-[30%] rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs font-mono text-emerald-200">running</div>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-emerald-500/50 font-mono">
                  <Network className="size-3" />
                  <span>WS_STREAM_ACTIVE</span>
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

        {/* Background Section */}
        <section className="grid gap-6">
          {/* Work Experience */}
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Briefcase className="size-6" />
              </div>
              <span className="text-xs font-medium text-slate-500 border border-white/10 px-2 py-1 rounded-full">
                Spring 2025
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Full Stack Intern</h3>
            <p className="text-emerald-400 font-medium mb-4">HiByte</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Contributed to enterprise-level backend systems and optimized frontend performance.
            </p>

            <Link href="/about#experience" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              View Details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <GraduationCap className="size-6" />
              </div>
              <span className="text-xs font-medium text-slate-500 border border-white/10 px-2 py-1 rounded-full">
                2023 - Present
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">B.Sc. Computer Science</h3>
            <p className="text-purple-400 font-medium mb-4">Politehnica University of Timișoara</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Focusing on Software Engineering, Algorithms, and Distributed Systems.
            </p>

            <Link href="/about#education" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              View Details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
