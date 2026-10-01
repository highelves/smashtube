import { shorts, videos, type Video } from "@/lib/videos";

export type WatchItem = {
  id: string;
  title: string;
  channel: string;
  views: string;
  uploadedAt: string;
  duration: string;
  thumbnail: string;
  description: string;
  kind: "video" | "short";
};

export type Comment = {
  id: string;
  author: string;
  body: string;
  postedAt: string;
};

const descriptionById: Record<string, string> = {
  "cross-court-smash":
    "A jump-smash reel from the practice hall. CourtCraft slows the takeoff, the contact point, and the cross-court landing so you can see why the shuttle dies in the tramlines.",
  "tight-net-shot":
    "Baseline Lab on the tight net. The racket face stays open, the shuttle tumbles, and the follow-through stops short of the tape.",
  "all-england-rally":
    "Shuttle Club's cut of a women's singles final. Long lifts, a late net drop, and the rally that closes the match.",
  "doubles-rotation":
    "How a women's pair rotates through attack and defense. CourtCraft marks who takes the lift and who covers the straight reply.",
  "backhand-clear":
    "A backhand clear drill with the contact out in front of the shoulder. Baseline Lab repeats the same feed until the shuttle reaches the back tramline.",
  "baseline-match-point":
    "Match point from the back court. Shuttle Club follows one player through the lunge, the recovery, and the winning lift.",
  "flick-serve":
    "The flick serve from a low hand. CourtCraft shows the late wrist and where the shuttle should peak on the opponent's backhand.",
  "front-court-kills":
    "Front-court kills at the tape. Shuttle Club breaks down the racket path when the shuttle sits up just above the net.",
  "singles-highlights":
    "Women's singles highlights: jump smashes, full-stretch retrieves, and the points that swing a game.",
  "mixed-doubles":
    "Women's doubles at the net. CourtCraft looks at the flat exchange, the interception, and who stays square to the shuttle.",
  "clear-footwork":
    "Overhead clear footwork from behind the player. Baseline Lab tracks the split step, the chasse, and the landing back in the center.",
  "diving-saves":
    "A compilation of diving saves. Shuttle Club keeps the full stretch in frame, from the push-off to the racket on the floor.",
  "smash-defense":
    "Smash defense in front of the body. CourtCraft shows the short backswing and the block that keeps the shuttle down.",
  hairpin:
    "The hairpin that dies on the tape. Baseline Lab isolates the soft hand and the shuttle that tumbles just over the net.",
  "rally-construction":
    "Building a rally from lift to drop to smash. Shuttle Club walks through one point shot by shot.",
  "side-by-side":
    "Side-by-side doubles formation. CourtCraft explains when both players hold the net and when one slides back for the lift.",
  "short-smash":
    "One jump smash, from the load in the legs to the snap at contact. A short look at the same motion you can loop.",
  "short-net":
    "A net kill from a low camera. The shuttle is taken early and the racket stops as soon as it clears the tape.",
  "short-flick":
    "A flick serve that pushes the receiver back. Watch the hand stay low until the last moment.",
  "short-dive":
    "The full-stretch dive. She gets the shuttle off the floor and the point stays alive.",
  "short-doubles":
    "Front-court speed in women's doubles. Both rackets are up and the exchange stays flat.",
  "short-hairpin":
    "A hairpin taken close to the tape. The shuttle climbs, stalls, and drops on the other side.",
};

const shortDetails: Record<string, { channel: string; uploadedAt: string; duration: string }> = {
  "short-smash": { channel: "CourtCraft", uploadedAt: "1 day ago", duration: "0:18" },
  "short-net": { channel: "Baseline Lab", uploadedAt: "3 days ago", duration: "0:22" },
  "short-flick": { channel: "CourtCraft", uploadedAt: "5 days ago", duration: "0:15" },
  "short-dive": { channel: "Shuttle Club", uploadedAt: "1 week ago", duration: "0:12" },
  "short-doubles": { channel: "Shuttle Club", uploadedAt: "4 days ago", duration: "0:20" },
  "short-hairpin": { channel: "Baseline Lab", uploadedAt: "6 days ago", duration: "0:16" },
};

function fromVideo(video: Video): WatchItem {
  return {
    ...video,
    description: descriptionById[video.id] ?? "",
    kind: "video",
  };
}

const catalog: WatchItem[] = [
  ...videos.map(fromVideo),
  ...shorts.map((short) => {
    const details = shortDetails[short.id];
    return {
      id: short.id,
      title: short.title,
      channel: details?.channel ?? "SmashTube",
      views: short.views,
      uploadedAt: details?.uploadedAt ?? "1 week ago",
      duration: details?.duration ?? "0:15",
      thumbnail: short.thumbnail,
      description: descriptionById[short.id] ?? "",
      kind: "short" as const,
    };
  }),
];

export function getWatchItem(id: string): WatchItem | undefined {
  return catalog.find((item) => item.id === id);
}

export function recommendedFor(id: string): WatchItem[] {
  const current = getWatchItem(id);
  if (!current) {
    return [];
  }

  const others = catalog.filter((item) => item.id !== id);
  const sameKind = others.filter((item) => item.kind === current.kind);
  const otherKind = others.filter((item) => item.kind !== current.kind);
  return [...sameKind, ...otherKind];
}

const commentAuthors = ["Mina Cho", "Priya Nair", "Elena Voss", "Hana Ito", "Sofia Berg"];

export function initialComments(item: WatchItem): Comment[] {
  const index = Math.max(0, catalog.findIndex((entry) => entry.id === item.id));
  return [
    {
      id: `${item.id}-a`,
      author: commentAuthors[index % commentAuthors.length],
      body: `The recovery after contact is what makes ${item.title} worth a second watch.`,
      postedAt: "2 days ago",
    },
    {
      id: `${item.id}-b`,
      author: commentAuthors[(index + 2) % commentAuthors.length],
      body: "Played this pattern at practice tonight. The timing is slower than it looks.",
      postedAt: "1 week ago",
    },
  ];
}

export function allWatchIds(): string[] {
  return catalog.map((item) => item.id);
}
