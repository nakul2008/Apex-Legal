"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  value,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 0 45px rgba(200,162,74,.18)",
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-[#C8A24A]/50 hover:bg-white/[0.05]"
    >
      <div className="absolute left-0 top-0 h-full w-0.5 bg-[#C8A24A] opacity-0 transition-all duration-500 group-hover:opacity-100" />

      <div className="mb-6 flex items-center justify-between">

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 group-hover:border-[#C8A24A]/40 group-hover:bg-[#C8A24A]/10">
          <Icon
            size={28}
            className="text-[#C8A24A] transition-transform duration-300 group-hover:rotate-12"
          />
        </div>

        <span className="text-5xl font-black text-white/10 transition-colors duration-300 group-hover:text-[#C8A24A]/25">
          {value}
        </span>

      </div>

      <h3 className="mb-3 text-2xl font-bold transition-colors duration-300 group-hover:text-[#C8A24A]">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}