"use client";

import { useEffect, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  CircuitBoard,
  Cpu,
  Github,
  Mail,
  Sparkles,
  Trophy,
} from "lucide-react";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const GITHUB_PROFILE = "https://github.com/patric1304";

const workSignals = [
  {
    label: "Systems Layer R&D",
    description:
      "Exploring kernel-level primitives, schedulers, and memory orchestration in modern C.",
    stack: ["C", "OS Internals", "Toolchains"],
  },
  {
    label: "Predictive Intelligence",
    description:
      "Designing Python pipelines for time-series forecasting and ML-driven decision support.",
    stack: ["Python", "PyTorch", "DataOps"],
  },
  {
    label: "Secure Fintech Workflows",
    description:
      "Shipping C# platforms that handle account state, validation flows, and audit-ready UI.",
    stack: ["C#", ".NET", "System Design"],
  },
  {
    label: "Computational Simulations",
    description:
      "Building agent-based epidemic models to stress-test policy scenarios and visualize spread.",
    stack: ["Python", "Modeling", "DataViz"],
  },
];

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

function AnimatedBackground() {
  const orbBase =
    "absolute rounded-full blur-3xl opacity-60 mix-blend-screen pointer-events-none";
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className={`${orbBase} bg-fuchsia-500/40 w-72 h-72 -top-16 -left-10`}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${orbBase} bg-cyan-500/40 w-80 h-80 top-1/3 -right-10`}
        animate={{ x: [0, -30, 30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${orbBase} bg-purple-500/40 w-64 h-64 bottom-0 left-1/4`}
        animate={{ x: [0, 25, -25, 0], y: [0, 35, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function CustomCursor() {
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const scale = useMotionValue(1);

  const smoothX = useSpring(cx, { stiffness: 500, damping: 40, mass: 0.5 });
  const smoothY = useSpring(cy, { stiffness: 500, damping: 40, mass: 0.5 });
  const smoothScale = useSpring(scale, {
    stiffness: 300,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      cx.set(event.clientX - 16);
      cy.set(event.clientY - 16);
    };
    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest(".cursor-hoverable")) {
        scale.set(1.7);
      } else {
        scale.set(1);
      }
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("click", () => {
      scale.set(2);
      requestAnimationFrame(() => scale.set(1.7));
    });
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [cx, cy, scale]);

  return (
    <motion.div
      style={{ translateX: smoothX, translateY: smoothY, scale: smoothScale }}
      className="fixed z-50 pointer-events-none mix-blend-difference"
    >
      <div className="w-8 h-8 rounded-full border border-white/80" />
    </motion.div>
  );
}

function useMagnetic() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMove = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.3);
    y.set(offsetY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { springX, springY, handleMove, reset };
}

export default function LandingPage() {
  const { springX, springY, handleMove, reset } = useMagnetic();

  return (
    <main className="relative min-h-screen bg-[#05060a] text-slate-100 overflow-hidden">
      <AnimatedBackground />
      <CustomCursor />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-32">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={springIn.hidden}
            animate={springIn.visible}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-300 backdrop-blur">
              <Sparkles className="size-4 text-emerald-300" />
              Portfolio 2025
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              Bridging Low-Level Logic with High-Level Design.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              CS Student | Full Stack Developer | ML Enthusiast. Crafting fluid,
              glassy experiences that meld systems thinking with human-centered polish.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-hoverable rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 px-7 py-3 font-medium text-slate-950 shadow-2xl shadow-emerald-600/30 transition"
              >
                View GitHub
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-hoverable rounded-3xl border border-white/20 bg-white/5 px-7 py-3 font-medium text-white backdrop-blur shadow-lg shadow-black/30 flex items-center gap-2"
              >
                Let&apos;s Collaborate
                <ArrowUpRight className="size-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_20px_80px_-40px_rgba(94,234,212,0.8)]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            <div className="font-mono text-sm text-slate-200 space-y-2">
              <p>
                <span className="text-emerald-300">const</span> {" "}
                <span className="text-cyan-200">student</span> = {"{"}
              </p>
              <p className="pl-5 text-slate-400">year: 3,</p>
              <p className="pl-5 text-slate-400">focus: ["Systems", "ML"],</p>
              <p className="pl-5 text-slate-400">
                mission: "Build fluid human-tech synergy"
              </p>
              <p>{"};"}</p>
            </div>
            <motion.div
              className="absolute -top-10 right-6 w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-cyan-400 to-violet-500 blur-[2px]"
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        <section className="space-y-8">
          <motion.h2
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold"
          >
            Skill Bento Grid
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3 auto-rows-[200px]">
            {skills.map((card, index) => (
              <motion.div
                key={card.title}
                className={`rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] flex flex-col justify-between ${card.className}`}
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div>{card.icon}</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {card.subtitle}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <h2 className="text-3xl font-semibold">Signal Boosts</h2>
            <p className="text-sm text-slate-400">Themes sampled from my GitHub lab</p>
          </motion.div>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {workSignals.map((signal, index) => (
              <motion.article
                key={signal.label}
                className="min-w-[300px] max-w-[320px] snap-start rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_20px_60px_-30px_rgba(15,118,110,0.8)] flex flex-col gap-4"
                whileHover={{ rotate: -1.5 + index, y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div>
                  <p className="text-sm text-slate-400">{signal.stack.join(" · ")}</p>
                  <h3 className="text-2xl font-semibold text-white">{signal.label}</h3>
                </div>
                <p className="text-sm text-slate-300 flex-grow">{signal.description}</p>
                <button
                  className="cursor-hoverable inline-flex items-center gap-2 rounded-2xl border border-white/30 px-4 py-2 text-sm font-medium text-white/90 hover:border-white transition"
                  onClick={() => window.open(GITHUB_PROFILE, "_blank", "noreferrer")}
                >
                  <Github className="size-4" />
                  GitHub Profile
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-10 backdrop-blur-2xl relative overflow-hidden">
          <motion.div
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-2xl">
              Open for Collaborations & Opportunities.
            </h2>
            <p className="text-slate-300 max-w-2xl">
              Let&apos;s fuse cutting-edge systems with refined aesthetics. I’m currently exploring internships,
              freelance partnerships, and ML research collaborations.
            </p>
            <motion.button
              className="cursor-hoverable inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-8 py-4 font-semibold shadow-2xl"
              style={{ x: springX, y: springY }}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              whileHover={{ scale: 1.03 }}
            >
              <Mail className="size-5" />
              Ping Me
            </motion.button>
          </motion.div>
          <motion.div
            className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-emerald-400/30 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </section>
      </div>
    </main>
  );
}
