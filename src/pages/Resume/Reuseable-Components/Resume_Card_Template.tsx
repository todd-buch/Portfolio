import { useState, type ReactNode } from "react";
import "./Resume_Card_Template.css";

interface Resume_Card_Props {
  date?: ReactNode;
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  location?: string;
  num_details?: number;
  children?: ReactNode;
}

export default function Resume_Card_Template({
  date,
  icon,
  title,
  subtitle,
  location,
  num_details,
  children,
}: Resume_Card_Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasDetails = Boolean(children);
  const detailCount = num_details ?? 0;

  const handleToggle = () => {
    if (!hasDetails) return;
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={`resume-card ${isExpanded ? "expanded" : ""} ${hasDetails ? "has-details" : ""}`}
      onClick={handleToggle}
      role={hasDetails ? "button" : undefined}
      tabIndex={hasDetails ? 0 : undefined}
      aria-expanded={hasDetails ? isExpanded : undefined}
      onKeyDown={(e) => {
        if (!hasDetails) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {date && <p className="resume-card-date">{date}</p>}

      {title && (
        <h3 className="resume-card-title">
          {icon && <span className="resume-card-icon">{icon}</span>}
          {title}
        </h3>
      )}

      {subtitle && <p className="resume-card-subtitle">{subtitle}</p>}

      {location && <p className="resume-card-location">{location}</p>}

      {hasDetails && (
        <>
          <p className="resume-card-details-toggle">
            {isExpanded ? "- Hide details" : `+ ${detailCount} details`}
          </p>
          <div
            className="resume-card-details-wrapper"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div className="resume-card-details">{children}</div>
          </div>
        </>
      )}
    </div>
  );
}
