import { NextResponse } from "next/server";
import { fetchLatestVideos } from "@/lib/youtube";

export const dynamic = "force-dynamic";

/**
 * Optional JSON endpoint for the latest six uploads from @MichaelangeloBuilds.
 * The Content page calls `fetchLatestVideos` directly for SSR; this route is
 * useful for debugging or future client-side refreshes.
 */
export async function GET() {
  const videos = await fetchLatestVideos(6);
  return NextResponse.json({ videos });
}
