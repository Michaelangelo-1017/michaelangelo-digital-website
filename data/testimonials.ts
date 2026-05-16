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
    id: "placeholder-1",
    quote: "Testimonial coming soon.",
    name: "Client name pending",
    company: "Company name pending",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    quote: "Testimonial coming soon.",
    name: "Client name pending",
    company: "Company name pending",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    quote: "Testimonial coming soon.",
    name: "Client name pending",
    company: "Company name pending",
    isPlaceholder: true,
  },
];
