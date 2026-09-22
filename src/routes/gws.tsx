import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Cloud,
  Download,
  Mail,
  MessageCircle,
  Users,
  Video,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/gws")({
  head: () => ({
    meta: [
      { title: "Google Workspace Knowledge Base | IPNET" },
      {
        name: "description",
        content:
          "Google Workspace playbooks, admin guides, and training curriculums for the CXM team.",
      },
      {
        property: "og:title",
        content: "Google Workspace Knowledge Base | IPNET",
      },
      {
        property: "og:description",
        content:
          "Google Workspace playbooks, admin guides, and training curriculums for the CXM team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GwsPage,
});

// ---------------------------------------------------------------------------
// Tipos locais
// ---------------------------------------------------------------------------
type GwsTool = {
  name: string;
  description: string;
  icon: React.ElementType;
};

type GwsTraining = {
  title: string;
  audience: string;
  duration: string;
};

// ---------------------------------------------------------------------------
// Dados iniciais (seed / fallback enquanto o Firestore não retorna)
// ---------------------------------------------------------------------------
const INITIAL_GWS_TOOLS: GwsTool[] = [
  {
    name: "Gmail",
    description: "Email management, security settings, and user guides.",
    icon: Mail,
  },
  {
    name: "Google Drive",
    description: "Storage policies, sharing rules, and migration tips.",
    icon: Cloud,
  },
  {
    name: "Google Meet",
    description: "Meeting best practices, recordings, and troubleshooting.",
    icon: Video,
  },
  {
    name: "Google Chat",
    description: "Team spaces, notifications, and collaboration workflows.",
    icon: MessageCircle,
  },
  {
    name: "Google Calendar",
    description: "Scheduling, resource calendars, and delegation setup.",
    icon: Calendar,
  },
];

const INITIAL_GWS_TRAININGS: GwsTraining[] = [
  {
    title: "GWS Fundamentals",
    audience: "New hires & CXM team",
    duration: "4 hours",
  },
  {
    title: "Admin Console Deep Dive",
    audience: "Administrators",
    duration: "6 hours",
  },
  {
    title: "Security & Compliance",
    audience: "Security & CXM leads",
    duration: "3 hours",
  },
  {
    title: "Change Management for GWS",
    audience: "Project managers",
    duration: "2 hours",
  },
];

function GwsPage() {
  const [tools, setTools] = useState<GwsTool[]>(INITIAL_GWS_TOOLS);
  const [trainings, setTrainings] =
    useState<GwsTraining[]>(INITIAL_GWS_TRAININGS);

  useEffect(() => {
    // TODO: Buscar ferramentas GWS do Firestore
    // Coleção sugerida: `gws_tools` (ordenar por campo `order`)
    // Exemplo:
    // import { collection, getDocs, orderBy, query } from "firebase/firestore";
    // import { db } from "@/lib/firebase";
    //
    // const snap = await getDocs(query(collection(db, "gws_tools"), orderBy("order")));
    // const data = snap.docs.map((doc) => ({ name: doc.data().name, description: doc.data().description, icon: ... }));
    // setTools(data);

    // TODO: Buscar currículos de treinamento GWS do Firestore
    // Coleção sugerida: `gws_trainings` (ordenar por campo `order`)
    // Exemplo:
    // const snapT = await getDocs(query(collection(db, "gws_trainings"), orderBy("order")));
    // const dataT = snapT.docs.map((doc) => ({ title: doc.data().title, audience: doc.data().audience, duration: doc.data().duration }));
    // setTrainings(dataT);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Google Workspace{" "}
            <span className="text-brand-purple">Knowledge Base</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Collaboration and productivity resources for the Customer
            Experience Management team.
          </p>
        </div>

        {/* Featured Banner */}
        <section className="mb-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="bg-gradient-to-r from-brand-purple to-[#a855f7] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div className="flex max-w-3xl flex-col items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Colaboração & Produtividade
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/90">
                Discover best practices for driving adoption, managing change,
                and supporting end users across the Google Workspace suite.
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-lime-foreground shadow-sm transition hover:bg-brand-lime/90"
              >
                View Best Practices
              </a>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h3 className="mb-6 text-xl font-bold text-foreground">
            Main Tools
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <a
                  key={tool.name}
                  href="#"
                  className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-purple/10 transition-colors group-hover:bg-brand-purple/15">
                    <Icon className="h-7 w-7 text-brand-purple" />
                  </div>
                  <h4 className="text-base font-bold text-foreground">
                    {tool.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* Training Curriculums */}
        <section>
          <h3 className="mb-6 text-xl font-bold text-foreground">
            Ementas de Treinamento GWS
          </h3>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-foreground">
                      Curriculum
                    </th>
                    <th className="px-6 py-4 font-semibold text-foreground">
                      Audience
                    </th>
                    <th className="px-6 py-4 font-semibold text-foreground">
                      Duration
                    </th>
                    <th className="px-6 py-4 font-semibold text-foreground">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {trainings.map((training) => (
                    <tr
                      key={training.title}
                      className="transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-4 font-medium text-brand-purple">
                        {training.title}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {training.audience}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {training.duration}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="inline-flex items-center gap-1.5 rounded-full bg-brand-lime px-4 py-1.5 text-xs font-semibold text-brand-lime-foreground transition hover:bg-brand-lime/90"
                        >
                          <Download className="h-3.5 w-3.5" />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
