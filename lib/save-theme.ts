"use server";

import { cookies } from "next/headers";
import { readTheme, themeCookie, themeCookieOptions } from "@/lib/theme";

export async function saveTheme(theme: string) {
  const choice = readTheme(theme);
  const jar = await cookies();
  jar.set(themeCookie, choice, themeCookieOptions);
}
