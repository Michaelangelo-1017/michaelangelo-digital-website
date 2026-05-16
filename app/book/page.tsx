import type { Metadata } from "next";
import { BookPageContent } from "@/components/book/BookPageContent";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Book a free 30-minute call with Michaelangelo Digital. No pitch — just a conversation about what your business needs.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a Free Call | Michaelangelo Digital",
    description:
      "Pick a time that works for you. No pitch. No pressure. Just a conversation.",
    url: "/book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Call | Michaelangelo Digital",
    description:
      "Pick a time that works for you. No pitch. No pressure. Just a conversation.",
  },
};

export default function BookPage() {
  return <BookPageContent />;
}
