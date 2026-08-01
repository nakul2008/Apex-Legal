"use client";

import { motion } from "framer-motion";

const companies = [
  "FORTUNE 500",
  "GLOBAL CORP",
  "LEX PARTNERS",
  "NEXUS GROUP",
  "VERITAS",
  "PRESTIGE",
];

export default function Trusted() {
  return (
    <section className="border-y border-white/10 bg-black py-12">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-sm uppercase tracking-[6px] text-zinc-500"
        >
          Trusted by Businesses Worldwide
        </motion.p>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <motion.div
              key={company}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-lg font-semibold tracking-wider text-zinc-400 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}