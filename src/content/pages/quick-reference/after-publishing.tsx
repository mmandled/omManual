"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Checklist } from "@/components/ui/Checklist";
import { PageHeader } from "@/components/ui/PageHeader";
import { afterPublishingChecklist } from "@/content/shared";

export default function AfterPublishingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Quick Reference", href: "/quick-reference/cheat-sheet" },
        { label: "After Publishing" },
      ]}
    >
      <PageHeader
        title="After Publishing"
        description="Complete these steps after content goes live."
      />

      <Checklist id="after-publishing-ref" title="Post-Publish Checklist" items={afterPublishingChecklist} />
    </PageShell>
  );
}
