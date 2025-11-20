"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  CircuitBoard,
  Trophy,
  ArrowRight,
  Code2,
  Terminal,
  Globe,
  Database
} from "lucide-react";
import Link from "next/link";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  {
    title: "Full Stack Development",
    subtitle: "React, Next.js, Node.js",
    icon: <Globe className="size-6 text-emerald-300" />,
    className: "md:col-span-2 bg-emerald-500/5 border-emerald-500/20",
  },
  {
    title: "Machine Learning",
    subtitle: "Python, TensorFlow, PyTorch",
    icon: <Brain className="size-6 text-violet-300" />,
    className: "bg-violet-500/5 border-violet-500/20",
  },
  {
    title: "System Architecture",
    subtitle: "C#, .NET, Microservices",
    icon: <CircuitBoard className="size-6 text-cyan-300" />,
    className: "bg-cyan-500/5 border-cyan-500/20",
  },
  {
    title: "Low-Level Programming",
    subtitle: "C, C++, OS Concepts",
    icon: <Terminal className="size-6 text-orange-300" />,
    className: "md:col-span-2 bg-orange-500/5 border-orange-500/20",
  },
];

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
              href="https://github.com/patric1304"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              View GitHub
            </a>
          </motion.div>
        </section>

        {/* Technical Arsenal */}
        <section className="space-y-12">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A curated set of technologies I use to build scalable, efficient, and modern applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-3xl border backdrop-blur-sm hover:bg-opacity-10 transition-colors ${skill.className}`}
              >
                <div className="h-full flex flex-col justify-between space-y-4">
                  <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/5">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{skill.title}</h3>
                    <p className="text-sm text-slate-400 font-mono">{skill.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
