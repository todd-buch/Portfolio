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
  galleryTo?: string;
  galleryLabel?: string;
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
