import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Action_Button from "../../Reuseable-Components/Action_Button";
import {
  rememberFeaturedForReturn,
  type PhotographyLocationState,
} from "./photoNav";
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
  /**
   * Featured highlight id for this card. Used so returning from the gallery
   * lands back on this image instead of the intro.
   */
  featuredId?: string;
}

export default function Photo_Description({
  title,
  date,
  children,
  galleryTo,
  galleryLabel = "View the gallery",
  featuredId,
}: Photo_Description_Props) {
  const navigate = useNavigate();

  const openGallery = () => {
    if (!galleryTo) return;

    if (featuredId) {
      rememberFeaturedForReturn(featuredId);
      // Stamp current history entry so browser-back also restores this photo
      navigate(".", {
        replace: true,
        state: { restoreFeaturedId: featuredId } satisfies PhotographyLocationState,
      });
    }

    navigate(galleryTo, {
      state: {
        fromFeaturedId: featuredId,
      } satisfies PhotographyLocationState,
    });
  };

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
            onClick={openGallery}
            variant="outline"
          />
        </div>
      )}
    </div>
  );
}
