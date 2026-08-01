"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 0 45px rgba(200,162,74,.18)",
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:border-[#C8A24A]/40 hover:bg-white/[0.05]"
    >
      <Quote
        size={48}
        className="mb-8 text-[#C8A24A]/40 transition duration-300 group-hover:rotate-12 group-hover:text-[#C8A24A]"
      />

      <p className="text-lg leading-9 text-zinc-300">
        "{quote}"
      </p>

      <div className="mt-8 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill="#C8A24A"
            className="text-[#C8A24A]"
          />
        ))}
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#C8A24A]">
          {name}
        </h3>

        <p className="mt-1 text-sm text-zinc-500">
          {role}
        </p>
      </div>
    </motion.div>
  );
}