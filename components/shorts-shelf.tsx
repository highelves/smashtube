import Image from "next/image";
import Link from "next/link";
import { ThumbnailLabel } from "@/components/thumbnail-label";
import { shorts } from "@/lib/videos";

export function ShortsShelf() {
  return (
    <section aria-label="Shorts" className="py-2">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#0f0f0f]">
        <ShortsMark />
        Shorts
      </h2>
      <ul className="flex gap-3 overflow-x-auto pb-2">
        {shorts.map((short) => (
          <li key={short.id} className="w-40 shrink-0 sm:w-44">
            <article>
              <Link href={`/watch/${short.id}`} className="block rounded-xl outline-offset-4">
              <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-[#f2f2f2]">
                <Image
                  src={short.thumbnail}
                  alt=""
                  fill
                  sizes="176px"
                  className="object-cover"
                />
                <ThumbnailLabel
                  compact
                  label={{
                    text: short.hook,
                    place: short.place,
                    font: short.font,
                    tilt: short.tilt,
                  }}
                />
              </div>
              <h3 className="mt-2 line-clamp-2 text-sm leading-5 font-semibold text-[#0f0f0f]">
                {short.title}
              </h3>
              <p className="text-xs text-[#606060]">{short.views}</p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ShortsMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-[#ff0033]" fill="none">
      <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 9.2v5.2l4-2.6-4-2.6Z" fill="currentColor" />
    </svg>
  );
}
