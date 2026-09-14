"use client";

import { searchEntries } from "@/content/search-index";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Command, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const results = searchEntries(query);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      router.push(href);
    },
    [router],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setSelected(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && results[selected]) {
      navigate(results[selected].href);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full max-w-md items-center gap-2 rounded-xl border border-blue-100 bg-white/80 px-3 py-2 text-sm text-navy-600 transition-colors hover:border-blue-200 hover:bg-white dark:border-navy-700 dark:bg-navy-900/60 dark:text-blue-300/70 dark:hover:border-navy-600"
        aria-label="Open search"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">Search the manual...</span>
        <kbd className="hidden items-center gap-0.5 rounded-md border border-blue-100 bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium sm:inline-flex dark:border-navy-600 dark:bg-navy-800">
          <Command className="h-3 w-3" />K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-navy-950/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              className="fixed left-1/2 top-[15vh] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl dark:border-navy-700 dark:bg-navy-900"
              role="dialog"
              aria-label="Search manual"
            >
              <div className="flex items-center gap-2 border-b border-blue-50 px-4 dark:border-navy-800">
                <Search className="h-4 w-4 text-blue-500" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Search ClickUp, Meta, scheduling, publishing..."
                  className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-navy-400 dark:text-blue-50 dark:placeholder:text-navy-500"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1 hover:bg-blue-50 dark:hover:bg-navy-800"
                  aria-label="Close search"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="max-h-[50vh] overflow-y-auto p-2">
                {results.length === 0 ? (
                  <li className="px-4 py-8 text-center text-sm text-navy-500 dark:text-blue-300/50">
                    No results found
                  </li>
                ) : (
                  results.map((result, i) => (
                    <li key={result.id}>
                      <button
                        type="button"
                        onClick={() => navigate(result.href)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors",
                          i === selected
                            ? "bg-blue-50 dark:bg-navy-800"
                            : "hover:bg-blue-50/60 dark:hover:bg-navy-800/60",
                        )}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-navy-900 dark:text-blue-50">{result.title}</p>
                          <p className="truncate text-xs text-navy-600 dark:text-blue-300/60">{result.description}</p>
                          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-blue-500">
                            {result.section}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 shrink-0 text-blue-400" />
                      </button>
                    </li>
                  ))
                )}
              </ul>
              <div className="border-t border-blue-50 px-4 py-2 text-[10px] text-navy-500 dark:border-navy-800 dark:text-blue-300/50">
                <span className="mr-3">↑↓ Navigate</span>
                <span className="mr-3">↵ Select</span>
                <span>Esc Close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function SearchTriggerCompact() {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }));
      }}
      className="rounded-xl p-2 text-navy-700 hover:bg-blue-100 dark:text-blue-200 dark:hover:bg-navy-800"
      aria-label="Search"
    >
      <Search className="h-5 w-5" />
    </button>
  );
}
