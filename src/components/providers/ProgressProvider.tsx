"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { progressSections } from "@/content/navigation";
import { useLocalStorage } from "@/lib/use-local-storage";

interface ProgressContextValue {
  visited: Record<string, boolean>;
  markVisited: (sectionKey: string) => void;
  percentage: number;
  isHydrated: boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [visited, setVisited, isHydrated] = useLocalStorage<Record<string, boolean>>(
    "om-manual-progress",
    {},
  );

  const markVisited = useCallback(
    (sectionKey: string) => {
      setVisited((prev) => {
        if (prev[sectionKey]) return prev;
        return { ...prev, [sectionKey]: true };
      });
    },
    [setVisited],
  );

  const completedCount = progressSections.filter((s) => visited[s.key]).length;
  const percentage = Math.round((completedCount / progressSections.length) * 100);

  const value = useMemo(
    () => ({ visited, markVisited, percentage, isHydrated }),
    [visited, markVisited, percentage, isHydrated],
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

export function useTrackProgress(sectionKey: string | null) {
  const { markVisited } = useProgress();

  useEffect(() => {
    if (sectionKey) markVisited(sectionKey);
  }, [sectionKey, markVisited]);
}
