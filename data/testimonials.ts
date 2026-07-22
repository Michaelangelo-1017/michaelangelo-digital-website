/**
 * Testimonials displayed on the Home page.
 *
 * These are intentional placeholders styled to look like real
 * testimonials so they can be swapped in confidently when real
 * client quotes arrive.
 *
 * To replace a placeholder with a real testimonial:
 *   1. Set `isPlaceholder` to false.
 *   2. Replace `quote` with the verbatim client quote.
 *   3. Replace `name` with the client's full name.
 *   4. Replace `company` with the client's business name.
 *   5. Optionally add `role` (e.g. "Director").
 */

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
  role?: string;
  isPlaceholder: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "komiklean-1",
    quote: "Thanks for your service. You gave my business that professional touch. I will recommend this to business owners 👌",
    name: "Seyi Soetan",
    company: "Komiklean Multiservices",
    isPlaceholder: false,
  },
  {
    id: "gina-2",
    quote: "If you’re considering automating your LinkedIn posting, I highly recommend working with Michaelangelo. He was incredibly attentive to every detail, guided me through the entire process with patience and clarity. The experience was smooth from start to finish, and the final result has made a real impact. It was a pleasure working with someone who genuinely cares about delivering quality and achieving the best possible outcome.",
    name: "Gina-Cristina Năstasă",
    company: "Gina-Cristina Năstasă - Cabinet Individual de Psihologie",
    isPlaceholder: false,
  },
  {
    id: "placeholder-3",
    quote: "Testimonial coming soon.",
    name: "Client name pending",
    company: "Company name pending",
    isPlaceholder: true,
  },
];
