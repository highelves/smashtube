import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ShortsShelf } from "@/components/shorts-shelf";
import { TopicBar } from "@/components/topic-bar";
import { VideoCard } from "@/components/video-card";
import { filterVideos, readQuery, readTopic, topics } from "@/lib/videos";

type HomeProps = {
  searchParams: Promise<{ q?: string | string[]; topic?: string | string[] }>;
};

const gridClassName =
  "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3";

export async function generateMetadata({
  searchParams,
}: HomeProps): Promise<Metadata> {
  const query = readQuery((await searchParams).q).trim();

  return {
    title: query ? `${query} - SmashTube` : "SmashTube",
    description: "Women's badminton videos",
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const query = readQuery(params.q).trim();
  const topic = readTopic(params.topic);
  const topicLabel = topics.find((item) => item.id === topic)?.label ?? "All";
  const results = filterVideos(query, topic);
  const showShorts = !query && topic === "all" && results.length > 6;
  const lead = showShorts ? results.slice(0, 6) : results;
  const rest = showShorts ? results.slice(6) : [];

  return (
    <section
      aria-label={query ? `Results for ${query}` : topic === "all" ? "Recommended" : topicLabel}
      className="space-y-8"
    >
      <div className="sticky top-16 z-10 -mx-4 -mt-4 bg-white">
        <Suspense fallback={<div className="h-12" />}>
          <TopicBar />
        </Suspense>
      </div>
      {results.length > 0 ? (
        <>
          <VideoGrid videos={lead} eagerCount={3} />
          {showShorts ? <ShortsShelf /> : null}
          {rest.length > 0 ? <VideoGrid videos={rest} /> : null}
        </>
      ) : (
        <div className="px-2 py-16 text-center">
          <p className="text-lg text-[#0f0f0f]">
            {query ? `No videos match “${query}”.` : `No videos in ${topicLabel}.`}
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex h-10 items-center rounded-full bg-[#0f0f0f] px-4 text-sm font-medium text-white"
          >
            Clear search
          </Link>
        </div>
      )}
    </section>
  );
}

function VideoGrid({
  videos,
  eagerCount = 0,
}: {
  videos: ReturnType<typeof filterVideos>;
  eagerCount?: number;
}) {
  return (
    <ul className={gridClassName}>
      {videos.map((video, index) => (
        <li key={video.id}>
          <VideoCard video={video} eager={index < eagerCount} />
        </li>
      ))}
    </ul>
  );
}
