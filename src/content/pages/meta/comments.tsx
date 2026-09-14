import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { ScreenshotPlaceholder } from "@/components/ui/ScreenshotPlaceholder";

export default function MetaCommentsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Comments" },
      ]}
    >
      <PageHeader
        title="Comments"
        description="Managing comments on Facebook and Instagram through Meta Business Suite."
      />
      <Prose>
        <p>
          Meta Business Suite allows OMs to view and respond to comments on published posts from both
          Facebook and Instagram in one place.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>OM Guidelines</SectionLabel>
        <Prose>
          <ul className="list-disc space-y-2 pl-5">
            <li>Be polite and professional in all responses</li>
            <li>Use confirmed information — do not guess</li>
            <li>Escalate sensitive or difficult interactions when necessary</li>
            <li>Do not argue publicly with users</li>
          </ul>
        </Prose>
      </div>

      <div className="mt-8">
        <ScreenshotPlaceholder label="[Insert current Meta Business Suite screenshot here]" />
      </div>

      <Callout variant="principle" title="VERIFY → ASK → RESPOND" className="mt-8" label="official">
        If you don&apos;t know the answer to a comment, verify first. Ask the appropriate Head or
        Execomm before responding.
      </Callout>
    </PageShell>
  );
}
