/**
 * Milestone timeline data.
 *
 * To mark a "Coming Soon" milestone as completed:
 *   1. Move the entry from FUTURE_MILESTONES to COMPLETED_MILESTONES.
 *   2. Add the `date` (long form, e.g. "20 June 2026") and a short
 *      `description` to flesh it out.
 *   3. Keep ordering chronological by date.
 *
 * To add a new completed milestone:
 *   Append it to COMPLETED_MILESTONES with a date in the same format.
 *
 * The Home page teaser uses the first 4 items of COMPLETED_MILESTONES.
 * The About page timeline renders both arrays.
 */

export type CompletedMilestone = {
  id: string;
  date: string;
  shortDate: string;
  title: string;
  description: string;
};

export type FutureMilestone = {
  id: string;
  title: string;
};

export const COMPLETED_MILESTONES: CompletedMilestone[] = [
  {
    id: "company-founded",
    date: "24 February 2026",
    shortDate: "Feb 24, 2026",
    title: "Company Founded",
    description: "Clophy officially launched.",
  },
  {
    id: "first-cold-call",
    date: "16 March 2026",
    shortDate: "Mar 16, 2026",
    title: "First Cold Call",
    description: "The first real outreach call to a potential client.",
  },
  {
    id: "first-rejection",
    date: "16 March 2026",
    shortDate: "Mar 16, 2026",
    title: "First Rejection",
    description:
      "Turned down on the first day of calling. Kept going anyway.",
  },
  {
    id: "youtube-channel-launched",
    date: "28 March 2026",
    shortDate: "Mar 28, 2026",
    title: "YouTube Channel Launched",
    description: "Started documenting the journey on his birthday.",
  },
  {
    id: "first-demo-booked",
    date: "30 March 2026",
    shortDate: "Mar 30, 2026",
    title: "First Demo Booked",
    description: "A cleaning company agreed to see the system in action.",
  },
  {
    id: "first-youtube-video",
    date: "30 March 2026",
    shortDate: "Mar 30, 2026",
    title: "First YouTube Video Published",
    description: "The journey went public.",
  },
  {
    id: "second-demo-booked",
    date: "6 April 2026",
    shortDate: "Apr 6, 2026",
    title: "Second Demo Booked",
    description: "Momentum building.",
  },
  {
    id: "first-automation-install",
    date: "14 May 2026",
    shortDate: "May 14, 2026",
    title: "First Automation System Install Completed",
    description:
      "The system went live for a real client for the first time.",
  },
  {
    id: "first-client-website",
    date: "15 May 2026",
    shortDate: "May 15, 2026",
    title: "First Website Built for a Client",
    description: "A second service line launched.",
  },
  {
    id: "second-automation-install",
    date: "6 June 2026",
    shortDate: "Jun 6, 2026",
    title: "2nd Automation System Install",
    description: "The system went live for a second real client.",
  },
  {
    id: "tier-1-completed",
    date: "9 July 2026",
    shortDate: "Jul 9, 2026",
    title: "First 3 System Installs Completed",
    description: "Another system installed for a third client.",
  },
];

export const FUTURE_MILESTONES: FutureMilestone[] = [
  { id: "tier-2-completed", title: "System Installs 4 to 7 Completed" },
  { id: "tier-3-completed", title: "System Installs 8 to 10 Completed" },
  { id: "yt-1k", title: "First 1K YouTube Subscribers" },
  { id: "saas-launch", title: "SaaS Platform Launch" },
  { id: "yt-10k", title: "10K YouTube Subscribers" },
  { id: "yt-100k", title: "100K YouTube Subscribers" },
  { id: "yt-1m", title: "1 Million YouTube Subscribers" },
  { id: "saas-1000", title: "First 1000 SaaS Customers" },
];
