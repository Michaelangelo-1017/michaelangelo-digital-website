"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { FadeInView } from "@/components/shared/FadeInView";
import { ImageReveal } from "@/components/shared/ImageReveal";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

export function OriginStory() {
  return (
    <section className="relative bg-ink text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute -top-32 -right-20 w-[40rem] h-[40rem] rounded-full bg-navy/30 blur-3xl opacity-60"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <FadeInView>
          <p className="text-xs uppercase tracking-label font-semibold text-amber mb-8">
            The story
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.p
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] italic text-white text-balance"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-amber not-italic">“</span>It started with
              a spreadsheet.<span className="text-amber not-italic">”</span>
            </motion.p>

            <motion.div
              className="mt-10 space-y-6 text-lg sm:text-xl leading-relaxed text-white/80 max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14 } },
              }}
            >
              <motion.p variants={fadeUp}>
              I was building my first company and had no real system in place. Every enquiry that came in had to be handled by me, personally, in real time. Every follow-up email was written from scratch. Every piece of data lived in my head or in a tab I was hoping I would not accidentally close.
              </motion.p>
              <motion.p variants={fadeUp}>
              At some point I stopped and thought, if I am spending this much time just keeping up with the admin, how much am I actually losing? How many messages had gone unanswered for too long? How many potential customers had moved on because I was too slow?
              </motion.p>
              <motion.p variants={fadeUp}>
              That question is what led to Clophy. Because when I looked around, I realised I was not the only one doing this. Most small business owners are running their companies the same way, buried in the repetitive stuff, doing manually what could easily be done automatically, and losing time and money because of it.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white">
              We build the systems that fix that. The ones that handle the enquiries, the follow-ups, and the admin, so that the people running these businesses can get back to the work they actually started the business to do.
              </motion.p>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            {/*
              Founder photo: add a file at public/images/founder.jpg (or change src below).
              Use a 4:5-oriented portrait; object-cover fills the frame inside the navy border.
            */}
            <ImageReveal className="rounded-3xl border-2 border-amber-500 aspect-[4/5] bg-navy/40">
              <Image
                src="/images/founder.jpg"
                alt="Michaelangelo Agbodike, founder of Clophy"
                fill
                className="object-cover object-center rounded-3xl"
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
