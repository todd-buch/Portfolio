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
      if (!mq.matches) setExpanded(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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
    setExpanded((prev) => {
      const next = !prev;
      if (next) {
        // After the expanded layout paints, nudge the scroller so the card
        // (and any overflowing text) is in view — may push the image up slightly.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            boxRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          });
        });
      }
      return next;
    });
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
  );
}
