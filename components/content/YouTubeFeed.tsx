"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { CTAButton } from "@/components/shared/CTAButton";
import { VideoCard } from "@/components/content/VideoCard";
import type { YouTubeVideo } from "@/lib/youtube";
import { CONTACT_DETAILS } from "@/data/navigation";
import { staggerContainer } from "@/lib/animations";

type YouTubeFeedProps = {
  videos: YouTubeVideo[] | null;
};

export function YouTubeFeed({ videos }: YouTubeFeedProps) {
  const ready = videos !== null && videos.length > 0;

  return (
    <section className="bg-cream py-24 sm:py-28 lg:py-32">
      <Container size="wide">
        <SectionTitle heading="Latest from YouTube" />

        {!ready ? (
          <motion.div
            className="mt-14 rounded-3xl border border-dashed border-border bg-white px-8 py-16 text-center shadow-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            role="status"
          >
            <p className="font-display text-2xl text-ink sm:text-3xl text-balance">
              Videos loading, check back soon
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {videos!.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </motion.div>
        )}

        <motion.div
          className="mt-12 flex justify-start sm:justify-end"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <CTAButton
            href={CONTACT_DETAILS.youtube}
            external
            variant="ghost-light"
            withArrow
          >
            View Channel
          </CTAButton>
        </motion.div>
      </Container>
    </section>
  );
}
