export type Video = {
  id: string;
  title: string;
  channel: string;
  views: string;
  uploadedAt: string;
  duration: string;
  thumbnail: string;
};

export const videos: Video[] = [
  {
    id: "cross-court-smash",
    title: "Cross-court smash compilation",
    channel: "CourtCraft",
    views: "186K views",
    uploadedAt: "4 days ago",
    duration: "12:04",
    thumbnail: "/thumbnails/thumb-w-smash.jpg",
  },
  {
    id: "tight-net-shot",
    title: "How to hit a tight net shot",
    channel: "Baseline Lab",
    views: "74K views",
    uploadedAt: "1 week ago",
    duration: "8:31",
    thumbnail: "/thumbnails/thumb-w-net-front3.jpg",
  },
  {
    id: "all-england-rally",
    title: "Women's singles final rally",
    channel: "Shuttle Club",
    views: "312K views",
    uploadedAt: "2 weeks ago",
    duration: "14:52",
    thumbnail: "/thumbnails/thumb-w-final-net.jpg",
  },
  {
    id: "doubles-rotation",
    title: "Doubles rotation explained",
    channel: "CourtCraft",
    views: "63K views",
    uploadedAt: "5 days ago",
    duration: "9:47",
    thumbnail: "/thumbnails/thumb-w-doubles-net2.jpg",
  },
  {
    id: "backhand-clear",
    title: "Backhand clear drill",
    channel: "Baseline Lab",
    views: "41K views",
    uploadedAt: "3 days ago",
    duration: "7:15",
    thumbnail: "/thumbnails/thumb-w-clear-front2.jpg",
  },
  {
    id: "baseline-match-point",
    title: "Match point at the baseline",
    channel: "Shuttle Club",
    views: "98K views",
    uploadedAt: "1 week ago",
    duration: "10:23",
    thumbnail: "/thumbnails/thumb-w-baseline.jpg",
  },
  {
    id: "flick-serve",
    title: "Flick serve basics",
    channel: "CourtCraft",
    views: "22K views",
    uploadedAt: "6 days ago",
    duration: "6:12",
    thumbnail: "/thumbnails/thumb-w-flick.jpg",
  },
  {
    id: "front-court-kills",
    title: "Front court kills",
    channel: "Shuttle Club",
    views: "55K views",
    uploadedAt: "8 days ago",
    duration: "9:02",
    thumbnail: "/thumbnails/thumb-w-kill.jpg",
  },
  {
    id: "singles-highlights",
    title: "Women's singles highlights",
    channel: "Baseline Lab",
    views: "140K views",
    uploadedAt: "3 weeks ago",
    duration: "18:40",
    thumbnail: "/thumbnails/thumb-w-singles.jpg",
  },
  {
    id: "mixed-doubles",
    title: "Women's doubles at the net",
    channel: "CourtCraft",
    views: "37K views",
    uploadedAt: "9 days ago",
    duration: "11:18",
    thumbnail: "/thumbnails/thumb-w-netdoubles.jpg",
  },
  {
    id: "clear-footwork",
    title: "Overhead clear footwork",
    channel: "Baseline Lab",
    views: "29K views",
    uploadedAt: "2 days ago",
    duration: "8:05",
    thumbnail: "/thumbnails/thumb-w-footwork.jpg",
  },
  {
    id: "diving-saves",
    title: "Diving save compilation",
    channel: "Shuttle Club",
    views: "210K views",
    uploadedAt: "4 weeks ago",
    duration: "13:27",
    thumbnail: "/thumbnails/thumb-w-dive.jpg",
  },
  {
    id: "smash-defense",
    title: "Smash defense drill",
    channel: "CourtCraft",
    views: "48K views",
    uploadedAt: "1 day ago",
    duration: "7:44",
    thumbnail: "/thumbnails/thumb-w-defense.jpg",
  },
  {
    id: "hairpin",
    title: "Hairpin net shot",
    channel: "Baseline Lab",
    views: "33K views",
    uploadedAt: "11 days ago",
    duration: "5:58",
    thumbnail: "/thumbnails/thumb-w-hairpin.jpg",
  },
  {
    id: "rally-construction",
    title: "Rally construction",
    channel: "Shuttle Club",
    views: "19K views",
    uploadedAt: "2 days ago",
    duration: "15:11",
    thumbnail: "/thumbnails/thumb-w-rally.jpg",
  },
  {
    id: "side-by-side",
    title: "Side-by-side doubles",
    channel: "CourtCraft",
    views: "27K views",
    uploadedAt: "12 days ago",
    duration: "10:06",
    thumbnail: "/thumbnails/thumb-w-side.jpg",
  },
];

export const topics = [
  { id: "all", label: "All" },
  { id: "singles", label: "Singles" },
  { id: "doubles", label: "Doubles" },
  { id: "smashes", label: "Smashes" },
  { id: "net", label: "Net play" },
  { id: "drills", label: "Drills" },
  { id: "finals", label: "Finals" },
  { id: "footwork", label: "Footwork" },
] as const;

