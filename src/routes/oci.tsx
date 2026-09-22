import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Box,
  Cloud,
  Database,
  FolderOpen,
  Layers,
  Lock,
  Monitor,
  Server,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/oci")({
  head: () => ({
    meta: [
      { title: "Oracle Cloud (OCI) | CXM Knowledge Base" },
      {
        name: "description",
        content:
          "Oracle Cloud knowledge base hub for the Customer Experience Management team.",
      },
      {
        property: "og:title",
        content: "Oracle Cloud (OCI) | CXM Knowledge Base",
      },
      {
        property: "og:description",
        content:
          "Oracle Cloud knowledge base hub for the Customer Experience Management team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OciPage,
});

// ---------------------------------------------------------------------------
// Tipos locais
// ---------------------------------------------------------------------------
type OciCategory = { id: string; label: string };
type OciService = {
  title: string;
  playbookUrl: string;
  icon: typeof Server;
};

// ---------------------------------------------------------------------------
// Dados iniciais (seed / fallback enquanto o Firestore não retorna)
// ---------------------------------------------------------------------------
const INITIAL_OCI_CATEGORIES: OciCategory[] = [
  { id: "core", label: "Core Infra" },
  { id: "database", label: "Database" },
  { id: "security", label: "Security & Management" },
  { id: "modernization", label: "Modernization" },
];

const INITIAL_OCI_SERVICES: Record<string, OciService[]> = {
  core: [
    { title: "Compute", playbookUrl: "#", icon: Server },
    { title: "Object Storage", playbookUrl: "#", icon: FolderOpen },
    { title: "Container Engine", playbookUrl: "#", icon: Box },
    { title: "Virtual Cloud Network", playbookUrl: "#", icon: Cloud },
    { title: "Load Balancer", playbookUrl: "#", icon: Layers },
  ],
  database: [
    { title: "Autonomous Database", playbookUrl: "#", icon: Database },
    { title: "Exadata Cloud Service", playbookUrl: "#", icon: Database },
    { title: "MySQL Database", playbookUrl: "#", icon: Database },
    { title: "NoSQL Database", playbookUrl: "#", icon: Database },
  ],
  security: [
    { title: "Web Application Firewall", playbookUrl: "#", icon: ShieldCheck },
    { title: "Monitoring", playbookUrl: "#", icon: Monitor },
    { title: "Identity & Access Management", playbookUrl: "#", icon: Users },
    { title: "Cloud Guard", playbookUrl: "#", icon: Shield },
    { title: "Vault", playbookUrl: "#", icon: Lock },
  ],
  modernization: [
    { title: "Functions", playbookUrl: "#", icon: Cloud },
    { title: "API Gateway", playbookUrl: "#", icon: Layers },
    { title: "Integration Cloud", playbookUrl: "#", icon: Box },
    { title: "Container Registry", playbookUrl: "#", icon: Box },
  ],
};

function OciPage() {
  const [activeTab, setActiveTab] = useState("core");
  const [categories, setCategories] =
    useState<OciCategory[]>(INITIAL_OCI_CATEGORIES);
  const [services, setServices] =
    useState<Record<string, OciService[]>>(INITIAL_OCI_SERVICES);

  useEffect(() => {
    // TODO: Buscar categorias OCI do Firestore
    // Coleção sugerida: `oci_categories` (ordenar por campo `order`)
    // Exemplo:
    // import { collection, getDocs, orderBy, query } from "firebase/firestore";
    // import { db } from "@/lib/firebase";
    //
    // const snap = await getDocs(query(collection(db, "oci_categories"), orderBy("order")));
    // const data = snap.docs.map((doc) => ({ id: doc.id, label: doc.data().label }));
    // setCategories(data);
  }, []);

  useEffect(() => {
    // TODO: Buscar serviços OCI do Firestore para a aba ativa
    // Coleção sugerida: `oci_services` com campo `category` para filtrar
    // Exemplo:
    // import { collection, getDocs, query, where } from "firebase/firestore";
    // import { db } from "@/lib/firebase";
    //
    // const snap = await getDocs(
    //   query(collection(db, "oci_services"), where("category", "==", activeTab))
    // );
    // const data = snap.docs.map((doc) => ({ title: doc.data().title, playbookUrl: doc.data().playbookUrl, icon: ... }));
    // setServices((prev) => ({ ...prev, [activeTab]: data }));
  }, [activeTab]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-background">
      {/* Hero */}
      <section className="px-4 pb-6 pt-12 text-center sm:px-6 lg:pt-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Oracle Cloud <span className="text-brand-purple">Knowledge Base</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          OCI playbooks, service guides, and resources organized by capability
          area.
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

      {/* List */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          {(services[activeTab] ?? []).map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={service.playbookUrl}
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-brand-purple/20 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-purple/10">
                    <Icon className="h-5 w-5 text-brand-purple" />
                  </div>
                  <h2 className="text-base font-semibold text-foreground transition group-hover:text-brand-purple">
                    {service.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-brand-purple">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Open Playbook</span>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
