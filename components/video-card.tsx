import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { ThumbnailLabel } from "@/components/thumbnail-label";
import { thumbnailLabel, type Video } from "@/lib/videos";

type VideoCardProps = {
  video: Video;
  eager?: boolean;
};

export function VideoCard({ video, eager = false }: VideoCardProps) {
  return (
    <article>
      <Link href={`/watch/${video.id}`} className="block rounded-xl outline-offset-4">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-soft">
        <Image
          src={video.thumbnail}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={eager ? "eager" : "lazy"}
          className="object-cover"
        />
        <ThumbnailLabel label={thumbnailLabel(video.id)} />
        <span className="absolute right-1.5 bottom-1.5 rounded bg-black/80 px-1 py-0.5 text-[10px] font-semibold text-white">
          {video.duration}
        </span>
      </div>
      <div className="pt-2 pr-6">
        <h2 className="line-clamp-2 text-sm leading-5 font-semibold text-ink">
          {video.title}
        </h2>
        <p className="mt-1 flex items-center gap-1 truncate text-xs text-muted">
          <span className="truncate">{video.channel}</span>
          <CheckIcon className="size-3 shrink-0 text-muted" />
          <span className="sr-only">Verified</span>
          <span className="truncate">
            {video.views} · {video.uploadedAt}
          </span>
        </p>
      </div>
      </Link>
    </article>
  );
}
