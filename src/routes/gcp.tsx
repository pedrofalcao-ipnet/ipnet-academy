import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/gcp")({
  head: () => ({
    meta: [
      { title: "Google Cloud (GCP) | CXM Knowledge Base" },
      {
        name: "description",
        content:
          "Google Cloud knowledge base hub for the Customer Experience Management team.",
      },
      {
        property: "og:title",
        content: "Google Cloud (GCP) | CXM Knowledge Base",
      },
      {
        property: "og:description",
        content:
          "Google Cloud knowledge base hub for the Customer Experience Management team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GcpPage,
});

const categories = [
  { id: "infra", label: "Infra & Networking" },
  { id: "data", label: "Data & Storage" },
  { id: "ai", label: "AI" },
  { id: "ops", label: "Ops & FinOps" },
  { id: "apis", label: "APIs" },
];

const services: Record<
  string,
  { title: string; docsUrl: string; initial: string }[]
> = {
  infra: [
    { title: "Compute Engine", docsUrl: "#", initial: "CE" },
    { title: "Kubernetes Engine", docsUrl: "#", initial: "GKE" },
    { title: "Cloud Load Balancing", docsUrl: "#", initial: "LB" },
    { title: "VPC Network", docsUrl: "#", initial: "VPC" },
    { title: "Cloud CDN", docsUrl: "#", initial: "CDN" },
    { title: "Cloud DNS", docsUrl: "#", initial: "DNS" },
  ],
  data: [
    { title: "BigQuery", docsUrl: "#", initial: "BQ" },
    { title: "Cloud Storage", docsUrl: "#", initial: "CS" },
    { title: "Cloud SQL", docsUrl: "#", initial: "SQL" },
    { title: "Cloud Spanner", docsUrl: "#", initial: "SP" },
    { title: "Firestore", docsUrl: "#", initial: "FS" },
    { title: "Pub/Sub", docsUrl: "#", initial: "PS" },
  ],
  ai: [
    { title: "Vertex AI", docsUrl: "#", initial: "VX" },
    { title: "Gemini API", docsUrl: "#", initial: "GM" },
    { title: "AutoML", docsUrl: "#", initial: "AM" },
    { title: "Dialogflow", docsUrl: "#", initial: "DF" },
    { title: "Vision AI", docsUrl: "#", initial: "VI" },
    { title: "Natural Language API", docsUrl: "#", initial: "NL" },
  ],
  ops: [
    { title: "Cloud Monitoring", docsUrl: "#", initial: "CM" },
    { title: "Cloud Logging", docsUrl: "#", initial: "CL" },
    { title: "Cloud Trace", docsUrl: "#", initial: "CT" },
    { title: "Cloud Billing", docsUrl: "#", initial: "CB" },
    { title: "Cost Management", docsUrl: "#", initial: "CO" },
    { title: "Cloud Build", docsUrl: "#", initial: "BD" },
  ],
  apis: [
    { title: "Apigee", docsUrl: "#", initial: "AP" },
    { title: "Cloud Endpoints", docsUrl: "#", initial: "EP" },
    { title: "API Gateway", docsUrl: "#", initial: "GW" },
    { title: "Service Directory", docsUrl: "#", initial: "SD" },
    { title: "Cloud Tasks", docsUrl: "#", initial: "TK" },
    { title: "Cloud Scheduler", docsUrl: "#", initial: "SC" },
  ],
};

function GcpPage() {
  const [activeTab, setActiveTab] = useState("infra");

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-background">
      {/* Hero */}
      <section className="px-4 pb-6 pt-12 text-center sm:px-6 lg:pt-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Google Cloud <span className="text-brand-purple">Knowledge Base</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Curated documentation, playbooks, and resources organized by GCP
          service category.
        </p>
      </section>

      {/* Tabs */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-1">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative rounded-t-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none ${
                  isActive
                    ? "text-brand-purple"
                    : "text-muted-foreground hover:text-brand-purple"
                }`}
              >
                {category.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brand-purple" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tiles */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(services[activeTab] ?? []).map((service) => (
            <div
              key={service.title}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand-purple/20 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                {/* Logo placeholder */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple to-[#a855f7] text-xs font-bold text-white shadow-sm">
                  {service.initial}
                </div>
                <h2 className="text-base font-semibold text-foreground">
                  {service.title}
                </h2>
              </div>
              <a
                href={service.docsUrl}
                className="ml-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-brand-purple transition hover:bg-brand-purple/10 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
              >
                Docs
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
