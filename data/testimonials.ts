/**
 * Testimonials displayed on the Home page.
 *
 * These are intentional placeholders styled to look like real
 * testimonials so they can be swapped in confidently when real
 * client quotes arrive.
 *
 * To replace a placeholder with a real testimonial:
 *   1. Set `isPlaceholder` to false.
 *   2. Replace `body` with the verbatim client quote.
 *   3. Replace `name` with the client's full name.
 *   4. Replace `company` with the client's business name.
 *   5. Set `reviewLink` to the Google review URL.
 *   6. Optionally add `role` (e.g. "Director").
 */

export type Testimonial = {
  id: string;
  /** Verbatim client review text. */
  body: string;
  name: string;
  company: string;
  role?: string;
  /** Google review (or placeholder) URL opened from the card logo. */
  reviewLink: string;
  isPlaceholder: boolean;
};

/** Quotes longer than this are truncated on the card with a Read more link. */
export const TESTIMONIAL_PREVIEW_CHARS = 140;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "komiklean-1",
    body:
      "Thanks for your service. You gave my business that professional touch. I will recommend this to business owners 👌",
    name: "Seyi Soetan",
    company: "Komiklean Multiservices",
    reviewLink: "https://www.google.com/search?sca_esv=37d9874a1f73b5fd&hl=en-GB&authuser=0&sxsrf=APpeQnsDsFELHpybMN4yCkmal_tJigtpfA:1784792903930&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_4oR0GjyqUrg28SSA2JULyhvjLImQW6EAzO8XHjkURnQVcxYQlXlYgzhfkO2o9PcCZQVr43kmiH5dAU1V8Aa3bUuvyfP&q=Clophy+Reviews&sa=X&ved=2ahUKEwiH6qTYp-iVAxW2T0EAHbG0IrsQ0bkNegQIJhAF&biw=1920&bih=992&dpr=2",
    isPlaceholder: false,
  },
  {
    id: "gina-2",
    body:
      "If you’re considering automating your LinkedIn posting, I highly recommend working with Michaelangelo. He was incredibly attentive to every detail, guided me through the entire process with patience and clarity. The experience was smooth from start to finish, and the final result has made a real impact. It was a pleasure working with someone who genuinely cares about delivering quality and achieving the best possible outcome.",
    name: "Gina-Cristina Năstasă",
    company: "Gina-Cristina Năstasă - Cabinet Individual de Psihologie",
    reviewLink: "https://www.google.com/search?sca_esv=37d9874a1f73b5fd&hl=en-GB&authuser=0&sxsrf=APpeQnsDsFELHpybMN4yCkmal_tJigtpfA:1784792903930&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_4oR0GjyqUrg28SSA2JULyhvjLImQW6EAzO8XHjkURnQVcxYQlXlYgzhfkO2o9PcCZQVr43kmiH5dAU1V8Aa3bUuvyfP&q=Clophy+Reviews&sa=X&ved=2ahUKEwiH6qTYp-iVAxW2T0EAHbG0IrsQ0bkNegQIJhAF&biw=1920&bih=992&dpr=2",
    isPlaceholder: false,
  },
  {
    id: "placeholder-3",
    body: "Testimonial coming soon.",
    name: "Client name pending",
    company: "Company name pending",
    reviewLink: "/",
    isPlaceholder: true,
  },
];
