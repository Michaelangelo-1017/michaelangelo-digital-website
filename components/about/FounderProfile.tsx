"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { FadeInView } from "@/components/shared/FadeInView";
import { ImageReveal } from "@/components/shared/ImageReveal";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";
import { FOUNDER } from "@/data/founder";

export function FounderProfile() {
  return (
    <section className="bg-cream py-24 sm:py-28 lg:py-32">
      <Container size="wide">
        <FadeInView>
          <p className="text-xs uppercase tracking-label font-semibold text-amber mb-6">
            The founder
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <FadeInView>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] text-balance">
                Built by one person, on purpose.
              </h2>
            </FadeInView>

            <motion.dl
              className="mt-10 divide-y divide-border border-y border-border"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {FOUNDER.map((field) => (
                <motion.div
                  key={field.label}
                  variants={fadeUp}
                  className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4"
                >
                  <dt className="text-xs uppercase tracking-label font-semibold text-muted pt-1">
                    {field.label}
                  </dt>
                  <dd className="text-base sm:text-lg text-ink leading-relaxed">
                    {field.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
            <ImageReveal className="relative rounded-3xl border-4 border-navy aspect-[4/5] bg-navy/5">
              <Image
                  src="/images/founder.jpg"
                  alt="Michaelangelo Agbodike, founder of Michaelangelo Digital"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  priority={false}
                />
            </ImageReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
