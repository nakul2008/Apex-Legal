"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Veritas handled our business dispute with professionalism and exceptional attention to detail. Their strategy saved us both time and significant legal costs.",
    name: "Sarah Johnson",
    role: "CEO • Horizon Ltd.",
  },
  {
    quote:
      "The entire legal process was explained clearly from start to finish. We always felt informed, supported and confident throughout the case.",
    name: "Michael Carter",
    role: "Business Owner",
  },
  {
    quote:
      "Highly responsive, knowledgeable and genuinely committed to protecting our company's interests. I would confidently recommend them.",
    name: "Emily Roberts",
    role: "Startup Founder",
  },
];

export default function Testimonials() {
  return (
    
    <section
      id="testimonials"
      className="relative bg-[#050505] py-32"
      >

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#C8A24A]">
            Client Testimonials
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Trusted By
            <span className="text-[#C8A24A]">
              {" "}People.
            </span>
            <br />
            Proven By Results.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            Every successful case begins with trust. Here's what our clients
            say about working with Veritas Law Group.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="lg:mt-12">
            <TestimonialCard {...testimonials[0]} />
          </div>

          <div>
            <TestimonialCard {...testimonials[1]} />
          </div>

          <div className="lg:mt-12">
            <TestimonialCard {...testimonials[2]} />
          </div>

        </div>

      </div>

    </section>
  );
}