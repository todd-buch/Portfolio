import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "./Collapsible_Section.css";

interface CollapsibleSectionProps {
  id?: string;
  title: string;
  /** Optional line under the title (always visible). */
  subtitle?: ReactNode;
  /** When false (default), body starts collapsed. */
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Section block with a clickable heading. Secondary home content (About,
 * Current Role) can start collapsed so the page stays scannable.
 */
export default function Collapsible_Section({
  id,
  title,
  subtitle,
  defaultOpen = false,
  children,
  className = "",
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div
      id={id}
      className={`main-regular-text-block collapsible-section ${isOpen ? "open" : ""} ${className}`.trim()}
    >
      <button
        type="button"
        className="collapsible-section-trigger"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h2 className="main-regular-text-block-title collapsible-section-title">
          {title}
        </h2>
        <ChevronDown
          className="collapsible-section-icon"
          size={28}
          strokeWidth={2.25}
          aria-hidden
        />
      </button>
      {subtitle != null && (
        <p className="main-regular-text-block-subtitle collapsible-section-subtitle">
          {subtitle}
        </p>
      )}
      <div
        id={contentId}
        className="collapsible-section-content-wrapper"
        role="region"
        aria-label={title}
      >
        <div className="collapsible-section-content">{children}</div>
      </div>
    </div>
  );
}
