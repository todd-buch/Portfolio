import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import Photo_Description from "./Photo_Description";
import PhotoScroller, { type PhotoSlide } from "./PhotoScroller";
import {
  consumeFeaturedReturnId,
  rememberFeaturedForReturn,
  type PhotographyLocationState,
} from "./photoNav";
import { featuredPhotos, photographyIntro } from "./photographyData";
import "./Photography.css";

function descriptionParagraphs(text: string) {
  return text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, i) => <p key={i}>{p}</p>);
}

export default function Photography() {
  const location = useLocation();
  const navigate = useNavigate();

  const [restoreIndex] = useState<number | undefined>(() => {
    const featuredId = consumeFeaturedReturnId(
      location.state as PhotographyLocationState | null,
    );
    if (!featuredId) return undefined;
    const index = featuredPhotos.findIndex((p) => p.id === featuredId);
    return index >= 0 ? index : undefined;
  });

  const openGalleryFor = useCallback(
    (featuredId: string, gallerySlug: string) => {
      rememberFeaturedForReturn(featuredId);
      navigate(".", {
        replace: true,
        state: { restoreFeaturedId: featuredId } satisfies PhotographyLocationState,
      });
      navigate(`/photography/${gallerySlug}`, {
        state: {
          fromFeaturedId: featuredId,
        } satisfies PhotographyLocationState,
      });
    },
    [navigate],
  );

  const slides: PhotoSlide[] = featuredPhotos.map((photo) => {
    const galleryTo = photo.gallerySlug
      ? `/photography/${photo.gallerySlug}`
      : undefined;

    return {
      id: photo.id,
      imageSrc: photo.src,
      imageAlt: photo.alt,
      onImageClick:
        photo.gallerySlug != null
          ? () => openGalleryFor(photo.id, photo.gallerySlug!)
          : undefined,
      description: (
        <Photo_Description
          title={photo.title}
          date={photo.date}
          featuredId={photo.id}
          galleryTo={galleryTo}
        >
          {descriptionParagraphs(photo.description)}
        </Photo_Description>
      ),
    };
  });

  const intro = (
    <>
      <h1 className="photo-intro-title">{photographyIntro.title}</h1>
      <div className="photo-intro-bio">
        {descriptionParagraphs(photographyIntro.bio)}
      </div>
    </>
  );

  return (
    <main className="photography-page">
      <PhotoScroller
        slides={slides}
        label="Featured photography"
        intro={intro}
        introScrollLabel="Scroll to view gallery"
        endContent={<Footer />}
        initialIndex={restoreIndex}
      />
    </main>
  );
}
