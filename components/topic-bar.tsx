"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { topics } from "@/lib/videos";

export function TopicBar() {
  const searchParams = useSearchParams();
  const selected = searchParams.get("topic") ?? "all";
  const query = searchParams.get("q") ?? "";

  return (
    <div className="flex items-center gap-3 px-3 pt-3">
      <div className="flex min-w-0 flex-1 gap-3 overflow-x-auto pb-1">
        {topics.map((topic) => {
          const active = selected === topic.id || (topic.id === "all" && !topics.some((item) => item.id === selected));
          const params = new URLSearchParams();
          if (query) {
            params.set("q", query);
          }
          if (topic.id !== "all") {
            params.set("topic", topic.id);
          }
          const href = params.size > 0 ? `/?${params.toString()}` : "/";

          return (
            <Link
              key={topic.id}
              href={href}
              aria-current={active ? "true" : undefined}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium ${
                active
                  ? "bg-[#0f0f0f] text-white"
                  : "bg-[#f2f2f2] text-[#0f0f0f] hover:bg-[#e5e5e5]"
              }`}
            >
              {topic.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
