"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Checklist } from "@/components/ui/Checklist";
import { PageHeader } from "@/components/ui/PageHeader";
import { beforePublishingChecklist } from "@/content/shared";

export default function BeforePublishingPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Quick Reference", href: "/quick-reference/cheat-sheet" },
        { label: "Before Publishing" },
      ]}
    >
      <PageHeader
        title="Before Publishing"
        description="Complete this checklist before scheduling or publishing any content."
      />

      <Checklist id="before-publishing-ref" title="Pre-Publish Checklist" items={beforePublishingChecklist} />

      <Callout variant="warning" className="mt-8" label="official">
        If any item is unchecked or uncertain, do not publish. Verify in ClickUp and ask for help if
        needed.
      </Callout>
    </PageShell>
  );
}
