"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      {/* Premium Badge */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#C8A24A]/20 bg-[#C8A24A]/10 px-5 py-2 backdrop-blur-md"
      >
        <span className="h-2 w-2 rounded-full bg-[#C8A24A]" />

        <span className="text-xs font-medium uppercase tracking-[4px] text-[#C8A24A]">
          EST. 1998 • PREMIUM LEGAL REPRESENTATION
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl"
      >
        Protecting

        <br />

        <span className="text-[#C8A24A]">
          Justice.
        </span>

        <br />

        <span className="text-white">
          With Precision.
        </span>

      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-8 max-w-xl text-lg leading-8 text-zinc-400"
      >
        Strategic legal counsel for businesses and individuals who
        value precision, discretion and exceptional results.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-12 flex flex-wrap gap-5"
      >
        <button className="group flex items-center gap-3 rounded-2xl bg-[#C8A24A] px-9 py-5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(200,162,74,0.30)]">
          Schedule Consultation

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        <button className="rounded-2xl border border-white/10 px-9 py-5 transition-all duration-300 hover:border-[#C8A24A] hover:bg-white/5 hover:text-[#C8A24A]">
          Explore Services
        </button>
      </motion.div>

      {/* Stats */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.7 }}
        className="mt-20"
      >
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}