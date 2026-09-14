"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { troubleshootingCards } from "@/content/shared";
import Link from "next/link";

export default function TroubleshootingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflow", href: "/workflow/overall" },
        { label: "What To Do If..." },
      ]}
    >
      <PageHeader
        title="What To Do If..."
        description="Common situations and the recommended action for each."
      />
      <Prose>
        <p>
          Click a situation below to go to the relevant guide. When in doubt, ask first — don&apos;t guess.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Common Situations</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2">
          {troubleshootingCards.map((card) => (
            <Link key={card.problem} href={card.href}>
              <Card hover className="h-full">
                <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{card.problem}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">{card.action}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Callout variant="principle" title="ASK FIRST. DON'T GUESS." className="mt-8" label="official">
        If you don&apos;t know what to do, stop and ask the OM Head or the appropriate department Head.
        Never publish, respond, or take action based on assumptions.
      </Callout>
    </PageShell>
  );
}
