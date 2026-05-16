"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Mail, Globe } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import {
  cardSpringUp,
  staggerContainer,
  VIEWPORT_ONCE,
} from "@/lib/animations";

const CARDS = [
  {
    title: "Booked Job System",
    description:
      "A done-for-you enquiry automation system for cleaning companies. Never miss a lead, never chase a customer manually again.",
    tone: "navy" as const,
    icon: Mail,
    cta: "Explore the system",
  },
  {
    title: "Website Design and Build",
    description:
      "Clean, fast, modern websites built to represent your business properly and convert visitors into customers.",
    tone: "ink" as const,
    icon: Globe,
    cta: "See the build offer",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-cream py-24 sm:py-28 lg:py-32">
      <Container size="wide">
        <SectionTitle
          label="What we do"
          heading="We build the systems that give you your time back."
        />

        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          {CARDS.map((card) => {
            const Icon = card.icon;
            const isNavy = card.tone === "navy";
            return (
              <motion.div key={card.title} variants={cardSpringUp}>
                <Link
                  href="/services"
                  className={
                    "group block relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12 h-full transition-transform duration-300 hover:-translate-y-1 " +
                    (isNavy
                      ? "bg-navy text-white"
                      : "bg-ink text-white border border-white/5")
                  }
                >
                  <div className="flex items-start justify-between gap-6 mb-12">
                    <div
                      className={
                        "inline-flex items-center justify-center h-14 w-14 rounded-2xl " +
                        (isNavy ? "bg-amber text-ink" : "bg-white/5 text-amber")
                      }
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </div>
                    <ArrowUpRight
                      className="h-7 w-7 text-white/30 transition group-hover:text-amber group-hover:-translate-y-1 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-balance">
                    {card.title}
                  </h3>
                  <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-md">
                    {card.description}
                  </p>

                  <div className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-label font-semibold text-amber">
                    {card.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
