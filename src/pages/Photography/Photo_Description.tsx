import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Action_Button from "../../Reuseable-Components/Action_Button";
import {
  rememberFeaturedForReturn,
  type PhotographyLocationState,
} from "./photoNav";
import "./Photo_Description.css";

interface Photo_Description_Props {
  title?: string;
  date?: ReactNode;
  children?: ReactNode;
  galleryTo?: string;
  galleryLabel?: string;
  featuredId?: string;
}

function findPhotoScroller(from: HTMLElement | null): HTMLElement | null {
  return from?.closest(".photo-scroller") as HTMLElement | null;
}

export default function Photo_Description({
  title,
  date,
  children,
  galleryTo,
  galleryLabel = "View the gallery",
  featuredId,
}: Photo_Description_Props) {
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);
  const scrollBeforeExpand = useRef<number | null>(null);
  const detailsId = useId();
  const [expanded, setExpanded] = useState(false);

  const hasDate = date != null && date !== "";
  const hasBody = children != null && children !== "";
  const hasDetails = hasDate || hasBody || Boolean(galleryTo);

  // Collapse again when leaving the mobile breakpoint so desktop never
  // inherits a stuck "expanded" state after rotation / resize.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const onChange = () => {
      if (!mq.matches) {
        setExpanded(false);
        scrollBeforeExpand.current = null;
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Auto-collapse when the scroller moves to another photo (or intro/footer).
  useEffect(() => {
    const scroller = findPhotoScroller(boxRef.current);
    if (!scroller) return;

    const onActiveChange = (event: Event) => {
      if (!expanded) return;
      const detail = (event as CustomEvent<{ activeIndex: number; dotsDimmed: boolean }>)
        .detail;
      const slide = boxRef.current?.closest(
        "[data-slide-index]",
      ) as HTMLElement | null;
      if (!slide) return;

      const myIndex = Number(slide.dataset.slideIndex);
      const leftSlide =
        detail?.dotsDimmed === true ||
        (Number.isFinite(myIndex) && myIndex !== detail?.activeIndex);

      if (leftSlide) {
        // Quiet collapse — do not fight the user's scroll position.
        scrollBeforeExpand.current = null;
        setExpanded(false);
      }
    };

    scroller.addEventListener("photo-active-change", onActiveChange);
    return () => {
      scroller.removeEventListener("photo-active-change", onActiveChange);
    };
  }, [expanded]);

  const openGallery = () => {
    if (!galleryTo) return;

    if (featuredId) {
      rememberFeaturedForReturn(featuredId);
      navigate(".", {
        replace: true,
        state: { restoreFeaturedId: featuredId } satisfies PhotographyLocationState,
      });
    }

    navigate(galleryTo, {
      state: {
        fromFeaturedId: featuredId,
      } satisfies PhotographyLocationState,
    });
  };

  const toggleDetails = () => {
    const scroller = findPhotoScroller(boxRef.current);
    const slide = boxRef.current?.closest(".photo-slide") as HTMLElement | null;

    if (expanded) {
      // Collapse: restore scroll FIRST (instant) so the next slide never
      // flashes while the card height is animating closed.
      const saved = scrollBeforeExpand.current;
      scrollBeforeExpand.current = null;
      if (scroller) {
        const top =
          saved ??
          (slide
            ? slide.offsetTop
            : scroller.scrollTop);
        scroller.scrollTo({ top, behavior: "instant" });
      }
      setExpanded(false);
      return;
    }

    // Expand: remember framing, open card, then gently reveal overflow.
    scrollBeforeExpand.current = scroller?.scrollTop ?? null;
    setExpanded(true);

    window.setTimeout(() => {
      const box = boxRef.current;
      const root = findPhotoScroller(box);
      if (!box || !root) return;

      const boxRect = box.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();
      const pad = 16;
      const overflowBottom = boxRect.bottom - (rootRect.bottom - pad);
      if (overflowBottom <= 0) return;

      const maxNudge = root.clientHeight * 0.35;
      root.scrollBy({
        top: Math.min(overflowBottom, maxNudge),
        behavior: "smooth",
      });
    }, 360);
  };

  const boxClass = [
    "photo-description-box",
    expanded
      ? "photo-description-box--expanded"
      : "photo-description-box--collapsed",
  ].join(" ");

  return (
    <div ref={boxRef} className={boxClass}>
      <div className="photo-description-top">
        <div className="photo-description-heading-row">
          {title ? (
            <h2 className="photo-description-title">{title}</h2>
          ) : (
            <span />
          )}
          {hasDetails && (
            <button
              type="button"
              className="photo-description-toggle"
              aria-expanded={expanded}
              aria-controls={detailsId}
              onClick={toggleDetails}
              aria-label={expanded ? "Hide photo details" : "Show photo details"}
            >
              <ChevronDown
                size={22}
                strokeWidth={2.25}
                className="photo-description-toggle-icon"
                aria-hidden
              />
            </button>
          )}
        </div>
        {hasDate && (
          <p className="photo-description-date photo-description-date--top">
            {date}
          </p>
        )}
      </div>

      <div id={detailsId} className="photo-description-details">
        {/* Inner wrapper enables grid 0fr→1fr height animation on mobile */}
        <div className="photo-description-details-inner">
          {hasDate && (
            <p className="photo-description-date photo-description-date--mobile">
              {date}
            </p>
          )}

          {hasBody && (
            <div className="photo-description-body">{children}</div>
          )}

          {galleryTo && (
            <div className="photo-description-actions">
              <Action_Button
                text={galleryLabel}
                onClick={openGallery}
                variant="outline"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
