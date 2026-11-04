import Link from "next/link";
import { profile } from "@/content/profile";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-line/70 border-b bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {profile.name.split(" ").slice(0, 3).join(" ")}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-3 py-1.5 text-muted text-sm transition-colors hover:text-ink sm:inline-block"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-ink"
          >
            Résumé
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
