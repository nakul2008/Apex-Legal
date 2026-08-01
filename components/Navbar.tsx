"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Scale } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Practice Areas", href: "#practice" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);

    if (!element) return;

    const navbarHeight = 80;

    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#C8A24A]/20 bg-black/80 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}

        <button
          onClick={() => scrollToSection("#home")}
          className="group flex items-center gap-3"
        >
          <div className="rounded-xl border border-[#C8A24A]/30 bg-[#C8A24A]/10 p-2 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Scale
              size={22}
              className="text-[#C8A24A]"
            />
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-white">
              VERITAS
            </h2>

            <p className="text-[10px] uppercase tracking-[5px] text-[#C8A24A]">
              LAW GROUP
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="group relative text-sm font-medium text-zinc-300 transition duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C8A24A] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden rounded-xl bg-[#C8A24A] px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,162,74,0.45)] md:block"
          >
            Book Consultation
          </button>

          <button className="rounded-xl border border-white/10 p-3 text-white transition hover:border-[#C8A24A] md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}