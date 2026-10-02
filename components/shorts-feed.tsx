"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { shorts } from "@/lib/videos";
import { getWatchItem } from "@/lib/watch";

export function ShortsFeed({ startId }: { startId?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const target = startId ? scroller?.querySelector<HTMLElement>(`#${CSS.escape(startId)}`) : null;
    if (!scroller || !target) {
      return;
    }

    scroller.scrollTo({ top: target.offsetTop });
  }, [startId]);

  return (
    <div
      ref={scrollerRef}
      className="fixed top-16 right-0 bottom-0 left-0 z-10 snap-y snap-mandatory overflow-y-auto overscroll-y-contain bg-page lg:left-60"
    >
      {shorts.map((short) => {
        const details = getWatchItem(short.id);

        return (
          <section
            key={short.id}
            id={short.id}
            aria-label={short.title}
            className="flex h-full w-full shrink-0 snap-start items-center justify-center overflow-hidden [container-type:size] [scroll-snap-stop:always]"
          >
            <article className="relative aspect-[9/16] h-[min(100cqh,calc(100cqw*16/9))] w-auto max-w-full overflow-hidden bg-black sm:rounded-2xl">
              <Image
                src={short.thumbnail}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority={short.id === (startId ?? shorts[0]?.id)}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h2 className="text-base font-semibold">{short.title}</h2>
                <p className="mt-1 text-sm text-white/80">
                  {details?.channel ?? "SmashTube"} · {short.views}
                  {details ? ` · ${details.duration}` : ""}
                </p>
              </div>
            </article>
          </section>
        );
      })}
    </div>
  );
}
