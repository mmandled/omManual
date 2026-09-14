import type { NavItem } from "./types";

export const navigation: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Getting Started",
    href: "/getting-started/welcome",
    children: [
      { title: "Welcome to OM", href: "/getting-started/welcome" },
      { title: "What is an Online Manager?", href: "/getting-started/what-is-om" },
      { title: "OM Responsibilities", href: "/getting-started/responsibilities" },
      { title: "OM Team Structure", href: "/getting-started/team-structure" },
    ],
  },
  {
    title: "Workflow",
    href: "/workflow/overall",
    children: [
      { title: "Overall Workflow", href: "/workflow/overall" },
      { title: "Production Workflow", href: "/workflow/production" },
      { title: "ClickUp → Messenger Workflow", href: "/workflow/clickup-messenger" },
      { title: "Publishing Workflow", href: "/workflow/publishing" },
      { title: "What To Do If...", href: "/workflow/troubleshooting" },
    ],
  },
  {
    title: "ClickUp",
    href: "/clickup/overview",
    children: [
      { title: "ClickUp Overview", href: "/clickup/overview" },
      { title: "Project Structure", href: "/clickup/project-structure" },
      { title: "Tasks", href: "/clickup/tasks" },
      { title: "Assignees", href: "/clickup/assignees" },
      { title: "Due Dates", href: "/clickup/due-dates" },
      { title: "Priority", href: "/clickup/priority" },
      { title: "Statuses", href: "/clickup/statuses" },
      { title: "Task Comments", href: "/clickup/task-comments" },
      { title: "Submitting Outputs", href: "/clickup/submitting-outputs" },
      { title: "OM Monitoring", href: "/clickup/om-monitoring" },
    ],
  },
  {
    title: "Meta Business Suite",
    href: "/meta/overview",
    children: [
      { title: "Overview", href: "/meta/overview" },
      { title: "Scheduling Posts", href: "/meta/scheduling" },
      { title: "Publishing Posts", href: "/meta/publishing" },
      { title: "Content Planner", href: "/meta/content-planner" },
      { title: "Notifications", href: "/meta/notifications" },
      { title: "Comments", href: "/meta/comments" },
      { title: "Messages", href: "/meta/messages" },
      { title: "Basic Analytics", href: "/meta/analytics" },
    ],
  },
  {
    title: "Social Media",
    href: "/social/facebook",
    children: [
      { title: "Facebook", href: "/social/facebook" },
      { title: "Instagram", href: "/social/instagram" },
      { title: "Posting Guidelines", href: "/social/posting-guidelines" },
      { title: "Community Management", href: "/social/community-management" },
      { title: "Responding to Users", href: "/social/responding" },
      { title: "Escalation", href: "/social/escalation" },
    ],
  },
  {
    title: "Task Designation",
    href: "/task-designation/assigning-oms",
    children: [
      { title: "Assigning OMs", href: "/task-designation/assigning-oms" },
      { title: "Publishing Responsibilities", href: "/task-designation/publishing-responsibilities" },
      { title: "Availability", href: "/task-designation/availability" },
      { title: "Avoiding Duplicate Work", href: "/task-designation/avoiding-duplicates" },
      { title: "Follow-ups", href: "/task-designation/follow-ups" },
    ],
  },
  {
    title: "Analytics",
    href: "/analytics/monthly",
    children: [
      { title: "Monthly Analytics", href: "/analytics/monthly" },
      { title: "What to Monitor", href: "/analytics/what-to-monitor" },
      { title: "Key Metrics", href: "/analytics/key-metrics" },
      { title: "Monthly Review", href: "/analytics/monthly-review" },
    ],
  },
  {
    title: "Quick Reference",
    href: "/quick-reference/cheat-sheet",
    children: [
      { title: "OM Cheat Sheet", href: "/quick-reference/cheat-sheet" },
      { title: "Before Publishing", href: "/quick-reference/before-publishing" },
      { title: "After Publishing", href: "/quick-reference/after-publishing" },
      { title: "If Something Goes Wrong", href: "/quick-reference/if-something-goes-wrong" },
      { title: "If You're Unsure", href: "/quick-reference/if-unsure" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "Important Links", href: "/resources" },
      { title: "SASB Google Drive", href: "/resources" },
    ],
  },
];

export const progressSections = [
  { key: "getting-started", label: "Getting Started", href: "/getting-started/welcome" },
  { key: "workflow", label: "Workflow", href: "/workflow/overall" },
  { key: "clickup", label: "ClickUp", href: "/clickup/overview" },
  { key: "meta", label: "Meta Business Suite", href: "/meta/overview" },
  { key: "social", label: "Social Media", href: "/social/facebook" },
  { key: "task-designation", label: "Task Designation", href: "/task-designation/assigning-oms" },
  { key: "analytics", label: "Analytics", href: "/analytics/monthly" },
  { key: "quick-reference", label: "Quick Reference", href: "/quick-reference/cheat-sheet" },
  { key: "resources", label: "Resources", href: "/resources" },
];

export function getSectionFromPath(pathname: string): string | null {
  if (pathname === "/") return null;
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment ?? null;
}
