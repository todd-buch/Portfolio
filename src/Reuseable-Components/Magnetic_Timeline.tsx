import { useEffect, useRef, useState } from "react";
import "./Magnetic_Timeline.css";

interface SectionInfo {
  id: string;
  offsetTop: number;
}

interface Vertex {
  x: number;
  y: number;
}

export default function Magnetic_Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);

  const [sections, setSections] = useState<SectionInfo[]>([]);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [pathD, setPathD] = useState("");
  const [vertices, setVertices] = useState<Vertex[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  // Measure sections and height
  useEffect(() => {
    const updateSize = () => {
      if (!svgRef.current) return;
      const height = svgRef.current.clientHeight;
      setTimelineHeight(height);

      // Measure sections
      const sectionIds = ["bio", "about", "role", "projects", "contact"];
      const measured = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return {
          id,
          offsetTop: el ? el.offsetTop : 0,
        };
      });
      setSections(measured);

      // Generate circuit path vertices
      const verts: Vertex[] = [{ x: 50, y: 0 }];
      for (let i = 0; i < measured.length; i++) {
        const currY = measured[i].offsetTop;
        if (i === 0) {
          verts.push({ x: 50, y: currY });
        } else {
          const prevY = measured[i - 1].offsetTop;
          // Only bend if there's sufficient vertical space (120px) to prevent squeezing
          if (currY - prevY > 120) {
            const offset = i % 2 === 1 ? 20 : 80; // Winding left and right traces
            verts.push({ x: 50, y: prevY + 30 });
            verts.push({ x: offset, y: prevY + 60 });
            verts.push({ x: offset, y: currY - 60 });
            verts.push({ x: 50, y: currY - 30 });
          }
          verts.push({ x: 50, y: currY });
        }
      }
      verts.push({ x: 50, y: height });

      setVertices(verts);

      // Build path D string
      let d = `M ${verts[0].x} ${verts[0].y}`;
      for (let i = 1; i < verts.length; i++) {
        d += ` L ${verts[i].x} ${verts[i].y}`;
      }
      setPathD(d);
    };

    const timer = setTimeout(updateSize, 100);

    const resizeObserver = new ResizeObserver(updateSize);
    if (svgRef.current) {
      resizeObserver.observe(svgRef.current);
    }
    const projectsEl = document.querySelector(".projects");
    if (projectsEl) {
      resizeObserver.observe(projectsEl);
    }

    window.addEventListener("resize", updateSize);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Sync scroll fill line and active nodes
  useEffect(() => {
    if (vertices.length === 0) return;

    const handleScroll = () => {
      if (!containerRef.current || !activePathRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportThreshold = window.innerHeight * 0.5; // Fill up to eye-level
      const progressPixels = viewportThreshold - rect.top;
      const totalH = rect.height;
      const filledHeight = Math.max(0, Math.min(1, progressPixels / totalH)) * totalH;

      // 1. Build and set active path D attribute directly via ref (performance optimization)
      let activeD = `M ${vertices[0].x} ${vertices[0].y}`;
      for (let i = 1; i < vertices.length; i++) {
        const prev = vertices[i - 1];
        const curr = vertices[i];

        if (curr.y <= filledHeight) {
          activeD += ` L ${curr.x} ${curr.y}`;
        } else {
          const t = curr.y - prev.y > 0 ? (filledHeight - prev.y) / (curr.y - prev.y) : 0;
          const interpX = prev.x + t * (curr.x - prev.x);
          activeD += ` L ${interpX} ${filledHeight}`;
          break;
        }
      }
      activePathRef.current.setAttribute("d", activeD);

      // 2. Determine which section nodes should be activated (power up)
      let newIndex = -1;
      for (let i = 0; i < sections.length; i++) {
        if (filledHeight >= sections[i].offsetTop) {
          newIndex = i;
        }
      }

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [vertices, sections, activeIndex]);

  // Find dynamic x coordinate at each node offset for placing the node on the line
  const getNodeX = (offsetTop: number, index: number): number => {
    if (vertices.length === 0) return 50;
    // Map index to left or right bent x coordinates, or default to center
    // We bend if distance between this section and previous section is large
    if (index === 0) return 50;
    const prevY = sections[index - 1]?.offsetTop || 0;
    if (offsetTop - prevY > 120) {
      return 50; // The node itself is always back at center x=50
    }
    return 50;
  };

  return (
    <div ref={containerRef} className="timeline-container">
      <svg
        ref={svgRef}
        width="100"
        height={timelineHeight}
        className="timeline-svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* High-tech glow effect filter for active lines and signals */}
          <filter id="circuit-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Ground/Track Circuit Line (Offline state) */}
        {pathD && (
          <path
            d={pathD}
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.75"
          />
        )}

        {/* 2. Active Power-Fill Circuit Line (Online state) */}
        <path
          ref={activePathRef}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#circuit-glow)"
          style={{ transition: "stroke 0.3s ease" }}
        />



        {/* 4. SMD Microchip Section Nodes */}
        {sections.map((sec, idx) => {
          const isActive = idx <= activeIndex;
          const x = getNodeX(sec.offsetTop, idx);

          return (
            <g
              key={sec.id}
              transform={`translate(${x}, ${sec.offsetTop})`}
              className={`timeline-node-group ${isActive ? "active" : ""}`}
            >
              {/* Microchip pins/circuit connections */}
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

              {/* Square SMD Base Pad */}
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

              {/* Silicon Core Center Dot */}
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
