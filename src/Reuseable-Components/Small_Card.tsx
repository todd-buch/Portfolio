import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "./Small_Card.css";

interface SmallCardProps {
  title: string;
  date: ReactNode;
  /**
   * Pitch always shown. When set, `children` append below after expand
   * (the brief stays visible).
   */
  summary?: ReactNode;
  /** Optional chips/pills under the summary (always visible when set). */
  preview?: ReactNode;
  /** Optional stable id for deep links (highlight strip, etc.). */
  id?: string;
  children: ReactNode;
}

export default function Small_Card({
  title,
  date,
  summary,
  preview,
  id,
  children,
}: SmallCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();
  const isCollapsible = summary != null;

  return (
    <div
      id={id}
      className={`small-card${isCollapsible ? " small-card--collapsible" : ""}${isExpanded ? " small-card--expanded" : ""}`}
    >
      <div className="small-card-top">
        <p className="small-card-title">{title}</p>
        <p className="small-card-date">{date}</p>
      </div>

      {isCollapsible ? (
        <>
          <div className="small-card-summary">
            {typeof summary === "string" || typeof summary === "number" ? (
              <p>{summary}</p>
            ) : (
              summary
            )}
            {preview != null && (
              <div className="small-card-preview">{preview}</div>
            )}
          </div>

          <button
            type="button"
            className="small-card-toggle"
            onClick={() => setIsExpanded((open) => !open)}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
          >
            {isExpanded ? "Show less" : "Read more"}
            <ChevronDown
              className="small-card-toggle-icon"
              size={18}
              strokeWidth={2.25}
              aria-hidden
            />
          </button>

          {/* Same grid 0fr → 1fr open animation as Tech_Dropdown */}
          <div id={detailsId} className="small-card-details-wrapper">
            <div className="small-card-details">
              <div className="small-card-content">{children}</div>
            </div>
          </div>
        </>
      ) : (
        <div className="small-card-content">{children}</div>
      )}
    </div>
  );
}
