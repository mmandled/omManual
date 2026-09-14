"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { SearchDialog } from "@/components/search/SearchDialog";
import { MobileMenuButton } from "./Sidebar";
import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  onMenuOpen: () => void;
}

export function Header({ onMenuOpen }: HeaderProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-blue-100/80 bg-white/80 backdrop-blur-md dark:border-navy-800 dark:bg-navy-950/80">
      <div className="flex items-center gap-3 px-4 py-3 md:px-6">
        <MobileMenuButton onClick={onMenuOpen} />
        <div className="flex-1">
          <SearchDialog />
        </div>
        {mounted && (
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-xl p-2.5 text-navy-700 transition-colors hover:bg-blue-100 dark:text-blue-200 dark:hover:bg-navy-800"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        )}
      </div>
    </header>
  );
}
