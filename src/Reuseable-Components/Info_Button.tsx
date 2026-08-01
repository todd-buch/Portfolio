import "./Info_Button.css"
import { ArrowUpRight } from "lucide-react";

interface InfoButtonProps {
    text: string;
    link?: string;
  }

export default function Info_Button({ text, link }: InfoButtonProps) {
    return (
        <>
        <a href={ link } className="view-more-btn">{ text } <ArrowUpRight className="view-more-arrow"/></a>
        </>
    );
};