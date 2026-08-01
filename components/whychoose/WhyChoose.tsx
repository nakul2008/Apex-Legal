"use client";

import { motion } from "framer-motion";
import {
  Award,
  Scale,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Award,
    value: "25+",
    title: "Years Experience",
    description:
      "Decades of successful legal representation across multiple practice areas.",
  },
  {
    icon: Scale,
    value: "500+",
    title: "Cases Won",
    description:
      "Proven courtroom experience delivering strategic legal victories.",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    title: "Client Success",
    description:
      "Trusted by individuals and businesses for consistent legal excellence.",
  },
  {
    icon: Clock3,
    value: "24/7",
    title: "Legal Support",
    description:
      "Always available whenever your legal matters require immediate attention.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] py-32"
    >

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C8A24A]/5 blur-[180px]" />

      <div className="container relative z-10 grid items-center gap-20 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#C8A24A]">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Built On
            <br />
            <span className="text-[#C8A24A]">
              Trust.
            </span>
            <br />
            Driven By Results.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Every client deserves strategic thinking, complete transparency,
            and dedicated legal representation. Our team combines modern legal
            expertise with decades of courtroom experience.
          </p>

          <button className="mt-10 flex items-center gap-3 rounded-xl bg-[#C8A24A] px-8 py-4 font-semibold text-black transition hover:scale-105">
            Learn More
            <ArrowRight size={18} />
          </button>

        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">

          {features.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              value={item.value}
              title={item.title}
              description={item.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}