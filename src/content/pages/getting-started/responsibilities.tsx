import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";

const responsibilities = [
  {
    category: "Production Monitoring",
    items: [
      "Monitor task progress in ClickUp",
      "Check deadlines and due dates",
      "Verify task statuses",
      "Follow up when tasks appear behind schedule",
    ],
  },
  {
    category: "Coordination",
    items: [
      "Coordinate with departments through ClickUp",
      "Use the Production GC when coordination is needed",
      "Tag the appropriate Head when assignees are missing",
    ],
  },
  {
    category: "Publishing",
    items: [
      "Schedule approved content via Meta Business Suite",
      "Publish content on the assigned publishing day",
      "Confirm posts appear correctly in the Content Planner",
      "Update ClickUp after publishing",
    ],
  },
  {
    category: "Community Management",
    items: [
      "Monitor comments and messages after publishing",
      "Respond professionally to user inquiries",
      "Escalate when necessary — do not guess",
    ],
  },
  {
    category: "Analytics",
    items: [
      "Review social media performance monthly",
      "Identify top and lowest-performing posts",
      "Participate in monthly analytics review",
    ],
  },
];

export default function ResponsibilitiesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Getting Started", href: "/getting-started/welcome" },
        { label: "OM Responsibilities" },
      ]}
    >
      <PageHeader
        title="OM Responsibilities"
        description="Core duties that Online Managers are expected to handle as part of the SAS Bulletin workflow."
      />
      <Prose>
        <p>
          OM responsibilities span the full content lifecycle — from monitoring production in ClickUp
          to publishing on Meta and managing the community afterward.
        </p>
      </Prose>

      <div className="mt-8 space-y-8">
        {responsibilities.map((group) => (
          <div key={group.category}>
            <SectionLabel>{group.category}</SectionLabel>
            <ul className="space-y-2 text-sm text-navy-800 dark:text-blue-100/90">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Callout variant="info" title="Not a Daily Analytics Task" className="mt-8" label="recommended">
        Analytics review is conducted monthly — not as part of daily publishing duties. Focus daily
        efforts on monitoring, publishing, and community management.
      </Callout>
    </PageShell>
  );
}
