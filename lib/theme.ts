export const themeCookie = "theme";

export type ThemeChoice = "light" | "dark";

export function readTheme(value: string | undefined): ThemeChoice {
  return value === "dark" ? "dark" : "light";
}

export const themeCookieOptions = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax" as const,
};
