import type { MouseEvent } from "react";
import "./Home_Highlights.css";

export type HomeHighlight = {
  id: string;
  label: string;
  detail: string;
  href: string;
};

const DEFAULT_HIGHLIGHTS: HomeHighlight[] = [
  {
    id: "fire-prevention",
    label: "Fire Prevention",
    detail: "Edge vision + sensors",
    href: "#project-fire-prevention",
  },
  {
    id: "blackjack",
    label: "Blackjack Agent",
    detail: "RL vs. the house edge",
    href: "#project-blackjack",
  },
  {
    id: "studio",
    label: "Studio automation",
    detail: "~20 min → ~2 min tasks",
    href: "#role",
  },
];

interface HomeHighlightsProps {
  items?: HomeHighlight[];
}

function scrollToHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });

  // Nudge collapsible sections / cards open when deep-linking into them.
  if (el.classList.contains("collapsible-section") && !el.classList.contains("open")) {
    const trigger = el.querySelector<HTMLButtonElement>(
      ".collapsible-section-trigger",
    );
    trigger?.click();
  }
  if (
    el.classList.contains("small-card--collapsible") &&
    !el.classList.contains("small-card--expanded")
  ) {
    const trigger = el.querySelector<HTMLButtonElement>(".small-card-toggle");
    trigger?.click();
  }
}

export default function Home_Highlights({
  items = DEFAULT_HIGHLIGHTS,
}: HomeHighlightsProps) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToHash(href);
    // Keep the URL hash in sync for shareable deep links.
    if (href.startsWith("#")) {
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <nav className="home-highlights" aria-label="Highlights">
      <p className="home-highlights-label">Highlights</p>
      <ul className="home-highlights-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="home-highlights-card"
              href={item.href}
              onClick={(e) => onClick(e, item.href)}
            >
              <span className="home-highlights-card-label">{item.label}</span>
              <span className="home-highlights-card-detail">{item.detail}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
