import { useEffect, useRef, useState } from "react";
import "./Magnetic_Timeline.css";

interface SectionInfo {
  id: string;
  offsetTop: number;
}

export default function Magnetic_Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trackPathRef = useRef<SVGPathElement>(null);
  const activePathRef = useRef<SVGPathElement>(null);
  const dotsRef = useRef<{ [key: string]: SVGGElement | null }>({});

  const [sections, setSections] = useState<SectionInfo[]>([]);
  const [timelineHeight, setTimelineHeight] = useState(0);

  // References for mouse coordinates relative to the SVG container
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const isMouseNearRef = useRef(false);

  const N = 60; // Number of points on the line
  const xDisplacements = useRef<number[]>(new Array(N).fill(0));
  const velocities = useRef<number[]>(new Array(N).fill(0));
  const yPoints = useRef<number[]>(new Array(N).fill(0));

  // Measure sections and container height
  useEffect(() => {
    const updateSize = () => {
      if (!svgRef.current) return;
      const height = svgRef.current.clientHeight;
      setTimelineHeight(height);

      // Generate y coordinates for each point along the line
      const points = [];
      const segmentHeight = height / (N - 1);
      for (let i = 0; i < N; i++) {
        points.push(i * segmentHeight);
      }
      yPoints.current = points;

      // Measure offsetTop of section elements relative to parent container
      const sectionIds = ["bio", "about", "role", "projects", "contact"];
      const measured = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return {
          id,
          offsetTop: el ? el.offsetTop : 0,
        };
      });
      setSections(measured);
    };

    // Initial measurement delay to ensure layout rendering is completed
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

  // Track global mouse position and check proximity to the vertical line
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      
      // Calculate mouse x/y relative to the SVG container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // check if mouse is within 350px horizontally of the vertical line (center is at 50px)
      const distToLine = Math.abs(e.clientX - (rect.left + 50));
      if (distToLine < 350) {
        mouseXRef.current = x;
        mouseYRef.current = y;
        isMouseNearRef.current = true;
      } else {
        isMouseNearRef.current = false;
      }
    };

    const handleMouseLeave = () => {
      isMouseNearRef.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Physics animation loop using Hooke's Law and Neighbor String Tension
  useEffect(() => {
    let animId: number;

    const k = 0.04;      // Spring stiffness coefficient
    const damping = 0.86; // Velocity damping coefficient to control oscillation decay
    const tension = 0.14; // Structural tension pulling points towards their immediate neighbors
    const R = 240;        // Magnetic attraction radius (pixels)

    const tick = () => {
      if (!trackPathRef.current || !activePathRef.current || yPoints.current.length === 0) {
        animId = requestAnimationFrame(tick);
        return;
      }

      const totalH = timelineHeight || svgRef.current?.clientHeight || 0;
      if (totalH === 0) {
        animId = requestAnimationFrame(tick);
        return;
      }

      // Calculate scroll fill progress relative to eye level (middle of the viewport)
      let filledHeight = 0;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportThreshold = window.innerHeight * 0.5;
        const progressPixels = viewportThreshold - rect.top;
        const progress = Math.max(0, Math.min(1, progressPixels / rect.height));
        filledHeight = progress * totalH;
      }

      const mX = mouseXRef.current;
      const mY = mouseYRef.current;
      const near = isMouseNearRef.current;

      const currentX = xDisplacements.current;
      const currentV = velocities.current;
      const yPts = yPoints.current;

      // Update positions for each internal node along the string
      for (let i = 0; i < N; i++) {
        // Anchor top and bottom nodes securely at 0 displacement
        if (i === 0 || i === N - 1) {
          currentX[i] = 0;
          currentV[i] = 0;
          continue;
        }

        let target = 0;
        if (near) {
          const dx = mX - 50;
          const dy = mY - yPts[i];
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < R) {
            // Strength of pull decays exponentially with radial distance
            const factor = Math.pow(1 - dist / R, 2);
            target = dx * factor * 0.45;
            // Clamp displacement to prevent visual clipping
            target = Math.max(-40, Math.min(40, target));
          }
        }

        // Spring restoring force
        const forceSpring = -k * (currentX[i] - target);

        // String tension from immediate neighbor nodes
        const forceTension = tension * (currentX[i - 1] + currentX[i + 2 <= N ? i + 1 : i] - 2 * currentX[i]);

        const acc = forceSpring + forceTension;
        currentV[i] = (currentV[i] + acc) * damping;
        currentX[i] += currentV[i];
      }

      // Build background track SVG path
      let d = `M ${50 + currentX[0]} ${yPts[0]}`;
      for (let i = 1; i < N; i++) {
        d += ` L ${50 + currentX[i]} ${yPts[i]}`;
      }
      trackPathRef.current.setAttribute("d", d);

      // Build active/filled SVG path (interpolated up to filledHeight)
      let activeD = `M ${50 + currentX[0]} ${yPts[0]}`;
      for (let i = 1; i < N; i++) {
        if (yPts[i] <= filledHeight) {
          activeD += ` L ${50 + currentX[i]} ${yPts[i]}`;
        } else {
          const prevY = yPts[i - 1];
          const currY = yPts[i];
          const t = currY - prevY > 0 ? (filledHeight - prevY) / (currY - prevY) : 0;
          const interpX = currentX[i - 1] + t * (currentX[i] - currentX[i - 1]);
          activeD += ` L ${50 + interpX} ${filledHeight}`;
          break;
        }
      }
      activePathRef.current.setAttribute("d", activeD);

      // Dynamically position section "bead" dots and update visual active state
      const segmentH = totalH / (N - 1);
      sections.forEach((sec) => {
        const dotEl = dotsRef.current[sec.id];
        if (!dotEl) return;

        // Interpolate exact horizontal displacement at dot's y position
        const yVal = sec.offsetTop;
        const idx = segmentH > 0 ? Math.max(0, Math.min(N - 2, Math.floor(yVal / segmentH))) : 0;
        const t = segmentH > 0 ? (yVal % segmentH) / segmentH : 0;
        const x0 = currentX[idx] || 0;
        const x1 = currentX[idx + 1] !== undefined ? currentX[idx + 1] : x0;
        const disp = x0 + t * (x1 - x0);

        dotEl.setAttribute("transform", `translate(${50 + disp}, ${yVal})`);

        if (filledHeight >= yVal) {
          dotEl.classList.add("active");
        } else {
          dotEl.classList.remove("active");
        }
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [timelineHeight, sections]);

  return (
    <div ref={containerRef} className="timeline-container">
      <svg
        ref={svgRef}
        width="100"
        height={timelineHeight}
        className="timeline-svg"
        style={{ overflow: "visible" }}
      >
        {/* Unfilled track path */}
        <path
          ref={trackPathRef}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* Active progress-fill path */}
        <path
          ref={activePathRef}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Section marker beads */}
        {sections.map((sec) => (
          <g
            key={sec.id}
            ref={(el) => {
              dotsRef.current[sec.id] = el;
            }}
            className="timeline-dot-group"
          >
            <circle
              r="12"
              className="timeline-dot-ring"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
            />
            <circle
              r="5"
              className="timeline-dot-core"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
