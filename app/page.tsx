"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Download,
  Activity,
  Network,
  Briefcase,
  ExternalLink,
  GraduationCap,
  Calendar,
  ChevronRight,
  Cpu,
  Brain,
  Code2,
  Layers,
  ArrowUpRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { technicalSkills, skills, projects } from "../lib/data";
import TechBadge from "./components/ui/TechBadge";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Pick first 2 projects for the featured section
  const featuredProjects = projects.slice(0, 2);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        {/* ───────── HERO ───────── */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
        >
          {/* Orbit Rings Background Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-30">
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full border border-emerald-500/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[800px] h-[800px] rounded-full border border-cyan-500/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[1000px] h-[1000px] rounded-full border border-violet-500/5 block md:hidden lg:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-8 max-w-5xl z-10"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md hover:bg-emerald-500/15 transition-colors cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide">
                Open to opportunities
              </span>
            </motion.div>

            {/* Name & title */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-sm font-mono tracking-[0.3em] uppercase text-cyan-400/80"
              >
                Computer Science Student
              </motion.p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.9]">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block drop-shadow-2xl"
                >
                  Patric
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 text-shimmer pb-4"
                >
                  Pop
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
              >
                Building bridges between complex backend systems{" "}
                <br className="hidden md:block" />
                and intuitive user experiences.
              </motion.p>
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-8 py-4 font-medium text-white transition-all hover:bg-emerald-400 hover:scale-105 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
              </Link>
              <a
                href="/PATRIC_POP_CV.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-8 py-4 font-medium text-white hover:bg-white/[0.1] transition-all duration-300 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.2] shadow-lg"
              >
                Download CV
                <Download className="size-4 transition-transform group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500">
              Scroll
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500/50 to-transparent" />
          </motion.div>
        </motion.section>

        <div className="max-w-6xl mx-auto px-6 space-y-40 pb-40">
          {/* ───────── SKILLS BENTO GRID ───────── */}
          <section className="space-y-16">
            <motion.div
              initial={springIn.hidden}
              whileInView={springIn.visible}
              viewport={{ once: true }}
              className="space-y-4 text-center md:text-left"
            >
              <p className="text-sm font-mono tracking-[0.2em] uppercase text-emerald-400">
                Capabilities
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center md:justify-start gap-4">
                <Brain className="size-8 text-emerald-400" />
                What I Do
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={staggerItem}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.04] hover:border-emerald-500/30 hover:shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)] ${skill.className}`}
                >
                  {/* Subtle inner gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent blur-md" />

                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform duration-500 group-hover:border-emerald-500/30">
                      <skill.icon className={`size-8 ${skill.iconColor}`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed font-medium">
                        {skill.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Technical Skills Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-10 flex flex-wrap justify-center gap-3"
            >
              {technicalSkills.flatMap((cat) => cat.skills).map((skill, i) => (
                <TechBadge key={skill} skill={skill} index={i} />
              ))}
            </motion.div>
          </section>

          {/* ───────── FEATURED PROJECTS ───────── */}
          <section id="projects" className="space-y-16">
            <motion.div
              initial={springIn.hidden}
              whileInView={springIn.visible}
              viewport={{ once: true }}
              className="space-y-4 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <p className="text-sm font-mono tracking-[0.2em] uppercase text-cyan-400">
                  Featured Work
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center md:justify-start gap-4 mt-4">
                  <Code2 className="size-8 text-cyan-400" />
                  Recent Projects
                </h2>
              </div>
              <Link
                href="/about#projects"
                className="group flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                View all projects
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid gap-12">
              {featuredProjects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -8 }}
                  className="group relative block rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl overflow-hidden hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_20px_80px_-20px_rgba(6,182,212,0.15)]"
                >
                  {/* Decorative corner gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                  <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                    <div className="flex-1 space-y-8">
                      <div className="space-y-4">
                        <div className="inline-flex p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform duration-500 group-hover:border-cyan-500/30">
                          <project.icon className={`size-8 ${project.iconColor}`} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-3">
                          {project.title}
                          <ArrowUpRight className="size-6 text-slate-600 group-hover:text-cyan-400 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </h3>
                        <p className="text-sm font-mono text-slate-400 tracking-wide">
                          {project.tech}
                        </p>
                      </div>

                      <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                        <p>{project.solution}</p>
                      </div>

                      <div className="pt-6 border-t border-white/[0.08]">
                        <div className="flex items-start gap-3 p-5 rounded-2xl bg-amber-500/[0.03] border border-amber-500/10 group-hover:bg-amber-500/[0.05] transition-colors">
                          <Star className="size-5 text-amber-400/80 mt-0.5 shrink-0" />
                          <div className="space-y-1">
                            <span className="text-xs font-mono text-amber-500/80 uppercase tracking-widest block">
                              Key Achievement
                            </span>
                            <p className="text-amber-100/80 text-sm italic">
                              &ldquo;{project.highlight}&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* ───────── BACKGROUND QUICK GLANCE ───────── */}
          <section className="space-y-16">
            <motion.div
              initial={springIn.hidden}
              whileInView={springIn.visible}
              viewport={{ once: true }}
              className="space-y-4 text-center"
            >
              <p className="text-sm font-mono tracking-[0.2em] uppercase text-violet-400">
                Timeline
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center gap-4">
                <Layers className="size-8 text-violet-400" />
                Current Status
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-slate-400 text-sm font-mono">
                    <span className="flex items-center gap-2">
                      <Briefcase className="size-4" />
                      Experience
                    </span>
                    <span className="text-violet-400">Spring 2025</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      Software Developer
                    </h3>
                    <p className="text-slate-400 mt-1">HiByte • Internship</p>
                  </div>
                </div>
              </motion.div>

              {/* Education Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-fuchsia-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(217,70,239,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between text-slate-400 text-sm font-mono">
                    <span className="flex items-center gap-2">
                      <GraduationCap className="size-4" />
                      Education
                    </span>
                    <span className="text-fuchsia-400">2022 - Present</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                      B.Sc. Computer Science
                    </h3>
                    <p className="text-slate-400 mt-1">
                      Politehnica University of Timișoara
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
