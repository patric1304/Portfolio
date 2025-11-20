"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Award, Star } from "lucide-react";

const springIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const achievements = [
  {
    title: "Pull Shark",
    description: "Recognized for consistent contributions and code reviews.",
    icon: <Star className="size-6 text-amber-300" />,
  },
  {
    title: "Hackathon Winner",
    description: "First place in University CS Hackathon 2024.",
    icon: <Award className="size-6 text-emerald-300" />,
  },
  // Add more achievements here
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-16">
        {/* Header */}
        <motion.div
          initial={springIn.hidden}
          animate={springIn.visible}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            About Me
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            I am a 3rd-year Computer Science student passionate about building
            robust systems and intuitive interfaces. My journey involves deep
            dives into machine learning framworks    and full-stack
            web development, as well as creating efficient and scalable
            back-end solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://github.com/patric1304"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10"
            >
              <Github className="size-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patric-pop-70b75033a/" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0077b5]/20 px-6 py-3 font-medium text-white hover:bg-[#0077b5]/30 transition-colors backdrop-blur-md border border-[#0077b5]/30"
            >
              <Linkedin className="size-5" />
              LinkedIn
            </a>
            <a
              href="/../POP_PATRIC_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-6 py-3 font-medium text-white hover:bg-emerald-500/30 transition-colors backdrop-blur-md border border-emerald-500/30"
            >
              <FileText className="size-5" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Achievements */}
        <section className="space-y-8">
          <motion.h2
            initial={springIn.hidden}
            whileInView={springIn.visible}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-white"
          >
            Achievements & Highlights
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl flex items-start gap-4"
                variants={springIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
