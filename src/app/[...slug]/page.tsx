import { getPage, getAllPageSlugs } from "@/content/registry";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  return getAllPageSlugs().map((slug) => ({
    slug: slug === "resources" ? ["resources"] : slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugKey = slug.join("/");
  const page = getPage(slugKey);
  if (!page) return { title: "Not Found" };
  return {
    title: `${page.title} — SAS Bulletin OM Manual`,
    description: page.description,
  };
}

export default async function ManualPage({ params }: PageProps) {
  const { slug } = await params;
  const slugKey = slug.join("/");
  const page = getPage(slugKey);
  if (!page) notFound();
  const PageComponent = page.component;
  return <PageComponent />;
}
