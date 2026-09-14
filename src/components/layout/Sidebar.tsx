"use client";

import { navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  ChevronDown,
  ClipboardList,
  Home,
  Layers,
  Link2,
  Menu,
  Share2,
  Users,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ProgressTracker } from "../ui/ProgressTracker";

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  "Getting Started": BookOpen,
  Workflow: Workflow,
  ClickUp: ClipboardList,
  "Meta Business Suite": Layers,
  "Social Media": Share2,
  "Task Designation": Users,
  Analytics: BarChart3,
  "Quick Reference": BookOpen,
  Resources: Link2,
};

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const toggleSection = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const navContent = (
    <div className="flex h-full flex-col">
      <div className="border-b border-blue-100/80 px-5 py-5 dark:border-navy-800">
        <Link href="/" onClick={onMobileClose} className="block">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">SAS Bulletin</p>
          <p className="text-sm font-semibold text-navy-900 dark:text-blue-50">OM Manual</p>
          <p className="text-xs text-navy-500 dark:text-blue-300/60">AY 2026–2027</p>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main navigation">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = sectionIcons[item.title] ?? BookOpen;
            const hasChildren = item.children && item.children.length > 0;
            const sectionOpen = expanded[item.title] ?? isActive(item.href);

            return (
              <li key={item.title}>
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleSection(item.title)}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-blue-100 text-blue-800 dark:bg-navy-800 dark:text-blue-200"
                          : "text-navy-700 hover:bg-blue-50 dark:text-blue-200/80 dark:hover:bg-navy-800/60",
                      )}
                    >
                      <Icon className="h-4 w-4 shrink-0 opacity-70" />
                      <span className="flex-1">{item.title}</span>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", sectionOpen && "rotate-180")}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {sectionOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 mt-1 space-y-0.5 overflow-hidden border-l border-blue-100 pl-3 dark:border-navy-700"
                        >
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={onMobileClose}
                                className={cn(
                                  "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                                  pathname === child.href
                                    ? "bg-blue-600 font-medium text-white dark:bg-blue-500"
                                    : "text-navy-600 hover:bg-blue-50 hover:text-navy-900 dark:text-blue-300/70 dark:hover:bg-navy-800 dark:hover:text-blue-100",
                                )}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onMobileClose}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-blue-600 text-white dark:bg-blue-500"
                        : "text-navy-700 hover:bg-blue-50 dark:text-blue-200/80 dark:hover:bg-navy-800/60",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0 opacity-70" />
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-blue-100/80 p-4 dark:border-navy-800">
        <ProgressTracker compact />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-72 shrink-0 border-r border-blue-100/80 bg-white/80 backdrop-blur-md lg:block dark:border-navy-800 dark:bg-navy-950/80">
        <div className="sticky top-0 h-screen">{navContent}</div>
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy-950/50 backdrop-blur-sm lg:hidden"
              onClick={onMobileClose}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl lg:hidden dark:bg-navy-950"
            >
              <button
                type="button"
                onClick={onMobileClose}
                className="absolute right-3 top-4 rounded-lg p-2 hover:bg-blue-50 dark:hover:bg-navy-800"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              {navContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl p-2 text-navy-700 hover:bg-blue-100 lg:hidden dark:text-blue-200 dark:hover:bg-navy-800"
      aria-label="Open menu"
    >
      <Menu className="h-5 w-5" />
    </button>
  );
}
