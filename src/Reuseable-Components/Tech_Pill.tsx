import type { ReactNode } from "react";
import "./Tech_Pill.css";

interface TechPillProps {
  name: string;
  icon?: ReactNode;
}

export default function Tech_Pill({ name, icon }: TechPillProps) {
  return (
    <div className="tech-pill">
      {icon && <span className="tech-pill-icon">{icon}</span>}
      <span className="tech-pill-name">{name}</span>
    </div>
  );
}
