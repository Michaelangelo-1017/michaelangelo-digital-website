/**
 * YouTube Data API v3 helper.
 *
 * Resolves the @MichaelangeloBuilds channel via the `forHandle` lookup,
 * grabs the uploads playlist, and returns the latest videos.
 *
 * Used server-side only — keep YOUTUBE_API_KEY out of client bundles.
 */

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
};

const CHANNEL_HANDLE = "thefounderline";
const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

async function resolveChannelId(apiKey: string): Promise<string | null> {
  const url = new URL("https://www.googleapis.com/youtube/v3/channels");
  url.searchParams.set("part", "contentDetails");
  url.searchParams.set("forHandle", CHANNEL_HANDLE);
  url.searchParams.set("key", apiKey);

  const res = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as {
    items?: Array<{
      id: string;
      contentDetails?: { relatedPlaylists?: { uploads?: string } };
    }>;
  };
  const item = data.items?.[0];
  return item?.contentDetails?.relatedPlaylists?.uploads ?? null;
}

export async function fetchLatestVideos(
  limit = 6,
): Promise<YouTubeVideo[] | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return null;

  try {
    const uploadsPlaylistId = await resolveChannelId(apiKey);
    if (!uploadsPlaylistId) return null;

    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet,contentDetails");
    url.searchParams.set("maxResults", String(limit));
    url.searchParams.set("playlistId", uploadsPlaylistId);
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      items?: Array<{
        snippet: {
          title: string;
          description: string;
          publishedAt: string;
          resourceId: { videoId: string };
          thumbnails: {
            maxres?: { url: string };
            high?: { url: string };
            medium?: { url: string };
            default?: { url: string };
          };
        };
      }>;
    };

    const items = data.items ?? [];
    return items.map((it) => {
      const videoId = it.snippet.resourceId.videoId;
      const thumb =
        it.snippet.thumbnails.maxres?.url ??
        it.snippet.thumbnails.high?.url ??
        it.snippet.thumbnails.medium?.url ??
        it.snippet.thumbnails.default?.url ??
        "";
      return {
        id: videoId,
        title: it.snippet.title,
        description: it.snippet.description,
        publishedAt: it.snippet.publishedAt,
        thumbnail: thumb,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch {
    return null;
  }
}
