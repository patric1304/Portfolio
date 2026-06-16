"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  skill: string;
  index: number;
}

export default function TechBadge({ skill, index }: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
      className="group relative px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] hover:shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)] transition-all duration-300"
    >
      <span className="relative text-sm font-medium text-slate-400 group-hover:text-emerald-300 transition-colors">
        {skill}
      </span>
    </motion.div>
  );
}
