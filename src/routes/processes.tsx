import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/processes")({
  head: () => ({
    meta: [
      { title: "Internal Processes | CXM Knowledge Base" },
      {
        name: "description",
        content:
          "Internal processes documentation for the Customer Experience Management team.",
      },
      { property: "og:title", content: "Internal Processes | CXM Knowledge Base" },
      {
        property: "og:description",
        content:
          "Internal processes documentation for the Customer Experience Management team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessesPage,
});

const sidebarLinks = [
  { id: "service-teams", label: "Times de Serviço" },
  { id: "renew-salesops", label: "Renew vs SalesOps" },
  { id: "financeiro", label: "Financeiro" },
  { id: "administrative", label: "Administrative" },
];

const sections = [
  {
    id: "service-teams",
    title: "When to engage service teams?",
    description:
      "Guidelines on identifying the right moment to pull in technical, support, or professional services teams during a customer lifecycle.",
  },
  {
    id: "renew-salesops",
    title: "Understanding Renew vs SalesOps roles",
    description:
      "Clarify ownership between renewal managers and SalesOps across forecasting, quoting, booking, and account handovers.",
  },
  {
    id: "financeiro",
    title: "Finance Department FAQs",
    description:
      "Common questions around invoicing, credit holds, revenue recognition, PO handling, and finance escalation paths.",
  },
  {
    id: "administrative",
    title: "Administrative Due Diligence",
    description:
      "Checklists and requirements for contracts, legal review, vendor onboarding, and compliance documentation.",
  },
];

function ProcessesPage() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setActiveHash(window.location.hash);
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
      {/* Left Sidebar */}
      <aside className="lg:sticky lg:top-24 lg:h-fit lg:w-64 lg:flex-shrink-0">
        <nav className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-2">
          {sidebarLinks.map((link) => {
            const isActive = activeHash === `#${link.id}`;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-accent hover:text-brand-purple ${
                  isActive
                    ? "text-brand-purple font-semibold bg-brand-purple/10"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* Right Content */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Internal Processes
        </h1>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground">
          Documentation and playbooks to help the CXM team navigate internal
          workflows.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to="/processes"
              id={section.id}
              className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand-purple/20 hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-purple/10">
                <FileText className="h-6 w-6 text-brand-purple" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-purple transition group-hover:underline">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
