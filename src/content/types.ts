export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

export interface SearchEntry {
  id: string;
  title: string;
  description: string;
  href: string;
  section: string;
  keywords: string[];
}

export interface PageMeta {
  title: string;
  description: string;
  section: string;
  sectionHref: string;
  lastUpdated?: string;
  progressKey?: string;
}

export type ContentLabel = "official" | "recommended" | "example";
