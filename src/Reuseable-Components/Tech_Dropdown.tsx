import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import "./Tech_Dropdown.css";

interface TechDropdownProps {
  title: string;
  children: ReactNode;
}

export default function Tech_Dropdown({ title, children }: TechDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`tech-dropdown-container ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="tech-dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <p className="tech-dropdown-title">{title}</p>
        <ChevronDown className="tech-dropdown-icon" />
      </button>
      <div className="tech-dropdown-content-wrapper">
        <div className="tech-dropdown-content">
          {children}
        </div>
      </div>
    </div>
  );
}