const topicById: Record<string, string> = {
  "cross-court-smash": "smashes",
  "tight-net-shot": "net",
  "all-england-rally": "finals",
  "doubles-rotation": "doubles",
  "backhand-clear": "drills",
  "baseline-match-point": "singles",
  "flick-serve": "drills",
  "front-court-kills": "net",
  "singles-highlights": "singles",
  "mixed-doubles": "doubles",
  "clear-footwork": "footwork",
  "diving-saves": "singles",
  "smash-defense": "drills",
  hairpin: "net",
  "rally-construction": "drills",
  "side-by-side": "doubles",
};

export function filterVideos(query: string, topic = "all"): Video[] {
  const needle = query.trim().toLowerCase();

  return videos.filter((video) => {
    const matchesTopic = topic === "all" || topicById[video.id] === topic;
    if (!matchesTopic) {
      return false;
    }
    if (!needle) {
      return true;
    }
    const haystack = `${video.title} ${video.channel}`.toLowerCase();
    return haystack.includes(needle);
  });
}

export function readTopic(value: string | string[] | undefined): string {
  const topic = readQuery(value);
  return topics.some((item) => item.id === topic) ? topic : "all";
}

export type ThumbnailLabel = {
  text: string;
  place:
    | "top-left"
    | "top-right"
    | "top-center"
    | "ceiling"
    | "bottom-left"
    | "bottom-center"
    | "lower-right"
    | "mid-left"
    | "mid-right";
  font: "impact" | "condensed" | "italic";
  tilt: "none" | "left" | "right" | "vertical";
  narrow?: boolean;
  small?: boolean;
};

const labelById: Record<string, ThumbnailLabel> = {
  "cross-court-smash": { text: "CROSS COURT", place: "bottom-left", font: "impact", tilt: "left" },
  "tight-net-shot": { text: "TIGHT NET", place: "top-right", font: "condensed", tilt: "right" },
  "all-england-rally": { text: "Final rally", place: "top-center", font: "italic", tilt: "none" },
  "doubles-rotation": { text: "ROTATION", place: "lower-right", font: "impact", tilt: "right" },
  "backhand-clear": { text: "BACKHAND", place: "lower-right", font: "condensed", tilt: "vertical" },
  "baseline-match-point": { text: "MATCH POINT", place: "lower-right", font: "impact", tilt: "left" },
  "flick-serve": { text: "Flick serve", place: "lower-right", font: "italic", tilt: "right" },
  "front-court-kills": { text: "KILL SHOT", place: "top-right", font: "impact", tilt: "none" },
  "singles-highlights": { text: "HIGHLIGHTS", place: "lower-right", font: "condensed", tilt: "right" },
  "mixed-doubles": { text: "AT THE NET", place: "bottom-center", font: "condensed", tilt: "none" },
  "clear-footwork": { text: "FOOTWORK", place: "mid-left", font: "condensed", tilt: "vertical" },
  "diving-saves": { text: "FULL DIVE", place: "top-left", font: "impact", tilt: "left" },
  "smash-defense": { text: "DEFENSE", place: "bottom-left", font: "condensed", tilt: "right" },
  hairpin: { text: "Hairpin", place: "lower-right", font: "italic", tilt: "none" },
  "rally-construction": { text: "BUILD IT", place: "top-right", font: "impact", tilt: "right" },
  "side-by-side": {
    text: "SIDE BY SIDE",
    place: "ceiling",
    font: "condensed",
    tilt: "none",
    small: true,
  },
};

export function thumbnailLabel(id: string): ThumbnailLabel {
  return labelById[id] ?? { text: "", place: "top-left", font: "impact", tilt: "none" };
}

export type Short = {
  id: string;
  title: string;
  hook: string;
  views: string;
  thumbnail: string;
  place: ThumbnailLabel["place"];
  font: ThumbnailLabel["font"];
  tilt: ThumbnailLabel["tilt"];
};

export const shorts: Short[] = [
  {
    id: "short-smash",
    title: "Jump smash in one motion",
    hook: "JUMP SMASH",
    place: "bottom-center",
    font: "impact",
    tilt: "left",
    views: "1.2M views",
    thumbnail: "/thumbnails/short-smash.jpg",
  },
  {
    id: "short-net",
    title: "The tightest net shot",
    hook: "TOO TIGHT",
    place: "top-right",
    font: "condensed",
    tilt: "none",
    views: "840K views",
    thumbnail: "/thumbnails/short-net.jpg",
  },
  {
    id: "short-flick",
    title: "Flick serve that wins the point",
    hook: "Flick",
    place: "lower-right",
    font: "italic",
    tilt: "right",
    views: "510K views",
    thumbnail: "/thumbnails/short-flick.jpg",
  },
  {
    id: "short-dive",
    title: "She got the dive",
    hook: "STRETCH",
    place: "top-center",
    font: "impact",
    tilt: "none",
    views: "2.1M views",
    thumbnail: "/thumbnails/short-dive.jpg",
  },
  {
    id: "short-doubles",
    title: "Front court doubles speed",
    hook: "DOUBLES",
    place: "top-center",
    font: "condensed",
    tilt: "none",
    views: "690K views",
    thumbnail: "/thumbnails/short-doubles.jpg",
  },
  {
    id: "short-hairpin",
    title: "Hairpin that dies on the tape",
    hook: "Hairpin",
    place: "lower-right",
    font: "italic",
    tilt: "left",
    views: "430K views",
    thumbnail: "/thumbnails/short-hairpin.jpg",
  },
];

export function readQuery(
  value: string | string[] | undefined,
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value;
}
