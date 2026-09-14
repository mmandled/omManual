import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function PostingGuidelinesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Social Media", href: "/social/facebook" },
        { label: "Posting Guidelines" },
      ]}
    >
      <PageHeader
        title="Posting Guidelines"
        description="General guidelines for publishing on SAS Bulletin social media."
      />
      <Prose>
        <p>
          OMs are responsible for publishing approved content — not creating or approving it. Follow
          these guidelines to ensure consistent, professional publishing.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Before Publishing</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Verify the ClickUp task is Ready to Publish</li>
            <li>Confirm the final output and approved caption are in the task comment</li>
            <li>Check the correct account (Facebook, Instagram, or both)</li>
            <li>Verify date, time, tags, mentions, and links</li>
            <li>Review the preview before scheduling or publishing</li>
          </ul>
        </Prose>
      </div>

      <div className="mt-8">
        <SectionLabel>After Publishing</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Confirm the post went live or appears in the Content Planner</li>
            <li>Update ClickUp status to Published / Complete</li>
            <li>Monitor comments, messages, and notifications</li>
          </ul>
        </Prose>
      </div>

      <Callout variant="principle" title="ONE POST = ONE ASSIGNED OM" className="mt-8" label="official">
        Only the assigned OM should publish a given post. Coordinate with the OM Head if reassignment
        is needed.
      </Callout>
    </PageShell>
  );
}
