"use client";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040404]">

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#C8A24A]/5 blur-[180px]" />
      </div>

      <div className="container relative z-10 py-14">

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Left */}

          <div>

            <h2 className="text-6xl font-black tracking-tight text-[#C8A24A]">
              VERITAS
            </h2>

            <p className="mt-6 max-w-sm text-lg leading-8 text-zinc-400">
              Protecting justice through strategic legal representation,
              unwavering integrity and decades of courtroom excellence.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-4">

              {[
                "Home",
                "Practice Areas",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer text-zinc-400 transition-all duration-300 hover:translate-x-2 hover:text-[#C8A24A]"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-zinc-400">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C8A24A]" />
                <span>+1 (800) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#C8A24A]" />
                <span>hello@veritaslaw.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#C8A24A]" />
                <span>New York, USA</span>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 VERITAS LAW GROUP. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 transition-all duration-300 hover:border-[#C8A24A] hover:text-[#C8A24A]"
          >

            Back To Top

            <ArrowUp
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />

          </button>

        </div>

      </div>

    </footer>
  );
}