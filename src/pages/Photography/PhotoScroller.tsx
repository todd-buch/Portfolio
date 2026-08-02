import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import "./PhotoScroller.css";

export type PhotoSlide = {
  id: string;
  imageSrc?: string;
  imageAlt: string;
  /** Right-hand card content for this slide */
  description: ReactNode;
};

interface PhotoScrollerProps {
  slides: PhotoSlide[];
  /** Accessible name for the scroll region */
  label?: string;
  /** Rendered after the last photo (e.g. site footer). Scroll continues past snaps. */
  endContent?: ReactNode;
  /**
   * 0-based index to land on when the scroller mounts (e.g. 1 = second photo).
   * Clamped to the available slides.
   */
  initialIndex?: number;
}

export default function PhotoScroller({
  slides,
  label = "Photo gallery",
  endContent,
  initialIndex = 0,
}: PhotoScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const endRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.min(Math.max(0, initialIndex), Math.max(0, slides.length - 1)),
  );
  /** True while the post-gallery footer region is the primary view */
  const [onEndContent, setOnEndContent] = useState(false);

  // Stable identity for the slide list so we only re-jump when content changes.
  const slidesKey = slides.map((s) => s.id).join("|");

  // Jump to the requested start slide before paint (no flash of slide 0).
  useLayoutEffect(() => {
    const start = Math.min(
      Math.max(0, initialIndex),
      Math.max(0, slides.length - 1),
    );
    const el = slideRefs.current[start];
    const root = scrollerRef.current;
    if (!el || !root) return;
    // Instant — avoid smooth scroll fighting the route transition
    root.scrollTop = el.offsetTop;
    setActiveIndex(start);
    setOnEndContent(false);
    // slides.length covered via slidesKey
    // eslint-disable-next-line react-hooks/exhaustive-deps -- slidesKey stands in for slides
  }, [initialIndex, slidesKey]);

  // Track active slide / footer with scroll position (more reliable than
  // IntersectionObserver alone when leaving a short footer section).
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || slides.length === 0) return;

    const updateFromScroll = () => {
      const rootRect = root.getBoundingClientRect();
      const viewportMid = rootRect.top + rootRect.height * 0.45;

      // Footer: if the end section covers most of the viewport, dim the dots
      const endEl = endRef.current;
      if (endEl) {
        const endRect = endEl.getBoundingClientRect();
        const visibleTop = Math.max(endRect.top, rootRect.top);
        const visibleBottom = Math.min(endRect.bottom, rootRect.bottom);
        const visible = Math.max(0, visibleBottom - visibleTop);
        const coverage = visible / rootRect.height;
        if (coverage >= 0.4) {
          setOnEndContent(true);
          return;
        }
      }

      setOnEndContent(false);

      // Active slide = the one whose vertical center is closest to the view midpoint
      let bestIndex = 0;
      let bestDist = Infinity;
      slideRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - viewportMid);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = index;
        }
      });
      setActiveIndex(bestIndex);
    };

    updateFromScroll();
    root.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      root.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
    };
  }, [slides, endContent]);

  const goTo = useCallback((index: number) => {
    const el = slideRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (slides.length === 0) {
    return (
      <div className="photo-scroller-shell">
        <div className="photo-scroller photo-scroller--empty">
          <p>No photos yet — add entries in photographyData.ts.</p>
        </div>
        {endContent && (
          <div className="photo-scroller-end photo-scroller-end--alone">
            {endContent}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="photo-scroller-shell">
      <div
        ref={scrollerRef}
        className="photo-scroller"
        aria-label={label}
        tabIndex={0}
      >
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            className="photo-slide"
            data-slide-index={index}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            aria-label={`${index + 1} of ${slides.length}: ${slide.imageAlt}`}
          >
            <div className="photo-slide-cluster">
              <div className="photo-slide-image-wrap">
                {slide.imageSrc ? (
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    className="photo-slide-image"
                    draggable={false}
                  />
                ) : (
                  <div
                    className="photo-slide-placeholder"
                    role="img"
                    aria-label={slide.imageAlt}
                  >
                    <span className="photo-slide-placeholder-label">
                      Photo placeholder
                    </span>
                    <span className="photo-slide-placeholder-hint">
                      Import <code>src</code> in photographyData.ts
                    </span>
                  </div>
                )}
              </div>

              <div className="photo-slide-description">
                {slide.description}
              </div>
            </div>
          </section>
        ))}

        {endContent && (
          <section
            className="photo-scroller-end"
            data-photo-end="true"
            ref={endRef}
            aria-label="Page footer"
          >
            {endContent}
          </section>
        )}
      </div>

      <nav
        className={`photo-dots${onEndContent ? " photo-dots--dimmed" : ""}`}
        aria-label="Photo position"
        aria-hidden={onEndContent || undefined}
      >
        {slides.map((slide, index) => {
          const isActive = !onEndContent && index === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              className={`photo-dot${isActive ? " photo-dot--active" : ""}`}
              aria-label={`Go to photo ${index + 1}${isActive ? " (current)" : ""}`}
              aria-current={isActive ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          );
        })}
      </nav>
    </div>
  );
}
