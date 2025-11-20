"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  CircuitBoard,
  Trophy,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  {
    title: "Systems Kernel Explorer",
    subtitle: "C · Schedulers · Memory",
    icon: <Cpu className="size-6 text-emerald-300" />,
    className: "md:col-span-2",
  },
  {
    title: "Predictive Modeling",
    subtitle: "Python · PyTorch",
    icon: <Brain className="size-6 text-violet-300" />,
    className: "",
  },
  {
    title: "Fintech Interface Engineering",
    subtitle: "C# · Domain Logic",
    icon: <CircuitBoard className="size-6 text-cyan-300" />,
    className: "",
  },
  {
    title: "Simulation Architect",
    subtitle: "Agent Systems · Viz",
    icon: <Trophy className="size-6 text-amber-300" />,
    className: "md:col-span-2",
  },
];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-24">
        {/* Hero */}
        <section className="flex flex-col items-start justify-center min-h-[40vh]">
          <motion.div
            initial={springIn.hidden}
            animate={springIn.visible}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-300 backdrop-blur">
              <Sparkles className="size-4 text-emerald-300" />
              Portfolio 2025
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight text-white">
              Bridging Low-Level Logic with High-Level Design.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              CS Student | Full Stack Developer | ML Enthusiast. <br />
              Crafting fluid, glassy experiences that meld systems thinking with
              human-centered polish.
            </p>
            
            <div className="pt-4">
               <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-full bg-white px-8 py-4 font-semibold text-slate-950 shadow-2xl flex items-center gap-2"
                >
                  More About Me
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
               </Link>
            </div>
          </motion.div>
        </section>

        {/* Bento Skills */}
        <section className="space-y-8">
          <motion.h2
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold"
          >
            Technical Arsenal
          </motion.h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 auto-rows-[180px]">
            {skills.map((card, index) => (
              <motion.div
                key={card.title}
                className={`rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] flex flex-col justify-between hover:bg-white/10 transition-colors ${card.className}`}
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div>{card.icon}</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {card.subtitle}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
