"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Checklist } from "@/components/ui/Checklist";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ProgressTracker } from "@/components/ui/ProgressTracker";
import { newOmChecklist } from "@/content/shared";

export default function WelcomePage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Getting Started", href: "/getting-started/welcome" },
        { label: "Welcome to OM" },
      ]}
    >
      <PageHeader
        title="Welcome, Online Manager."
        description="This manual is your guide to keeping SAS Bulletin's online workflow organized — from production monitoring to publishing and community management."
      />
      <Prose>
        <p>
          The OM role is not simply &ldquo;posting.&rdquo; Online Managers help keep the organization&apos;s
          online workflow organized so that the right content reaches the right audience at the right time.
        </p>
      </Prose>

      <div className="my-8 grid gap-6 lg:grid-cols-2">
        <div>
          <SectionLabel>What OMs Help With</SectionLabel>
          <ul className="space-y-2 text-sm text-navy-800 dark:text-blue-100/90">
            {[
              "Monitoring production",
              "Checking deadlines",
              "Checking task status",
              "Coordinating with departments",
              "Scheduling approved content",
              "Publishing content",
              "Managing comments and messages",
              "Monitoring notifications",
              "Reviewing social media performance",
              "Conducting monthly analytics review",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ProgressTracker />
      </div>

      <Checklist id="new-om-setup" title="New OM Setup Checklist" items={newOmChecklist} />

      <Callout variant="principle" title="Remember" className="mt-8" label="recommended">
        Take your time going through each section. Use the search bar (Ctrl+K) whenever you need to find
        something quickly.
      </Callout>
    </PageShell>
  );
}
