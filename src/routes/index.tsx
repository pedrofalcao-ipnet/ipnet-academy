import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud,
  GraduationCap,
  LayoutGrid,
  Search,
  Server,
  Settings,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CXM Knowledge Base | IPNET" },
      {
        name: "description",
        content:
          "Internal knowledge base dashboard for the Customer Experience Management team.",
      },
      { property: "og:title", content: "CXM Knowledge Base | IPNET" },
      {
        property: "og:description",
        content:
          "Internal knowledge base dashboard for the Customer Experience Management team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ---------------------------------------------------------------------------
// Tipos locais
// ---------------------------------------------------------------------------
type CategoryCard = {
  title: string;
  description: string;
  icon: React.ElementType;
  to: string;
};

// ---------------------------------------------------------------------------
// Dados iniciais (seed / fallback enquanto o Firestore não retorna)
// ---------------------------------------------------------------------------
const INITIAL_CATEGORIES: CategoryCard[] = [
  {
    title: "Internal Processes",
    description:
      "Standard operating procedures, escalation paths, and team workflows.",
    icon: Settings,
    to: "/processes",
  },
  {
    title: "IPNET Exclusive Services",
    description:
      "Proprietary service offerings, SLAs, and delivery playbooks for clients.",
    icon: Star,
    to: "/services",
  },
  {
    title: "Google Cloud (GCP)",
    description:
      "GCP product guides, architecture patterns, and troubleshooting runbooks.",
    icon: Cloud,
    to: "/gcp",
  },
  {
    title: "Oracle Cloud (OCI)",
    description:
      "OCI resources, migration notes, and customer onboarding templates.",
    icon: Server,
    to: "/oci",
  },
  {
    title: "Google Workspace (GWS)",
    description:
      "Admin guides, licensing FAQs, and change-management documentation.",
    icon: LayoutGrid,
    to: "/gws",
  },
  {
    title: "Academy & Training",
    description:
      "Certification tracks, training materials, and skill-building resources.",
    icon: GraduationCap,
    to: "/academy",
  },
];

function Index() {
  const [categories, setCategories] =
    useState<CategoryCard[]>(INITIAL_CATEGORIES);

  useEffect(() => {
    // TODO: Buscar categorias do Firestore
    // Coleção sugerida: `home_categories`
    // Exemplo:
    // import { collection, getDocs } from "firebase/firestore";
    // import { db } from "@/lib/firebase";
    //
    // const snap = await getDocs(collection(db, "home_categories"));
    // const data = snap.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // })) as CategoryCard[];
    // setCategories(data);
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-background">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-16 lg:pt-28">
        <h1 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Welcome back,{" "}
          <span className="text-brand-purple">CXM Team</span>
        </h1>
        <p className="mt-4 max-w-2xl text-center text-base text-muted-foreground sm:text-lg">
          Find playbooks, documentation, and processes in one place.
        </p>

        <div className="relative mt-10 w-full max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search for playbooks, documentations, or processes..."
            className="h-14 w-full rounded-2xl border border-border bg-card pl-12 pr-4 text-base text-foreground shadow-sm outline-none ring-0 transition placeholder:text-muted-foreground/70 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          />
        </div>
      </section>

      {/* Main Grid */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.to}
                className="group flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10 transition-colors group-hover:bg-brand-purple/15">
                  <Icon className="h-7 w-7 text-brand-purple" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
