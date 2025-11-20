"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const orbBase =
    "absolute rounded-full blur-3xl opacity-60 mix-blend-screen pointer-events-none";
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
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
