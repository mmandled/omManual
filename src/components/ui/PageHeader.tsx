import type { ReactNode } from "react";
import { Badge } from "./Badge";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  children?: ReactNode;
}

export function PageHeader({ title, description, badge, children }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {badge && (
        <Badge variant="info" className="mb-3">
          {badge}
        </Badge>
      )}
      <h1 className="mb-3 text-3xl font-bold tracking-tight text-navy-900 md:text-4xl dark:text-blue-50">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-navy-700/90 dark:text-blue-200/80">{description}</p>
      )}
      {children}
    </header>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-4 text-xl font-semibold text-navy-900 dark:text-blue-50">{children}</h2>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`space-y-4 text-base leading-relaxed text-navy-800 dark:text-blue-100/90 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
