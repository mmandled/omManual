import { cn } from "@/lib/utils";
import { ExternalLink, Link2 } from "lucide-react";
import Link from "next/link";

interface ResourceCardProps {
  title: string;
  description: string;
  href?: string;
  placeholder?: boolean;
  className?: string;
}

export function ResourceCard({ title, description, href, placeholder = false, className }: ResourceCardProps) {
  const content = (
    <>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-navy-800">
        {placeholder ? (
          <Link2 className="h-5 w-5 text-blue-500" aria-hidden />
        ) : (
          <ExternalLink className="h-5 w-5 text-blue-500" aria-hidden />
        )}
      </div>
      <h3 className="mb-1 font-semibold text-navy-900 dark:text-blue-50">{title}</h3>
      <p className="text-sm text-navy-700/80 dark:text-blue-200/70">{description}</p>
      {placeholder && (
        <span className="mt-3 inline-block text-xs font-medium text-blue-500">Add Link</span>
      )}
    </>
  );

  const cardClass = cn(
    "block rounded-2xl border border-blue-100 bg-white p-5 card-shadow transition-all dark:border-navy-700 dark:bg-navy-900/80",
    href && "hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:hover:border-blue-500/40",
    placeholder && "opacity-80",
    className,
  );

  if (href && !placeholder) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {content}
      </a>
    );
  }

  if (href && placeholder) {
    return (
      <Link href={href} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
