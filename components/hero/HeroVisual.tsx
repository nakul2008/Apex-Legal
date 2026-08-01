"use client";

import { motion } from "framer-motion";
import {
  Scale,
  ShieldCheck,
  Phone,
  Award,
} from "lucide-react";

import FloatingCard from "./FloatingCard";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative hidden h-[680px] w-full items-center justify-center lg:flex"
    >
      {/* Background Glow */}

      <div className="absolute h-[700px] w-[700px] rounded-full bg-[#C8A24A]/10 blur-[180px]" />

      <div className="absolute h-[500px] w-[500px] rounded-full border border-[#C8A24A]/10" />

      {/* Premium Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[420px] w-[420px] rounded-full border border-[#C8A24A]/20"
      />

      {/* Center Card */}

      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: .3,
        }}
        className="glass relative z-20 flex h-[260px] w-[260px] flex-col items-center justify-center rounded-[40px] border border-[#C8A24A]/30 backdrop-blur-xl"
      >
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#C8A24A]/10 to-transparent" />

        <Scale
          size={46}
          className="relative z-10 mb-5 text-[#C8A24A]"
        />

        <h2 className="relative z-10 text-4xl font-black tracking-tight text-[#C8A24A]">
          VERITAS
        </h2>

        <p className="relative z-10 mt-3 text-xs uppercase tracking-[7px] text-zinc-400">
          LAW GROUP
        </p>
      </motion.div>

      {/* Floating Cards */}

            <FloatingCard
        icon={ShieldCheck}
        value="98%"
        label="Client Satisfaction"
        className="left-0 top-24 w-[180px]"
      />

      <FloatingCard
        icon={Award}
        value="25+"
        label="Years Experience"
        className="right-0 top-20 w-[180px]"
      />

      <FloatingCard
        icon={Phone}
        value="24/7"
        label="Legal Support"
        className="right-8 bottom-20 w-[180px]"
      />

      {/* Floating Gold Particles */}

      <motion.div
        animate={{
          y: [-8, 8, -8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-16 top-16 h-2 w-2 rounded-full bg-[#C8A24A]"
      />

      <motion.div
        animate={{
          y: [10, -10, 10],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-20 bottom-24 h-3 w-3 rounded-full bg-[#C8A24A]/80"
      />

      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-10 top-40 h-1.5 w-1.5 rounded-full bg-white/70"
      />
          </motion.div>
  );
}