"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "500+",
    label: "Cases Solved",
  },
  {
    number: "98%",
    label: "Success Rate",
  },
  {
    number: "25+",
    label: "Years Experience",
  },
  {
    number: "24/7",
    label: "Legal Support",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15 * index,
          }}
          className="group"
        >
          <h2 className="text-4xl font-black text-[#C8A24A] transition duration-300 group-hover:scale-110">
            {item.number}
          </h2>

          <p className="mt-2 text-sm uppercase tracking-[2px] text-zinc-500">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}