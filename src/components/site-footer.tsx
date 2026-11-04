import { profile } from "@/content/profile";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-line border-t py-8 text-muted text-sm">
      <Container className="flex flex-col justify-between gap-3 sm:flex-row">
        <p>
          Built with Next.js 16, React 19 and Tailwind CSS 4. Source on{" "}
          <a
            href={`${profile.links.github}/portfolio`}
            className="underline decoration-line underline-offset-4 hover:text-ink"
          >
            GitHub
          </a>
          .
        </p>
        <p>{profile.location}</p>
      </Container>
    </footer>
  );
}
