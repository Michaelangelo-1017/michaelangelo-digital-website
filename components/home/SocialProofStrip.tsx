"use client";

import { motion } from "framer-motion";
import { VIEWPORT_ONCE } from "@/lib/animations";

const STATEMENTS = [
  "Built by a small business owner, for small business owners.",
  "Reliable and efficient, just like you.",
  "Relationships built on trust and transparency.",
];

export function SocialProofStrip() {
  return (
    <section className="bg-navy text-white py-8 sm:py-10">
      <motion.div
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between sm:justify-around gap-4 sm:gap-2 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.6 }}
      >
        {STATEMENTS.map((s, i) => (
          <div
            key={s}
            className="flex items-center sm:flex-1 justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-white"
          >
            <span className="text-balance">{s}</span>
            {i < STATEMENTS.length - 1 ? (
              <span
                className="hidden sm:inline-block h-5 w-px bg-white/25"
                aria-hidden="true"
              />
            ) : null}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
