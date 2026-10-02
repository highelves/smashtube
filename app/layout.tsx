import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { cookies } from "next/headers";
import { Sidebar } from "@/components/sidebar";
import { SiteHeader } from "@/components/site-header";
import { readTheme, themeCookie } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmashTube",
  description: "Women's badminton videos",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = readTheme((await cookies()).get(themeCookie)?.value);

  return (
    <html lang="en" data-theme={theme} className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-page text-ink">
        <SiteHeader theme={theme} />
        <div className="lg:flex">
          <Sidebar />
          <main className="min-w-0 flex-1">
            <div className="px-4 py-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
