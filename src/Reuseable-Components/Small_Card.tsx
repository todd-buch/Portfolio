import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "./Small_Card.css";

interface SmallCardProps {
  title: string;
  date: ReactNode;
  /**
   * One-line pitch shown when the card is collapsed. When set, `children`
   * are hidden until the reader expands the card.
   */
  summary?: ReactNode;
  /** Optional chips/pills visible in the collapsed state only. */
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

      {isCollapsible && (
        <div
          className="small-card-summary"
          hidden={isExpanded}
        >
          {typeof summary === "string" || typeof summary === "number" ? (
            <p>{summary}</p>
          ) : (
            summary
          )}
          {preview != null && (
            <div className="small-card-preview">{preview}</div>
          )}
        </div>
      )}

      <div
        id={isCollapsible ? detailsId : undefined}
        className="small-card-content"
        hidden={isCollapsible && !isExpanded}
      >
        {children}
      </div>

      {isCollapsible && (
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
      )}
    </div>
  );
}
