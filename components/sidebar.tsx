import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

type IconProps = {
  className?: string;
};

type GuideItem = {
  label: string;
  icon: ComponentType<IconProps>;
};

const rowClassName =
  "flex w-full items-center gap-5 rounded-lg px-3 py-2 text-sm text-[#0f0f0f]";

const primary: GuideItem[] = [
  { label: "Shorts", icon: ShortsIcon },
  { label: "Subscriptions", icon: SubscriptionsIcon },
];

const library: GuideItem[] = [
  { label: "History", icon: HistoryIcon },
  { label: "Watch Later", icon: ClockIcon },
  { label: "Liked videos", icon: LikeIcon },
  { label: "Playlists", icon: ListIcon },
];

const explore: GuideItem[] = [
  { label: "Trending", icon: FlameIcon },
  { label: "Live", icon: LiveIcon },
  { label: "Tournaments", icon: TrophyIcon },
  { label: "Coaching", icon: BulbIcon },
  { label: "Women's doubles", icon: UsersIcon },
  { label: "Women's singles", icon: UserIcon },
  { label: "Gear", icon: ShirtIcon },
  { label: "Highlights", icon: FilmIcon },
  { label: "360° Court", icon: OrbitIcon },
];

export function Sidebar() {
  return (
    <aside className="shrink-0 lg:sticky lg:top-16 lg:h-[calc(100dvh-4rem)] lg:w-60 lg:overflow-y-auto">
      <nav aria-label="Primary" className="px-3 py-2">
        <ul className="flex gap-1 overflow-x-auto lg:hidden">
          <li>
            <HomeLink />
          </li>
          {primary.map((item) => (
            <GuideRow key={item.label} item={item} />
          ))}
        </ul>

        <div className="hidden lg:block">
          <ul>
            <li>
              <HomeLink />
            </li>
            {primary.map((item) => (
              <GuideRow key={item.label} item={item} />
            ))}
          </ul>

          <Divider />

          <p className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-[#0f0f0f]">
            You
            <ChevronIcon className="size-4" />
          </p>
          <ul>
            {library.map((item) => (
              <GuideRow key={item.label} item={item} />
            ))}
          </ul>

          <Divider />

          <h2 className="px-3 py-2 text-base font-semibold text-[#0f0f0f]">
            Explore
          </h2>
          <ul>
            {explore.map((item) => (
              <GuideRow key={item.label} item={item} />
            ))}
          </ul>

          <Divider />

          <h2 className="px-3 py-2 text-base font-semibold text-[#0f0f0f]">
            More from SmashTube
          </h2>
          <div className="flex items-start gap-3 px-3 py-2">
            <PlayBadge />
            <div>
              <p className="text-sm font-medium text-[#0f0f0f]">
                SmashTube Premium
              </p>
              <p className="text-xs leading-4 text-[#606060]">
                Women&apos;s badminton. No ads.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

function HomeLink() {
  return (
    <Link
      href="/"
      aria-current="page"
      className={`${rowClassName} bg-[#f2f2f2] font-medium`}
    >
      <HomeIcon className="size-6" />
      Home
    </Link>
  );
}

function GuideRow({ item }: { item: GuideItem }) {
  const Icon = item.icon;

  return (
    <li>
      <span className={rowClassName}>
        <Icon className="size-6 shrink-0" />
        {item.label}
      </span>
    </li>
  );
}

function Divider() {
  return <hr className="my-3 border-[#e5e5e5]" />;
}

function PlayBadge() {
  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#ff0033]">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 fill-white">
        <path d="M8 5.5v13l11-6.5-11-6.5Z" />
      </svg>
    </span>
  );
}

function IconFrame({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function HomeIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </IconFrame>
  );
}

function ShortsIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="7" y="3.5" width="10" height="17" rx="2" />
      <path d="M11 9.2v5.2l4-2.6-4-2.6Z" fill="currentColor" stroke="none" />
    </IconFrame>
  );
}

function SubscriptionsIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="3.5" y="7" width="13" height="11" rx="1.5" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h9A1.5 1.5 0 0 1 20 5.5V15" />
    </IconFrame>
  );
}

function HistoryIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M5 12a7 7 0 1 0 2-4.9" />
      <path d="M5 5.5V9h3.5" />
      <path d="M12 8.5V12l2.5 1.5" />
    </IconFrame>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="12" r="7.25" />
      <path d="M12 8.5V12l2.4 1.6" />
    </IconFrame>
  );
}

function LikeIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M8 10.5v8H5.5A1.5 1.5 0 0 1 4 17v-5a1.5 1.5 0 0 1 1.5-1.5H8Z" />
      <path d="M8 10.5 11 4.8a1.6 1.6 0 0 1 1.5-1 1.7 1.7 0 0 1 1.7 1.9L13.8 10H18a2 2 0 0 1 2 2.3l-1 5.2a2 2 0 0 1-2 1.5H8" />
    </IconFrame>
  );
}

function ListIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M9 7h11M9 12h11M9 17h11" />
      <path d="M4.5 7h.01M4.5 12h.01M4.5 17h.01" strokeWidth="2.4" />
    </IconFrame>
  );
}

function FlameIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M12 20a5 5 0 0 0 5-5c0-3.2-2.4-5.2-3.4-7.4-.3-.7-1.4-.6-1.5.2-.2 1.6-1.1 2.6-2.1 3.4-1.2-2-1-4.4-.8-5.6.1-.8-1-.9-1.4-.3C6.4 7.6 5 10 5 13.2A5.2 5.2 0 0 0 12 20Z" />
    </IconFrame>
  );
}

function LiveIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6" />
      <path d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
    </IconFrame>
  );
}

function TrophyIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M8 4h8v6a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5.5A2.5 2.5 0 0 0 8 10.2M16 6h2.5A2.5 2.5 0 0 1 16 10.2M12 14v3M9 20h6" />
    </IconFrame>
  );
}

function BulbIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M9 17h6M9.5 20h5" />
      <path d="M8 12a4 4 0 1 1 6.5 3.1c-.6.5-1 1.2-1.1 2H10.6c-.1-.8-.5-1.5-1.1-2A4 4 0 0 1 8 12Z" />
    </IconFrame>
  );
}

function UsersIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="9" cy="9" r="2.4" />
      <circle cx="16" cy="10" r="2" />
      <path d="M4.5 18.5c.6-2.2 2.4-3.5 4.5-3.5s3.9 1.3 4.5 3.5M14 15.2c1.3-.3 2.6.1 3.5 1.3.6.8 1 1.6 1.2 2" />
    </IconFrame>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="8.5" r="3" />
      <path d="M6.5 19c.8-2.6 2.8-4 5.5-4s4.7 1.4 5.5 4" />
    </IconFrame>
  );
}

function ShirtIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="M8 6 4.5 8.5 6 11l2-1.2V19h8v-9.2L18 11l1.5-2.5L16 6l-1.5 2h-5L8 6Z" />
    </IconFrame>
  );
}

function FilmIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <rect x="4" y="6" width="16" height="12" rx="1.5" />
      <path d="M8 6v12M16 6v12M4 10h4M4 14h4M16 10h4M16 14h4" />
    </IconFrame>
  );
}

function OrbitIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M5 12a7 7 0 0 0 14 0M7 7.5c1.4 1.6 3.1 2.5 5 2.5s3.6-.9 5-2.5M7 16.5c1.4-1.6 3.1-2.5 5-2.5s3.6.9 5 2.5" />
    </IconFrame>
  );
}

function ChevronIcon({ className }: IconProps) {
  return (
    <IconFrame className={className}>
      <path d="m9 6 6 6-6 6" />
    </IconFrame>
  );
}
