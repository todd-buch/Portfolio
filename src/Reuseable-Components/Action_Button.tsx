import type { ReactNode, MouseEventHandler } from "react";
import "./Action_Button.css";

interface ActionButtonProps {
  text?: string;
  icon?: ReactNode;
  link?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  target?: string;
  rel?: string;
  children?: ReactNode;
  disabled?: boolean;
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
}: ActionButtonProps) {
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
        className="action-btn"
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
      className="action-btn"
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
