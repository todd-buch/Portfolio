import Footer from "../../Footer";
import Photo_Description from "./Photo_Description";
import PhotoScroller, { type PhotoSlide } from "./PhotoScroller";
import { featuredPhotos } from "./photographyData";
import "./Photography.css";

function descriptionParagraphs(text: string) {
  return text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, i) => <p key={i}>{p}</p>);
}

export default function Photography() {
  const slides: PhotoSlide[] = featuredPhotos.map((photo) => ({
    id: photo.id,
    imageSrc: photo.src,
    imageAlt: photo.alt,
    description: (
      <Photo_Description
        title={photo.title}
        date={photo.date}
        galleryTo={
          photo.gallerySlug ? `/photography/${photo.gallerySlug}` : undefined
        }
      >
        {descriptionParagraphs(photo.description)}
      </Photo_Description>
    ),
  }));

  return (
    <main className="photography-page">
      <PhotoScroller
        slides={slides}
        label="Featured photography"
        endContent={<Footer />}
      />
    </main>
  );
}
