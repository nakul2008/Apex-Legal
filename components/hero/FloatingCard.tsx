"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FloatingCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
};

export default function FloatingCard({
  icon: Icon,
  value,
  label,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
        boxShadow: "0 0 40px rgba(200,162,74,.18)",
      }}
      transition={{ duration: 0.3 }}
      className={`group absolute rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#C8A24A]/40 ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">

        <div className="rounded-xl bg-[#C8A24A]/10 p-3">
          <Icon
            size={22}
            className="text-[#C8A24A] transition-transform duration-300 group-hover:rotate-12"
          />
        </div>

        <span className="text-2xl font-bold text-white">
          {value}
        </span>

      </div>

      <p className="text-sm text-zinc-400">
        {label}
      </p>
    </motion.div>
  );
}