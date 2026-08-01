import { Link } from "react-router-dom";
import "./Info_Button.css";
import { ArrowUpRight } from "lucide-react";

interface InfoButtonProps {
  text: string;
  link?: string;
}

function isExternalLink(link: string) {
  return (
    link.startsWith("http://") ||
    link.startsWith("https://") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:")
  );
}

export default function Info_Button({ text, link }: InfoButtonProps) {
  if (!link) {
    return (
      <span className="view-more-btn">
        {text} <ArrowUpRight className="view-more-arrow" />
      </span>
    );
  }

  if (isExternalLink(link)) {
    return (
      <a href={link} className="view-more-btn">
        {text} <ArrowUpRight className="view-more-arrow" />
      </a>
    );
  }

  return (
    <Link to={link} className="view-more-btn">
      {text} <ArrowUpRight className="view-more-arrow" />
    </Link>
  );
}
