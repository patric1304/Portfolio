"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-[#030712]">
      {/* Dot grid with radial fade */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.13) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 40%, black 25%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 50% at 50% 40%, black 25%, transparent 70%)",
        }}
      />

      {/* Aurora — slowly rotating conic gradient */}
      <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[100%]">
        <motion.div
          className="w-full h-full opacity-[0.22]"
          style={{
            background:
              "conic-gradient(from 230deg at 51% 52%, rgb(16,185,129) 0deg, rgb(6,182,212) 72deg, rgb(139,92,246) 144deg, rgb(16,185,129) 216deg, rgb(6,182,212) 288deg, transparent 360deg)",
            filter: "blur(100px)",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Large gradient orbs */}
      <motion.div
        className="absolute -top-40 left-[5%] w-[700px] h-[700px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.22), transparent 70%)",
        }}
        animate={{
          x: [0, 120, -60, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] -right-40 w-[650px] h-[650px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)",
        }}
        animate={{
          x: [0, -100, 80, 0],
          y: [0, -60, 60, 0],
          scale: [1, 0.8, 1.15, 1],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%)",
        }}
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 100, -40, 0],
        }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50%] right-[25%] w-[350px] h-[350px] rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(244,114,182,0.1), transparent 70%)",
        }}
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_75%)]" />
    </div>
  );
}
