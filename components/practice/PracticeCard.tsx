"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

type PracticeCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function PracticeCard({
  number,
  title,
  description,
  icon: Icon,
}: PracticeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#C8A24A]/50 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(200,162,74,0.15)]"
    >
      <div className="absolute left-0 top-0 h-full w-0 bg-[#C8A24A] transition-all duration-500 group-hover:w-1" />

      <div className="mb-10 flex items-start justify-between">
        <span className="text-5xl font-black text-white/10 transition-all duration-300 group-hover:text-[#C8A24A]/30">
          {number}
        </span>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 group-hover:border-[#C8A24A]/40 group-hover:bg-[#C8A24A]/10">
          <Icon
            size={26}
            className="text-[#C8A24A] transition-transform duration-300 group-hover:rotate-12"
          />
        </div>
      </div>

      <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-[#C8A24A]">
        {title}
      </h3>

      <p className="leading-8 text-zinc-400">
        {description}
      </p>

      <div className="mt-10 flex items-center gap-2 font-medium text-zinc-300 transition-all duration-300 group-hover:text-[#C8A24A]">
        Explore
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.div>
  );
}