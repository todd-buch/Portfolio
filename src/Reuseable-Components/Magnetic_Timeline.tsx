import { useEffect, useRef, useState } from "react";
import "./Magnetic_Timeline.css";

interface SectionInfo {
  id: string;
  /** Y position in content space (0 = top of timeline container). */
  y: number;
}

interface Vertex {
  x: number;
  y: number;
}

const PAD = 24;

const SECTION_IDS = ["bio", "about", "role", "projects", "contact"] as const;

function buildPathD(verts: Vertex[]): string {
  if (verts.length === 0) return "";
  let d = `M ${verts[0].x} ${verts[0].y}`;
  for (let i = 1; i < verts.length; i++) {
    d += ` L ${verts[i].x} ${verts[i].y}`;
  }
  return d;
}

/** Partial path from start through filledY (content space, not padded). */
function buildFilledPathD(verts: Vertex[], filledY: number): string {
  if (verts.length === 0 || filledY <= verts[0].y) return "";

  let d = `M ${verts[0].x} ${verts[0].y}`;

  for (let i = 1; i < verts.length; i++) {
    const prev = verts[i - 1];
    const curr = verts[i];

    if (curr.y <= filledY) {
      d += ` L ${curr.x} ${curr.y}`;
      continue;
    }

    // Fill ends between prev and curr
    if (prev.y < filledY) {
      const dy = curr.y - prev.y;
      const t = dy > 0 ? (filledY - prev.y) / dy : 0;
      const x = prev.x + t * (curr.x - prev.x);
      d += ` L ${x} ${filledY}`;
    }
    break;
  }

  return d;
}

export default function Magnetic_Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);

  const [sections, setSections] = useState<SectionInfo[]>([]);
  const [vertices, setVertices] = useState<Vertex[]>([]);
  const [pathD, setPathD] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isCompact, setIsCompact] = useState(false);

  // Compact layout: straight line under 1100px
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)");
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsCompact(e.matches);
    };
    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Measure layout and rebuild the circuit path
  useEffect(() => {
    const updateSize = () => {
      const container = containerRef.current;
      if (!container) return;

      const contentHeight = container.clientHeight;
      const containerRect = container.getBoundingClientRect();

      const measured: SectionInfo[] = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        return {
          id,
          y: el ? el.getBoundingClientRect().top - containerRect.top : 0,
        };
      });
      setSections(measured);

      // Path coordinates live in padded SVG space (content y + PAD)
      const raw: Vertex[] = [{ x: 50, y: PAD }];

      for (let i = 0; i < measured.length; i++) {
        const currY = measured[i].y + PAD;
        if (i === 0) {
          raw.push({ x: 50, y: currY });
        } else {
          const prevY = measured[i - 1].y + PAD;
          if (!isCompact && currY - prevY > 120) {
            const offset = i % 2 === 1 ? 20 : 80;
            raw.push({ x: 50, y: prevY + 30 });
            raw.push({ x: offset, y: prevY + 60 });
            raw.push({ x: offset, y: currY - 60 });
            raw.push({ x: 50, y: currY - 30 });
          }
          raw.push({ x: 50, y: currY });
        }
      }

      raw.push({ x: 50, y: contentHeight + PAD });

      // Drop zero-length segments
      const verts: Vertex[] = [];
      for (let i = 0; i < raw.length; i++) {
        if (
          i === 0 ||
          raw[i].x !== raw[i - 1].x ||
          raw[i].y !== raw[i - 1].y
        ) {
          verts.push(raw[i]);
        }
      }

      setVertices(verts);
      setPathD(buildPathD(verts));
      setSvgHeight(contentHeight + PAD * 2);
    };

    const timer = window.setTimeout(updateSize, 100);
    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    const projectsEl = document.querySelector(".projects");
    if (projectsEl) resizeObserver.observe(projectsEl);
    window.addEventListener("resize", updateSize);

    return () => {
      window.clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, [isCompact]);

  useEffect(() => {
    if (vertices.length === 0) return;

    const handleScroll = () => {
      const container = containerRef.current;
      const pathEl = activePathRef.current;
      if (!container || !pathEl) return;

      const rect = container.getBoundingClientRect();
      const viewportThreshold = window.innerHeight * 0.5;
      const progress = Math.max(
        0,
        Math.min(1, (viewportThreshold - rect.top) / rect.height),
      );
      // filledY in padded SVG space
      const filledY = PAD + progress * rect.height;

      pathEl.setAttribute("d", buildFilledPathD(vertices, filledY));

      let newIndex = -1;
      for (let i = 0; i < sections.length; i++) {
        if (filledY >= sections[i].y + PAD) newIndex = i;
      }
      setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [vertices, sections]);

  return (
    <div ref={containerRef} className="timeline-container">
      <svg
        className="timeline-svg"
        width="100"
        height={svgHeight || "100%"}
        // Explicit overflow so stroke/glow outside 0..height still paint
        overflow="visible"
      >
        {/* Ground track */}
        {pathD && (
          <path
            d={pathD}
            className="timeline-track"
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Active fill */}
        <path
          ref={activePathRef}
          className="timeline-active"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* SMD microchip nodes */}
        {sections.map((sec, idx) => {
          const isActive = idx <= activeIndex;
          return (
            <g
              key={sec.id}
              transform={`translate(50, ${sec.y + PAD})`}
              className={`timeline-node-group${isActive ? " active" : ""}`}
            >
              <line
                x1="-10"
                y1="-10"
                x2="10"
                y2="10"
                stroke={isActive ? "var(--accent)" : "var(--border-color)"}
                strokeWidth="1"
                opacity={isActive ? 0.8 : 0.4}
                className="chip-pin"
              />
              <line
                x1="-10"
                y1="10"
                x2="10"
                y2="-10"
                stroke={isActive ? "var(--accent)" : "var(--border-color)"}
                strokeWidth="1"
                opacity={isActive ? 0.8 : 0.4}
                className="chip-pin"
              />
              <line
                x1="-12"
                y1="0"
                x2="12"
                y2="0"
                stroke={isActive ? "var(--accent)" : "var(--border-color)"}
                strokeWidth="1.2"
                opacity={isActive ? 0.8 : 0.4}
                className="chip-pin"
              />
              <line
                x1="0"
                y1="-12"
                x2="0"
                y2="12"
                stroke={isActive ? "var(--accent)" : "var(--border-color)"}
                strokeWidth="1.2"
                opacity={isActive ? 0.8 : 0.4}
                className="chip-pin"
              />
              <rect
                x="-6"
                y="-6"
                width="12"
                height="12"
                rx="1.5"
                fill="var(--bg-primary)"
                stroke={isActive ? "var(--accent)" : "var(--text-secondary)"}
                strokeWidth="2"
                className="chip-base"
              />
              <circle
                r="3"
                className="chip-core"
                fill={isActive ? "var(--accent)" : "var(--text-secondary)"}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
