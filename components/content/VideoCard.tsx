"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { YouTubeVideo } from "@/lib/youtube";
import { cardSpringUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type VideoCardProps = {
  video: YouTubeVideo;
  className?: string;
};

export function VideoCard({ video, className }: VideoCardProps) {
  const hasThumb = Boolean(video.thumbnail);

  return (
    <motion.article
      variants={cardSpringUp}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-lg",
        className,
      )}
    >
      <Link
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-video w-full overflow-hidden bg-ink"
      >
        {hasThumb ? (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-navy/30 text-xs uppercase tracking-label text-white/50">
            No thumbnail
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl leading-snug text-ink text-balance line-clamp-3">
          {video.title}
        </h3>
        <div className="mt-auto pt-6">
          <Link
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-navy transition hover:text-amber"
          >
            Watch on YouTube
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
