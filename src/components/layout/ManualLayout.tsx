"use client";

import { getSectionFromPath } from "@/content/navigation";
import { useTrackProgress } from "@/components/providers/ProgressProvider";
import { FloatingQuickAction } from "./FloatingQuickAction";
import { Header } from "./Header";
import { ScrollProgress } from "./ScrollProgress";
import { Sidebar } from "./Sidebar";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";

export function ManualLayout({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const sectionKey = getSectionFromPath(pathname);
  useTrackProgress(sectionKey);

  return (
    <div className="flex min-h-screen">
      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <ScrollProgress />
        <Header onMenuOpen={() => setMobileOpen(true)} />
        <main className="flex-1 px-4 py-6 md:px-8 md:py-8 lg:px-10">{children}</main>
      </div>
      <FloatingQuickAction />
    </div>
  );
}
