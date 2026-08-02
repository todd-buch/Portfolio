import type { ReactNode, MouseEventHandler } from "react";
import "./Action_Button.css";

export type ActionButtonVariant = "filled" | "outline";

interface ActionButtonProps {
  text?: string;
  icon?: ReactNode;
  link?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  target?: string;
  rel?: string;
  children?: ReactNode;
  disabled?: boolean;
  /** filled = accent solid (default); outline = text-primary border, no fill */
  variant?: ActionButtonVariant;
}

export default function Action_Button({
  text,
  icon,
  link,
  onClick,
  target,
  rel,
  children,
  disabled = false,
  variant = "filled",
}: ActionButtonProps) {
  const className = [
    "action-btn",
    variant === "outline" ? "action-btn--outline" : null,
  ]
    .filter(Boolean)
    .join(" ");

  const content = children ? (
    children
  ) : (
    <>
      {icon && <span className="action-btn-icon">{icon}</span>}
      {text && <span className="action-btn-text">{text}</span>}
    </>
  );

  if (link && !disabled) {
    return (
      <a
        href={link}
        className={className}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
