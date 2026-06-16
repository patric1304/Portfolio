"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "#contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsContactVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );
    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className={`flex items-center gap-1 rounded-full p-1.5 transition-all duration-500 ${
          scrolled
            ? "bg-white/[0.08] border border-white/[0.08] backdrop-blur-2xl shadow-lg shadow-black/20"
            : "bg-white/[0.04] border border-white/[0.05] backdrop-blur-xl"
        }`}
      >
        {navItems.map((item) => {
          const isActive =
            item.path === "#contact"
              ? isContactVisible
              : pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-6 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                isActive
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-emerald-500/15 border border-emerald-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
