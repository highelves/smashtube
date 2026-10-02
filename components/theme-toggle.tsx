"use client";

import { useState } from "react";
import { saveTheme } from "@/lib/save-theme";
import { themeCookie, themeCookieOptions, type ThemeChoice } from "@/lib/theme";

export function ThemeToggle({ theme }: { theme: ThemeChoice }) {
  const [current, setCurrent] = useState(theme);
  const next = current === "dark" ? "light" : "dark";

  function switchTheme() {
    setCurrent(next);
    document.documentElement.dataset.theme = next;
    document.cookie = `${themeCookie}=${next}; Path=${themeCookieOptions.path}; Max-Age=${themeCookieOptions.maxAge}; SameSite=Lax`;
    void saveTheme(next);
  }

  return (
    <button
      type="button"
      aria-pressed={current === "dark"}
      aria-label={next === "dark" ? "Switch to dark theme" : "Switch to light theme"}
      onClick={switchTheme}
      className="grid size-10 shrink-0 place-items-center rounded-full text-ink hover:bg-soft"
    >
      {current === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
      <path
        d="M16.5 13.2A6.2 6.2 0 0 1 10.8 4.5 6.8 6.8 0 1 0 19.5 13.2a6.6 6.6 0 0 1-3 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6 6l1.6 1.6M16.4 16.4 18 18M18 6l-1.6 1.6M7.6 16.4 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
