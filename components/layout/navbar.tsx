"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./logo";
import { navLinks } from "./nav-links";
import { useScroll } from "@/hooks/use-scroll";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden gap-10 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm uppercase tracking-widest text-white transition hover:text-[#C8A96E]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Link
          href="/booking"
          className="hidden rounded-full border border-[#C8A96E] px-6 py-3 text-sm font-medium text-[#C8A96E] transition hover:bg-[#C8A96E] hover:text-black lg:block"
        >
          Book Now
        </Link>

        <button className="text-white lg:hidden">☰</button>
      </div>
    </motion.header>
  );
}
