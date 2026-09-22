import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  Briefcase,
  Cloud,
  Database,
  Globe,
  HardHat,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "IPNET Exclusive Services | CXM Knowledge Base" },
      {
        name: "description",
        content:
          "Explore IPNET's exclusive service offerings for cloud Customer Experience Management.",
      },
      {
        property: "og:title",
        content: "IPNET Exclusive Services | CXM Knowledge Base",
      },
      {
        property: "og:description",
        content:
          "Explore IPNET's exclusive service offerings for cloud Customer Experience Management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Products",
    sellingPoint: "Curated cloud solutions tailored to accelerate customer outcomes.",
    icon: Box,
  },
  {
    title: "Infrastructure Projects",
    sellingPoint: "End-to-end design and delivery of scalable cloud infrastructure.",
    icon: HardHat,
  },
  {
    title: "Geocore",
    sellingPoint: "Location-aware services that power global expansion strategies.",
    icon: Globe,
  },
  {
    title: "Cloud Core",
    sellingPoint: "Foundational cloud platforms built for performance and resilience.",
    icon: Cloud,
  },
  {
    title: "Data Core",
    sellingPoint: "Unified data foundations that turn information into action.",
    icon: Database,
  },
  {
    title: "Cloud Productivity",
    sellingPoint: "Modern collaboration tools that keep teams connected and efficient.",
    icon: Briefcase,
  },
];

function ServicesPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-background">
      {/* Hero */}
      <section className="px-4 pb-10 pt-16 text-center sm:px-6 lg:pb-14 lg:pt-24">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          IPNET <span className="text-brand-purple">Exclusive Services</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          A curated portfolio of cloud offerings designed to support every stage
          of the customer journey.
        </p>
      </section>

      {/* Grid */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Top colored header */}
                <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-brand-purple to-[#a855f7] overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                  </div>
                </div>

                {/* Center white box */}
                <div className="relative -mt-12 mx-6 rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10">
                    <Icon className="h-7 w-7 text-brand-purple" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.sellingPoint}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div className="mt-auto flex items-center justify-center p-6 pt-4">
                  <button className="inline-flex items-center justify-center rounded-full bg-brand-lime px-6 py-2.5 text-sm font-semibold text-brand-lime-foreground shadow-sm transition hover:bg-brand-lime/90 focus:outline-none focus:ring-2 focus:ring-brand-lime/30">
                    Access Material
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
