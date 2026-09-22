import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Academy & Training | IPNET" },
      {
        name: "description",
        content:
          "Learning management dashboard for Google Cloud Skill Boosts, study support gems, and GWS training agendas.",
      },
      { property: "og:title", content: "Academy & Training | IPNET" },
      {
        property: "og:description",
        content:
          "Learning management dashboard for Google Cloud Skill Boosts, study support gems, and GWS training agendas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademyPage,
});

const gwsAgenda = [
  "Workspace Admin Fundamentals",
  "User & License Management",
  "Security & Data Protection",
  "Migration & Change Management",
];

function AcademyPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Academy &{" "}
            <span className="text-brand-purple">Training</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Build cloud skills, earn certifications, and keep the team ahead of
            the curve.
          </p>
        </div>

        {/* Featured Skill Boost Card */}
        <section className="mb-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-lg">
            <div className="grid lg:grid-cols-5">
              <div className="col-span-3 p-8 sm:p-10 lg:p-12">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-purple/10 px-3 py-1 text-sm font-semibold text-brand-purple">
                  <Trophy className="h-4 w-4" />
                  Featured Track
                </div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  Google Cloud Skill Boosts
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Hands-on labs and challenge quests designed to accelerate
                  your Google Cloud expertise. Complete the track to earn
                  digital badges and prepare for certification exams.
                </p>

                <div className="mt-8">
                  <div className="flex items-center justify-between text-sm font-medium text-foreground">
                    <span>Track progress</span>
                    <span className="text-brand-purple">65%</span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-brand-purple to-[#a855f7]" />
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center rounded-full bg-brand-lime px-6 py-3 text-sm font-semibold text-brand-lime-foreground shadow-sm transition hover:bg-brand-lime/90"
                >
                  Start Learning Now
                </a>
              </div>
              <div className="col-span-2 hidden items-center justify-center bg-gradient-to-br from-brand-purple to-[#a855f7] lg:flex">
                <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm">
                  <GraduationCap className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Grid */}
        <section className="grid gap-6 lg:grid-cols-2">
          {/* Gems for Study Support */}
          <div className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-purple/10">
              <Sparkles className="h-8 w-8 text-brand-purple" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Gems for Study Support
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Curated AI-powered study companions: flashcards, practice
              questions, and summarized guides to help you retain what matters.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "AI-generated practice exams",
                "Concept flashcards by topic",
                "Personalized study plans",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-purple" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-lime-foreground shadow-sm transition hover:bg-brand-lime/90"
            >
              Explore Gems
            </a>
          </div>

          {/* GWS Training Agenda */}
          <div className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-purple/10">
              <BookOpen className="h-8 w-8 text-brand-purple" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              GWS Training Agenda
            </h3>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              A structured learning path for mastering Google Workspace
              administration and end-user adoption.
            </p>
            <div className="mt-6 flex-1 divide-y divide-border rounded-2xl border border-border">
              {gwsAgenda.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-purple/10 text-xs font-bold text-brand-purple">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-xs font-semibold text-brand-purple hover:underline"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-lime-foreground shadow-sm transition hover:bg-brand-lime/90"
            >
              Open Full Agenda
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
