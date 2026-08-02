import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import { ChevronDown } from "lucide-react";
import "./PhotoScroller.css";

export type PhotoSlide = {
  id: string;
  imageSrc?: string;
  imageAlt: string;
  description: ReactNode;
};

interface PhotoScrollerProps {
  slides: PhotoSlide[];
  label?: string;
  intro?: ReactNode;
  introScrollLabel?: string;
  endContent?: ReactNode;
  initialIndex?: number;
}

function blockImageSave(e: MouseEvent) {
  e.preventDefault();
}

export default function PhotoScroller({
  slides,
  label = "Photo gallery",
  intro,
  introScrollLabel = "Scroll to view gallery",
  endContent,
  initialIndex,
}: PhotoScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const endRef = useRef<HTMLElement | null>(null);

  const hasIntro = intro != null;
  const resolvedStart =
    initialIndex !== undefined
      ? Math.min(Math.max(0, initialIndex), Math.max(0, slides.length - 1))
      : hasIntro
        ? -1 // intro
        : 0;

  const [activeIndex, setActiveIndex] = useState(() =>
    resolvedStart < 0 ? 0 : resolvedStart,
  );
  /** Dim dots on intro or footer */
  const [dotsDimmed, setDotsDimmed] = useState(
    () => resolvedStart < 0 || slides.length === 0,
  );

  const slidesKey = slides.map((s) => s.id).join("|");

  // Jump to intro or a photo before paint.
  useLayoutEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    if (resolvedStart < 0) {
      root.scrollTop = 0;
      setDotsDimmed(true);
      setActiveIndex(0);
      return;
    }

    const el = slideRefs.current[resolvedStart];
    if (!el) return;
    root.scrollTop = el.offsetTop;
    setActiveIndex(resolvedStart);
    setDotsDimmed(false);
  }, [resolvedStart, slidesKey, hasIntro]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const updateFromScroll = () => {
      const rootRect = root.getBoundingClientRect();
      const viewportMid = rootRect.top + rootRect.height * 0.45;

      const coverageOf = (el: HTMLElement | null) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, rootRect.top);
        const visibleBottom = Math.min(rect.bottom, rootRect.bottom);
        const visible = Math.max(0, visibleBottom - visibleTop);
        return visible / rootRect.height;
      };

      // Intro / footer: dim side dots
      if (coverageOf(introRef.current) >= 0.4) {
        setDotsDimmed(true);
        return;
      }
      if (coverageOf(endRef.current) >= 0.4) {
        setDotsDimmed(true);
        return;
      }

      setDotsDimmed(false);

      if (slides.length === 0) return;

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
  }, [slides, endContent, hasIntro]);

  const goTo = useCallback((index: number) => {
    const el = slideRefs.current[index];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (slides.length === 0 && !intro) {
    return (
      <div className="photo-scroller-shell">
        <div className="photo-scroller photo-scroller--empty">
          <p>No photos yet.</p>
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
        {intro != null && (
          <section
            className="photo-intro"
            ref={introRef}
            aria-label="Photography introduction"
          >
            <div className="photo-intro-center">{intro}</div>
            {slides.length > 0 && (
              <div className="photo-intro-scroll">
                <p className="photo-intro-scroll-label">{introScrollLabel}</p>
                <button
                  type="button"
                  className="photo-intro-scroll-btn"
                  onClick={() => goTo(0)}
                  aria-label={introScrollLabel}
                >
                  <ChevronDown size={36} strokeWidth={1.75} />
                </button>
              </div>
            )}
          </section>
        )}

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
              <div
                className="photo-slide-image-wrap"
                onContextMenu={blockImageSave}
              >
                {slide.imageSrc ? (
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    className="photo-slide-image"
                    draggable={false}
                    onContextMenu={blockImageSave}
                    onDragStart={blockImageSave}
                  />
                ) : (
                  <div
                    className="photo-slide-placeholder"
                    role="img"
                    aria-label={slide.imageAlt}
                  />
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

      {slides.length > 0 && (
        <nav
          className={`photo-dots${dotsDimmed ? " photo-dots--dimmed" : ""}`}
          aria-label="Photo position"
          aria-hidden={dotsDimmed || undefined}
        >
          {slides.map((slide, index) => {
            const isActive = !dotsDimmed && index === activeIndex;
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
      )}
    </div>
  );
}
