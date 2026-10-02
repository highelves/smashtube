import { Suspense, type ReactNode } from "react";
import Link from "next/link";
import { ShuttlecockIcon } from "@/components/icons";
import { SearchForm, SearchFormFallback } from "@/components/search-form";
import { ThemeToggle } from "@/components/theme-toggle";
import type { ThemeChoice } from "@/lib/theme";

export function SiteHeader({ theme }: { theme: ThemeChoice }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-2 border-b border-line bg-page px-3 sm:gap-4 sm:px-4">
      <button
        type="button"
        aria-label="Menu"
        className="grid size-10 shrink-0 place-items-center rounded-full text-ink hover:bg-soft"
      >
        <MenuIcon />
      </button>
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <ShuttlecockIcon className="size-7 text-ink" />
        <span className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight text-ink">
            Smash<span className="text-[#ff0033]">Tube</span>
          </span>
          <span className="text-[11px] text-muted">
            Women&apos;s badminton
          </span>
        </span>
      </Link>
      <div className="mx-auto flex w-full max-w-2xl items-center gap-2">
        <Suspense fallback={<SearchFormFallback />}>
          <SearchForm />
        </Suspense>
        <IconButton label="Search with your voice" className="hidden md:grid">
          <MicIcon />
        </IconButton>
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <ThemeToggle theme={theme} />
        <IconButton label="Notifications" className="hidden sm:grid">
          <BellIcon />
        </IconButton>
        <span
          role="img"
          aria-label="Account"
          className="grid size-8 shrink-0 place-items-center rounded-full bg-[#ef6c00] text-sm font-medium text-white"
        >
          S
        </span>
      </div>
    </header>
  );
}

function IconButton({
  label,
  children,
  className = "grid",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`${className} size-10 shrink-0 place-items-center rounded-full text-ink hover:bg-soft`}
    >
      {children}
    </button>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
      <rect x="9" y="3.5" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6.5 11a5.5 5.5 0 0 0 11 0M12 16.5V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
      <path
        d="M6 16.5h12l-1.2-2.1V10a4.8 4.8 0 0 0-9.6 0v4.4L6 16.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M10 18.2a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
