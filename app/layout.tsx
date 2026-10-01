import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmashTube",
  description: "Women's badminton videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[#0f0f0f]">
        <SiteHeader />
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
