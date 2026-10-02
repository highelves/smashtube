"use client";

import { useSearchParams } from "next/navigation";
import { SearchIcon } from "@/components/icons";

const fieldClassName =
  "h-10 min-w-0 flex-1 bg-field px-4 text-sm text-ink outline-none placeholder:text-muted";

export function SearchForm() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const topic = searchParams.get("topic") ?? "";

  return (
    <SearchFields query={query} topic={topic} inputId="search" />
  );
}

export function SearchFormFallback() {
  return <SearchFields query="" topic="" inputId="search-fallback" />;
}

function SearchFields({
  query,
  topic,
  inputId,
}: {
  query: string;
  topic: string;
  inputId: string;
}) {
  return (
    <form action="/" method="get" role="search" className="flex min-w-0 flex-1">
      <label htmlFor={inputId} className="sr-only">
        Search
      </label>
      {topic && topic !== "all" ? <input type="hidden" name="topic" value={topic} /> : null}
      <div className="flex min-w-0 flex-1 overflow-hidden rounded-full border border-field-line focus-within:border-[#1c62b9]">
        <input
          id={inputId}
          name="q"
          key={query}
          defaultValue={query}
          placeholder="Search rallies, players, and drills"
          className={fieldClassName}
        />
        <button
          type="submit"
          aria-label="Search"
          className="grid h-10 w-14 shrink-0 place-items-center border-l border-field-line bg-field-button text-ink hover:bg-field-button-hover"
        >
          <SearchIcon className="size-5" />
        </button>
      </div>
    </form>
  );
}
