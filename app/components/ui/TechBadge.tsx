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
            whileHover={{ scale: 1.05 }}
            className="group relative px-4 py-2 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300"
        >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />
            <span className="relative text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {skill}
            </span>
        </motion.div>
    );
}
