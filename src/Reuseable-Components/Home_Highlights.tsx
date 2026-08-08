import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import "./Home_Highlights.css";

export type HomeHighlight = {
  id: string;
  label: string;
  detail: string;
  href: string;
};

/** Studio role, industry internship, flagship technical project. */
const DEFAULT_HIGHLIGHTS: HomeHighlight[] = [
  {
    id: "studio",
    label: "Studio Manager",
    detail: "Ops, clients & automation",
    href: "#role",
  },
  {
    id: "internship",
    label: "The Hartford Intern",
    detail: "Hybrid-cloud conversational AI",
    href: "/resume",
  },
  {
    id: "fire-prevention",
    label: "Fire Prevention",
    detail: "Edge vision + sensors",
    href: "#project-fire-prevention",
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

  // Open collapsible targets when deep-linking into them.
  if (
    el.classList.contains("collapsible-section") &&
    !el.classList.contains("open")
  ) {
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
  const onHashClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToHash(href);
    window.history.replaceState(null, "", href);
  };

  return (
    <nav className="home-highlights" aria-label="Highlights">
      <p className="home-highlights-label">Highlights</p>
      <ul className="home-highlights-list">
        {items.map((item) => {
          const isHash = item.href.startsWith("#");
          const body = (
            <>
              <span className="home-highlights-card-label">{item.label}</span>
              <span className="home-highlights-card-detail">{item.detail}</span>
            </>
          );

          return (
            <li key={item.id}>
              {isHash ? (
                <a
                  className="home-highlights-card"
                  href={item.href}
                  onClick={(e) => onHashClick(e, item.href)}
                >
                  {body}
                </a>
              ) : (
                <Link className="home-highlights-card" to={item.href}>
                  {body}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
