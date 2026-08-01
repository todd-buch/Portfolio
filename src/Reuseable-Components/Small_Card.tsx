import type { ReactNode } from "react";
import "./Small_Card.css";

interface SmallCardProps {
  title: string;
  children: ReactNode;
}

export default function Small_Card({ title, children }: SmallCardProps) {
  return (
    <>
      <div className="small-card">
        <p className="small-card-title">{title}</p>
        <div className="small-card-content">{children}</div>
      </div>
    </>
  );
}
