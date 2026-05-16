/**
 * Services page content.
 *
 * To update pricing:
 *   - Edit the `price` and `priceLabel` on a tier in BJS_TIERS.
 *   - Update `slotsBadge` on Tier 1 (or remove it) once the free
 *     installs are gone.
 *
 * To update the bundle discount:
 *   - Edit WEBSITE_BUILD.bundleNote.
 *
 * To update the BJS feature list:
 *   - Add / edit entries in BJS_FEATURES.
 */

export type BJSTier = {
  id: string;
  tier: string;
  price: string;
  priceLabel?: string;
  description: string;
  slotsBadge?: string;
  highlight?: boolean;
};

export const BJS_TIERS: BJSTier[] = [
  {
    id: "tier-1",
    tier: "Tier 1",
    price: "FREE",
    priceLabel: "First 3 installs",
    description:
      "First three installs are free as we validate the system with real businesses.",
    slotsBadge: "1 slot remaining",
    highlight: true,
  },
  {
    id: "tier-2",
    tier: "Tier 2",
    price: "£399",
    description: "Installs 4 to 7.",
  },
  {
    id: "tier-3",
    tier: "Tier 3",
    price: "£699",
    description: "Installs 8 and above.",
  },
];

export const BJS_FEATURES: { title: string }[] = [
  { title: "Captures quote requests automatically." },
  { title: "Sends instant customer confirmation emails." },
  { title: "Notifies the owner immediately." },
  {
    title:
      "Sends up to 4 owner reminder emails 15 minutes apart if the lead is not actioned.",
  },
  { title: "Tracks all leads in a central Google Sheet." },
  { title: "Prevents missed or forgotten enquiries." },
];

export const WEBSITE_BUILD = {
  priceFrom: "£300",
  bundleNote:
    "Book a website build and a BJS install together and save £100 off the combined price.",
};
