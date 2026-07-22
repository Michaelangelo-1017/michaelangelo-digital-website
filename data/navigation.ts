export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Content", href: "/content" },
  { label: "Contact", href: "/contact" },
];

export const BOOK_LINK = { label: "Book a Call", href: "/book" };

export const FOOTER_GROUPS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    heading: "Services",
    links: [
      {
        label: "Operations Systems Assessment",
        href: "/services#operations-systems-assessment",
      },
      { label: "CarePath360", href: "/services#carepath360" },
      { label: "Website Build", href: "/services#website-build" },
      { label: "Book a Call", href: "/book" },
    ],
  },
  {
    heading: "Content",
    links: [
      {
        label: "YouTube channel",
        href: "https://www.youtube.com/@thefounderline",
      },
      {
        label: "LinkedIn profile",
        href: "https://www.linkedin.com/in/michaelangelo-agbodike-a91466263",
      },
    ],
  },
];

export const CONTACT_DETAILS = {
  phone: "07448022179",
  phoneInternational: "+447448022179",
  email: "michael@clophy.com",
  whatsapp: "https://wa.me/447448022179",
  calendly: "https://calendly.com/michael-michaelangelo-digital/30min",
  youtube: "https://www.youtube.com/@thefounderline",
  linkedin: "https://www.linkedin.com/in/michaelangelo-agbodike-a91466263",
};
