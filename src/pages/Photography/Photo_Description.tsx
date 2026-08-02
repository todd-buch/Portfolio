import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Action_Button from "../../Reuseable-Components/Action_Button";
import "./Photo_Description.css";

interface Photo_Description_Props {
  title?: string;
  date?: ReactNode;
  children?: ReactNode;
  /**
   * Optional gallery route (e.g. "/photography/landscapes").
   * When set, shows a "View the gallery" button at the bottom of the card.
   */
  galleryTo?: string;
  /** Override the default gallery button label. */
  galleryLabel?: string;
}

export default function Photo_Description({
  title,
  date,
  children,
  galleryTo,
  galleryLabel = "View the gallery",
}: Photo_Description_Props) {
  const navigate = useNavigate();

  return (
    <div className="photo-description-box">
      <div className="photo-description-top">
        {title ? <h2 className="photo-description-title">{title}</h2> : <span />}
        {date != null && date !== "" && (
          <p className="photo-description-date">{date}</p>
        )}
      </div>

      {children != null && children !== "" && (
        <div className="photo-description-body">{children}</div>
      )}

      {galleryTo && (
        <div className="photo-description-actions">
          <Action_Button
            text={galleryLabel}
            onClick={() => navigate(galleryTo)}
            variant="filled"
          />
        </div>
      )}
    </div>
  );
}
