"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  ArrowUpRight,
  Star,
  Quote,
} from "lucide-react";
import {
  projects,
  experience,
  education,
  softSkills,
  technicalSkills,
} from "../../lib/data";
import TechBadge from "../components/ui/TechBadge";

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

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-40 pb-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-40">
        {/* ——— HEADER ——— */}
        <motion.div
          initial={springIn.hidden}
          animate={springIn.visible}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-emerald-400">
                About Me
              </p>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              I build systems that live{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 text-shimmer">
                on the web.
              </span>
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            I am a 3rd-year Computer Science student passionate about building
            robust systems and intuitive interfaces. My journey involves deep
            dives into machine learning frameworks and full-stack web
            development, creating scalable backend solutions that power modern
            applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/patric1304"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/[0.04] px-8 py-4 font-medium text-white transition-all hover:bg-white/[0.08] hover:scale-105 border border-white/[0.08] hover:border-white/[0.2] shadow-lg"
            >
              <Github className="size-5 group-hover:-translate-y-1 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/patric-pop-70b75033a/"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#0077b5]/10 px-8 py-4 font-medium text-white transition-all hover:bg-[#0077b5]/20 hover:scale-105 border border-[#0077b5]/20 hover:border-[#0077b5]/40 shadow-lg"
            >
              <Linkedin className="size-5 group-hover:-translate-y-1 transition-transform text-[#0077b5]" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/PATRIC_POP_CV.pdf"
              download
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-emerald-500 px-8 py-4 font-medium text-white transition-all hover:bg-emerald-400 hover:scale-105 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]"
            >
              <FileText className="size-5 group-hover:-translate-y-1 transition-transform" />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* ——— SKILLS ——— */}
        <section className="space-y-12">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-cyan-400">
              Toolkit
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
              <Cpu className="size-8 text-cyan-400" />
              Technical Arsenal
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {technicalSkills.map((category) => (
              <motion.div
                key={category.category}
                variants={staggerItem}
                className="group p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] space-y-6"
              >
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-[0.2em]">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <TechBadge key={skill} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ——— WORK EXPERIENCE ——— */}
        <section id="experience" className="space-y-16">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-blue-400">
              Career
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
              <Briefcase className="size-8 text-blue-400" />
              Work Experience
            </h2>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/20 before:to-transparent">
            {experience.map((job, index) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10 backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] group-hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-mono text-blue-400">
                        {job.period}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {job.role}
                      </h3>
                      <span className="text-lg text-slate-400 font-medium">
                        {job.company}
                      </span>
                    </div>
                    <ul className="space-y-3 pt-2">
                      {job.details.map((detail, i) => (
                         <li
                         key={i}
                         className="text-base text-slate-400 leading-relaxed pl-6 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-blue-500/40"
                       >
                         {detail}
                       </li>
                      ))}
                    </ul>
                    {job.quote && (
                      <div className="mt-6 p-5 rounded-2xl bg-blue-500/[0.03] border border-blue-500/10 relative overflow-hidden">
                        <Quote className="absolute top-2 right-2 size-12 text-blue-500/10 -rotate-12" />
                        <p className="text-sm text-blue-200/80 italic leading-relaxed relative z-10">
                          &ldquo;{job.quote}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ——— EDUCATION ——— */}
        <section id="education" className="space-y-16">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-violet-400">
              Academic
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
              <GraduationCap className="size-8 text-violet-400" />
              Education
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
                className="group relative p-8 md:p-10 rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  <div className="space-y-2">
                    <span className="text-sm font-mono text-violet-400">
                      {edu.year}
                    </span>
                    <h3 className="text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-xl text-slate-300">{edu.school}</p>
                    <p className="text-slate-400 max-w-2xl mt-4 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                  <div className="hidden md:flex shrink-0 w-24 h-24 rounded-full border border-white/10 items-center justify-center bg-white/[0.02]">
                    <GraduationCap className="size-10 text-violet-400/50" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ——— PROJECT CASE STUDIES ——— */}
        <section id="projects" className="space-y-16">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-emerald-400">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
              <Award className="size-8 text-emerald-400" />
              Case Studies
            </h2>
          </motion.div>

          <div className="grid gap-10">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group block relative rounded-[2.5rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-12 backdrop-blur-xl overflow-hidden hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_20px_80px_-20px_rgba(16,185,129,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform duration-500 group-hover:border-emerald-500/30">
                      <project.icon
                        className={`size-8 ${project.iconColor}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="size-6 text-slate-600 group-hover:text-emerald-400 transition-all opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                      <p className="text-sm font-mono text-emerald-400/80 mt-2 tracking-wide">
                        {project.tech}
                      </p>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 text-base">
                    <div className="space-y-3 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-sm font-mono text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500/50" />
                        The Challenge
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div className="space-y-3 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-sm font-mono text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                        The Solution
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08]">
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-amber-500/[0.03] border border-amber-500/10 group-hover:bg-amber-500/[0.05] transition-colors">
                      <Star className="size-6 text-amber-400/80 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-mono text-amber-500/80 uppercase tracking-[0.2em] block mb-1">
                          Key Highlight
                        </span>
                        <p className="text-base text-amber-100/80 italic leading-relaxed">
                          &ldquo;{project.highlight}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ——— MY APPROACH ——— */}
        <section className="space-y-16">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="space-y-4 text-center"
          >
            <p className="text-sm font-mono tracking-[0.2em] uppercase text-emerald-400">
              Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              My Approach
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {softSkills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 md:p-10 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)] text-center flex flex-col items-center"
              >
                <div className="p-5 w-fit rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-emerald-500/30">
                  <skill.icon className={`size-8 ${skill.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-base text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}
