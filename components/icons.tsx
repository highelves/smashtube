type IconProps = {
  className?: string;
};

export function ShuttlecockIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M14.5 3.2c1.2.3 2.2 1.1 2.8 2.1.5 1 .6 2.1.2 3.1l-1.1 2.6 2.2 2.2c.5.5.6 1.2.3 1.8l-1.2 2.4a1.6 1.6 0 0 1-1.5.9H12l-1.8 3.2a1.2 1.2 0 0 1-2.1-.1L6.4 18l-2.9-.2a1.2 1.2 0 0 1-.9-1.9l2.2-3.4 1.4-4.6c.3-1 .9-1.8 1.8-2.3 1-.6 2.1-.8 3.2-.6l3.3.2Z"
        fill="currentColor"
      />
      <path
        d="M9.2 14.2 7.6 19.2M11.4 13.4l-1.2 5.4M13.5 13.1l-.4 5.6"
        stroke="#0f0f0f"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 16.5 20 20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShortsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <rect
        x="7"
        y="3.5"
        width="10"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M11 9.5v5l4-2.5-4-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function SubscriptionsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M6 9.5a6 6 0 1 1 12 0c0 4 1.2 5.5 1.8 6.2H4.2C4.8 15 6 13.5 6 9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.2a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HistoryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M5 12a7 7 0 1 0 2-4.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 5.5V9h3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.5V12l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M7.5 12.4 10.4 15.2 16.5 8.8"
        fill="none"
        stroke="#0f0f0f"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
