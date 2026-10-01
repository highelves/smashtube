import { Anton, Libre_Baskerville, Oswald } from "next/font/google";
import type { ThumbnailLabel as LabelStyle } from "@/lib/videos";

const impact = Anton({ weight: "400", subsets: ["latin"] });
const condensed = Oswald({ weight: "600", subsets: ["latin"] });
const italic = Libre_Baskerville({ weight: "700", style: "italic", subsets: ["latin"] });

const placeClassName: Record<LabelStyle["place"], string> = {
  "top-left": "top-2 left-2.5 items-start text-left",
  "top-right": "top-2 right-2.5 items-end text-right",
  "top-center": "top-2 left-1/2 -translate-x-1/2 items-center text-center",
  ceiling: "top-0.5 left-1/2 -translate-x-1/2 items-center text-center",
  "bottom-left": "bottom-8 left-2.5 items-start text-left",
  "bottom-center": "bottom-1.5 left-1/2 -translate-x-1/2 items-center text-center",
  "lower-right": "right-2.5 bottom-8 items-end text-right",
  "mid-left": "top-1/2 left-2 -translate-y-1/2 items-start text-left",
  "mid-right": "top-1/2 right-2 -translate-y-1/2 items-end text-right",
};

const tiltClassName: Record<LabelStyle["tilt"], string> = {
  none: "",
  left: "-rotate-6",
  right: "rotate-6",
  vertical: "[writing-mode:vertical-rl]",
};

const fontClassName: Record<LabelStyle["font"], string> = {
  impact: `${impact.className} text-[1.65rem] tracking-wide uppercase leading-none`,
  condensed: `${condensed.className} text-xl tracking-tight uppercase leading-none`,
  italic: `${italic.className} text-2xl leading-none`,
};

type ThumbnailLabelProps = {
  label: LabelStyle;
  compact?: boolean;
};

export function ThumbnailLabel({ label, compact = false }: ThumbnailLabelProps) {
  if (!label.text) {
    return null;
  }

  return (
    <p
      className={`pointer-events-none absolute flex text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.55)] ${label.narrow ? "max-w-[30%]" : compact ? "max-w-[70%]" : "max-w-[42%]"} ${placeClassName[label.place]}`}
    >
      <span
        className={`${fontClassName[label.font]} ${tiltClassName[label.tilt]} ${compact ? "!text-lg" : ""} ${label.small ? "!text-[11px] tracking-[0.12em]" : ""} ${label.tilt === "vertical" ? "!text-base tracking-[0.14em]" : ""}`}
      >
        {label.text}
      </span>
    </p>
  );
}
