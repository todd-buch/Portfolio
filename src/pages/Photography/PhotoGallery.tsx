import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../../Footer";
import Photo_Description from "./Photo_Description";
import PhotoScroller, { type PhotoSlide } from "./PhotoScroller";
import { getGallery } from "./photographyData";
import "./Photography.css";
import "./PhotoGallery.css";

function descriptionParagraphs(text: string) {
  return text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, i) => <p key={i}>{p}</p>);
}

export default function PhotoGallery() {
  const { gallerySlug } = useParams<{ gallerySlug: string }>();
  const gallery = getGallery(gallerySlug);

  if (!gallery) {
    return (
      <main className="photography-page photo-gallery-missing">
        <div className="photo-gallery-missing-inner">
          <h1>Gallery not found</h1>
          <p>
            No gallery matches{" "}
            <code>{gallerySlug ?? "(missing slug)"}</code>. Add it to{" "}
            <code>galleryMeta</code> in photographyData.ts and create{" "}
            <code>galleries/{gallerySlug ?? "slug"}/</code>.
          </p>
          <Link to="/photography" className="photo-gallery-back">
            <ArrowLeft size={18} strokeWidth={2.25} />
            Back to photography
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const photos =
    gallery.photos.length > 0
      ? gallery.photos
      : [
          {
            id: `${gallery.slug}-empty`,
            alt: `No images in ${gallery.title} yet`,
            src: undefined as string | undefined,
          },
        ];

  // Same card treatment as the main photography page (no oversized title).
  const slides: PhotoSlide[] = photos.map((photo) => ({
    id: photo.id,
    imageSrc: photo.src,
    imageAlt: photo.alt,
    description: (
      <Photo_Description title={gallery.title} date={gallery.date}>
        {descriptionParagraphs(gallery.description)}
        {gallery.photos.length === 0 && (
          <p className="photo-gallery-empty-hint">
            Drop images into <code>galleries/{gallery.slug}/</code> — they load
            automatically.
          </p>
        )}
        <div className="photo-gallery-back-wrap">
          <Link to="/photography" className="photo-gallery-back">
            <ArrowLeft size={18} strokeWidth={2.25} />
            All photography
          </Link>
        </div>
      </Photo_Description>
    ),
  }));

  // Start on the second image — the first is usually the highlight already seen.
  // Falls back to 0 when the gallery only has one photo.
  const initialIndex = photos.length > 1 ? 1 : 0;

  return (
    <main className="photography-page">
      <PhotoScroller
        slides={slides}
        label={`${gallery.title} gallery`}
        endContent={<Footer />}
        initialIndex={initialIndex}
      />
    </main>
  );
}
