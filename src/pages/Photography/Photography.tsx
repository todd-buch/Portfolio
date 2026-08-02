import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../Footer";
import Photo_Description from "./Photo_Description";
import PhotoScroller, { type PhotoSlide } from "./PhotoScroller";
import {
  consumeFeaturedReturnId,
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

  // Capture once on mount so StrictMode / later navigations don't re-jump
  const [restoreIndex] = useState<number | undefined>(() => {
    const featuredId = consumeFeaturedReturnId(
      location.state as PhotographyLocationState | null,
    );
    if (!featuredId) return undefined;
    const index = featuredPhotos.findIndex((p) => p.id === featuredId);
    return index >= 0 ? index : undefined;
  });

  const slides: PhotoSlide[] = featuredPhotos.map((photo) => ({
    id: photo.id,
    imageSrc: photo.src,
    imageAlt: photo.alt,
    description: (
      <Photo_Description
        title={photo.title}
        date={photo.date}
        featuredId={photo.id}
        galleryTo={
          photo.gallerySlug ? `/photography/${photo.gallerySlug}` : undefined
        }
      >
        {descriptionParagraphs(photo.description)}
      </Photo_Description>
    ),
  }));

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
