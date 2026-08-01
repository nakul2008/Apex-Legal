"use client";

import {
  Building2,
  Scale,
  Users,
  Home,
  Briefcase,
  Shield,
} from "lucide-react";

import PracticeCard from "./PracticeCard";

const practiceAreas = [
  {
    number: "01",
    title: "Corporate Law",
    description:
      "Business formation, mergers, contracts, compliance and corporate advisory services.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Criminal Defense",
    description:
      "Strategic legal representation with complete confidentiality and courtroom expertise.",
    icon: Scale,
  },
  {
    number: "03",
    title: "Family Law",
    description:
      "Divorce, custody, adoption and family dispute resolution with compassionate guidance.",
    icon: Users,
  },
  {
    number: "04",
    title: "Real Estate",
    description:
      "Property transactions, documentation and real estate dispute management.",
    icon: Home,
  },
  {
    number: "05",
    title: "Business Litigation",
    description:
      "Resolving commercial disputes while protecting your company's interests.",
    icon: Briefcase,
  },
  {
    number: "06",
    title: "Intellectual Property",
    description:
      "Trademark, copyright and patent protection for businesses and creators.",
    icon: Shield,
  },
];

export default function Practice() {
  return (
    <section
      id="practice"
      className="bg-black py-32">
      <div className="container">

        <div className="mb-20 max-w-3xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-[#C8A24A]">
            Practice Areas
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Legal Expertise
            <br />
            Built Around
            <span className="text-[#C8A24A]"> Results.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            We provide strategic legal services tailored for businesses,
            entrepreneurs and individuals across a wide range of practice
            areas.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {practiceAreas.map((item) => (
            <PracticeCard
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}

        </div>

      </div>
    </section>
  );
}