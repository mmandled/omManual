import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-navy-600 dark:text-blue-300/70">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />}
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-navy-900 dark:text-blue-100">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
