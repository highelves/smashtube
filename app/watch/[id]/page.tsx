import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckIcon } from "@/components/icons";
import { Comments } from "@/components/comments";
import { UpNext } from "@/components/up-next";
import { WatchPlayer } from "@/components/watch-player";
import { allWatchIds, getWatchItem, initialComments, recommendedFor } from "@/lib/watch";

type WatchPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return allWatchIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: WatchPageProps): Promise<Metadata> {
  const item = getWatchItem((await params).id);
  return {
    title: item ? `${item.title} - SmashTube` : "SmashTube",
    description: item?.description ?? "Women's badminton videos",
  };
}

export default async function WatchPage({ params }: WatchPageProps) {
  const item = getWatchItem((await params).id);
  if (!item) {
    notFound();
  }

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start xl:gap-6">
      <div key={item.id} className="min-w-0">
        <WatchPlayer
          title={item.title}
          thumbnail={item.thumbnail}
          duration={item.duration}
          tall={item.kind === "short"}
        />
        <h1 className="mt-3 text-xl leading-7 font-semibold">{item.title}</h1>
        <p className="mt-2 flex items-center gap-1 text-sm text-[#606060]">
          <span>{item.channel}</span>
          <CheckIcon className="size-3.5 shrink-0 text-[#606060]" />
          <span className="sr-only">Verified</span>
          <span>
            {item.views} · {item.uploadedAt}
          </span>
        </p>
        <section aria-label="Description" className="mt-4 rounded-xl bg-[#f2f2f2] px-3 py-3 text-sm leading-5">
          <p>{item.description}</p>
        </section>
        <Comments initialComments={initialComments(item)} />
      </div>
      <div className="mt-8 xl:mt-0">
        <UpNext items={recommendedFor(item.id)} />
      </div>
    </div>
  );
}
