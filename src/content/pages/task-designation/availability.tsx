import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

export default function AvailabilityPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Task Designation", href: "/task-designation/assigning-oms" },
        { label: "Availability" },
      ]}
    >
      <PageHeader
        title="Availability"
        description="Managing OM availability for publishing tasks."
      />
      <Prose>
        <p>
          The OM team has multiple members and not everyone may be available at the same time. When
          availability changes, communicate and update responsibilities.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>If the Assigned OM Is Unavailable</SectionLabel>
        <Prose>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Contact the OM Head as soon as possible</li>
            <li>Do not publish the post without coordination</li>
            <li>Another available OM may take over with OM Head approval</li>
            <li>Update the assignment in ClickUp so the team knows who is handling it</li>
          </ol>
        </Prose>
      </div>

      <Callout variant="warning" className="mt-8" label="official">
        Never assume someone else will publish. If you cannot handle an assigned task, communicate
        immediately so another OM can be assigned.
      </Callout>
    </PageShell>
  );
}
