import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50",
          variant === "primary" &&
            "bg-blue-600 text-white shadow-sm hover:bg-blue-500 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-400",
          variant === "secondary" &&
            "bg-blue-100 text-navy-900 hover:bg-blue-200 dark:bg-navy-800 dark:text-blue-100 dark:hover:bg-navy-700",
          variant === "ghost" &&
            "text-navy-800 hover:bg-blue-100 dark:text-blue-100 dark:hover:bg-navy-800",
          variant === "outline" &&
            "border border-blue-200 bg-white text-navy-900 hover:border-blue-400 hover:bg-blue-50 dark:border-navy-700 dark:bg-navy-900 dark:text-blue-100 dark:hover:bg-navy-800",
          size === "sm" && "px-3 py-1.5 text-sm",
          size === "md" && "px-4 py-2 text-sm",
          size === "lg" && "px-6 py-3 text-base",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
