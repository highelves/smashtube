"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type WatchPlayerProps = {
  title: string;
  thumbnail: string;
  duration: string;
  tall?: boolean;
};

export function WatchPlayer({ title, thumbnail, duration, tall = false }: WatchPlayerProps) {
  const total = durationToSeconds(duration);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrent((value) => {
        const next = Math.min(total, value + 0.25);
        if (next >= total) {
          setPlaying(false);
        }
        return next;
      });
    }, 250);

    return () => window.clearInterval(timer);
  }, [playing, total]);

  function togglePlayback() {
    if (current >= total) {
      setCurrent(0);
    }
    setPlaying((value) => !value);
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-black ${tall ? "mx-auto aspect-[9/16] max-h-[70vh]" : "aspect-video"}`}
    >
      <Image src={thumbnail} alt="" fill priority className="object-cover" sizes="(max-width: 1280px) 100vw, 900px" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-10 pb-2">
        <div className="flex items-center gap-3 text-white">
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={playing ? "Pause" : "Play"}
            className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15"
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
          <span className="shrink-0 text-xs tabular-nums">
            {formatTime(current)} / {formatTime(total)}
          </span>
          <input
            type="range"
            min={0}
            max={total}
            step={0.1}
            value={current}
            aria-label={`Seek ${title}`}
            onChange={(event) => setCurrent(Number(event.target.value))}
            className="h-1 min-w-0 flex-1 accent-[#ff0033]"
          />
        </div>
      </div>
    </div>
  );
}

function durationToSeconds(duration: string): number {
  const parts = duration.split(":").map((part) => Number(part));
  if (parts.some((part) => Number.isNaN(part))) {
    return 0;
  }
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return (parts[0] ?? 0) * 60 + (parts[1] ?? 0);
}

function formatTime(seconds: number): string {
  const whole = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(whole / 60);
  const remainder = whole % 60;
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-white">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-white">
      <path d="M7 5h3.5v14H7V5Zm6.5 0H17v14h-3.5V5Z" />
    </svg>
  );
}
