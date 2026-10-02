import type { Metadata } from "next";
import { ShortsFeed } from "@/components/shorts-feed";
import { shorts } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Shorts - SmashTube",
  description: "Women's badminton shorts",
};

type ShortsPageProps = {
  searchParams: Promise<{ v?: string | string[] }>;
};

export default async function ShortsPage({ searchParams }: ShortsPageProps) {
  const value = (await searchParams).v;
  const requested = typeof value === "string" ? value : undefined;
  const startId = shorts.some((short) => short.id === requested) ? requested : undefined;

  return <ShortsFeed startId={startId} />;
}
