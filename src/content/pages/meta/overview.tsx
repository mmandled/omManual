import { PageShell } from "@/components/layout/PageShell";
import { Callout } from "@/components/ui/Callout";
import { Card } from "@/components/ui/Card";
import { PageHeader, Prose, SectionLabel } from "@/components/ui/PageHeader";
import { metaFunctions } from "@/content/shared";
import Link from "next/link";

export default function MetaOverviewPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Meta Business Suite", href: "/meta/overview" },
        { label: "Overview" },
      ]}
    >
      <PageHeader
        title="Meta Business Suite"
        description="Where approved content becomes published content."
      />
      <Prose>
        <p>
          Meta Business Suite is one of the OM&apos;s primary tools. Use it to schedule and publish
          content on SAS Bulletin&apos;s Facebook and Instagram accounts, manage comments and messages,
          and review basic analytics.
        </p>
      </Prose>

      <div className="mt-8">
        <SectionLabel>Main Functions</SectionLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metaFunctions.map((fn) => (
            <Link key={fn.title} href={fn.href}>
              <Card hover className="h-full">
                <h3 className="mb-2 font-semibold text-navy-900 dark:text-blue-50">{fn.title}</h3>
                <p className="text-sm text-navy-700 dark:text-blue-200/80">{fn.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Callout variant="principle" title="Always Verify in ClickUp First" className="mt-8" label="official">
        Before scheduling or publishing anything in Meta Business Suite, confirm the ClickUp task is
        Ready to Publish with the final output and approved caption submitted.
      </Callout>

      <Callout variant="info" className="mt-4" label="example">
        Meta Business Suite link: [To be added]
      </Callout>
    </PageShell>
  );
}
