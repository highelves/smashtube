import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import type { WatchItem } from "@/lib/watch";

type UpNextProps = {
  items: WatchItem[];
};

export function UpNext({ items }: UpNextProps) {
  return (
    <aside aria-label="Up next">
      <h2 className="mb-3 text-base font-semibold">Up next</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/watch/${item.id}`} className="flex gap-2 rounded-lg outline-offset-4">
              <span
                className={`relative shrink-0 overflow-hidden rounded-lg bg-soft ${item.kind === "short" ? "h-24 w-14" : "h-[94px] w-40"}`}
              >
                <Image
                  src={item.thumbnail}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
                <span className="absolute right-1 bottom-1 rounded bg-black/80 px-1 py-0.5 text-[10px] font-semibold text-white">
                  {item.duration}
                </span>
              </span>
              <span className="min-w-0 py-0.5">
                <span className="line-clamp-2 text-sm leading-5 font-semibold">{item.title}</span>
                <span className="mt-1 flex items-center gap-1 text-xs text-muted">
                  <span className="truncate">{item.channel}</span>
                  <CheckIcon className="size-3 shrink-0" />
                </span>
                <span className="mt-0.5 block truncate text-xs text-muted">
                  {item.views} · {item.uploadedAt}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
