"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/about" },
  { name: "Contact", path: "#contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsContactVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of footer is visible
      }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl shadow-lg">
        {navItems.map((item) => {
          const isActive = item.path === "#contact" ? isContactVisible : pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-6 py-2 text-sm font-medium transition-colors ${isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
