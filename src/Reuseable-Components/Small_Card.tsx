import type { ReactNode } from "react";
import "./Small_Card.css";

interface SmallCardProps {
  title: string;
  date:string;
  children: ReactNode;
}

export default function Small_Card({ title, date, children }: SmallCardProps) {
  return (
    <>
      <div className="small-card">
        <div className="small-card-top">
          <p className="small-card-title">{title}</p>
          <p className="small-card-date">{date}</p>
        </div>
        <div className="small-card-content">{children}</div>
      </div>
    </>
  );
}
