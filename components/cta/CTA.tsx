"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section 
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-32"
    >

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A24A]/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,74,.08),transparent_65%)]" />

      </div>

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-16 text-center backdrop-blur-xl"
        >

          <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#C8A24A]">
            Free Consultation
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Ready To Protect
            <br />
            <span className="text-[#C8A24A]">
              Your Rights?
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether you're facing a legal dispute or planning your next
            business move, our experienced attorneys are ready to guide
            you with confidence and clarity.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(200,162,74,.35)",
              }}
              whileTap={{ scale: .98 }}
              className="group flex items-center gap-3 rounded-2xl bg-[#C8A24A] px-9 py-5 font-semibold text-black transition-all duration-300"
            >
              Schedule Consultation

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </motion.button>

            <motion.button
              whileHover={{
                y: -3,
              }}
              className="flex items-center gap-3 rounded-2xl border border-white/10 px-9 py-5 text-white transition-all duration-300 hover:border-[#C8A24A]/50 hover:bg-white/[0.03]"
            >
              <PhoneCall
                size={19}
                className="text-[#C8A24A]"
              />

              Call Our Office

            </motion.button>

          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-10 text-sm text-zinc-500">

            <span>✓ Confidential Consultation</span>

            <span>✓ 500+ Successful Cases</span>

            <span>✓ Available 24/7</span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}