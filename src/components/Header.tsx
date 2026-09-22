import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

const navItems = [
  "Home",
  "Processes",
  "Services",
  "GCP",
  "OCI",
  "GWS",
  "Academy",
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple">
        <BookOpen className="h-4 w-4 text-white" />
      </div>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        IPNET
      </span>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const to = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                to={to}
                activeProps={{
                  className: "text-brand-purple font-semibold",
                }}
                inactiveProps={{
                  className: "text-muted-foreground hover:text-brand-purple",
                }}
                className="text-sm font-medium transition-colors"
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <button className="rounded-full bg-brand-lime px-4 py-2 text-sm font-semibold text-brand-lime-foreground shadow-sm transition hover:bg-brand-lime/90 md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}
