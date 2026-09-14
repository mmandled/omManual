import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  const Component = onClick ? "button" : "div";
  return (
    <Component
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-blue-100/80 bg-white p-5 card-shadow dark:border-navy-700/60 dark:bg-navy-900/80",
        hover && "transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-500/40",
        onClick && "w-full text-left",
        className,
      )}
    >
      {children}
    </Component>
  );
}
