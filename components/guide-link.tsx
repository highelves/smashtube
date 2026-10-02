"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GuideLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const current = pathname === href;

  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={`flex w-full items-center gap-5 rounded-lg px-3 py-2 text-sm text-ink ${current ? "bg-soft font-medium" : ""}`}
    >
      {children}
      {label}
    </Link>
  );
}
