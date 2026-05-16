"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FadeInView } from "@/components/shared/FadeInView";
import { YoutubeIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";
import { CONTACT_DETAILS } from "@/data/navigation";

export function FullOriginStory() {
  return (
    <section className="relative bg-ink text-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full bg-navy/40 blur-3xl opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-20 w-[36rem] h-[36rem] rounded-full bg-amber/10 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <FadeInView>
          <p className="text-xs uppercase tracking-label font-semibold text-amber mb-8">
            The story
          </p>
        </FadeInView>

        <motion.p
          className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] italic text-white text-balance max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-amber not-italic">“</span>It started with a
          spreadsheet.<span className="text-amber not-italic">”</span>
        </motion.p>

        <motion.div
          className="mt-12 max-w-3xl space-y-7 text-lg sm:text-xl leading-relaxed text-white/80"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p variants={fadeUp}>
              I was building my first company and had no real system in place. Every enquiry that came in had to be handled by me, personally, in real time. Every follow-up email was written from scratch. Every piece of data lived in my head or in a tab I was hoping I would not accidentally close.
              </motion.p>
              <motion.p variants={fadeUp}>
              At some point I stopped and thought, if I am spending this much time just keeping up with the admin, how much am I actually losing? How many messages had gone unanswered for too long? How many potential customers had moved on because I was too slow?
              </motion.p>
              <motion.p variants={fadeUp}>
              That question is what led to Michaelangelo Digital. Because when I looked around, I realised I was not the only one doing this. Most small business owners are running their companies the same way, buried in the repetitive stuff, doing manually what could easily be done automatically, and losing time and money because of it.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white">
              We build the systems that fix that. The ones that handle the enquiries, the follow-ups, and the admin, so that the people running these businesses can get back to the work they actually started the business to do.
              </motion.p>
        </motion.div>

        <FadeInView className="mt-12 flex flex-col sm:flex-row gap-3">
          <a
            href={CONTACT_DETAILS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl px-6 py-4 transition"
          >
            <span className="flex items-center gap-3">
              <YoutubeIcon className="h-5 w-5 text-amber" />
              <span className="text-xs uppercase tracking-label font-semibold">
                Follow on YouTube
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={CONTACT_DETAILS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-2xl px-6 py-4 transition"
          >
            <span className="flex items-center gap-3">
              <LinkedinIcon className="h-5 w-5 text-amber" />
              <span className="text-xs uppercase tracking-label font-semibold">
                Follow on LinkedIn
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-white transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </FadeInView>
      </Container>
    </section>
  );
}
