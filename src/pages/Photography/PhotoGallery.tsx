import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "../../Footer";
import Photo_Description from "./Photo_Description";
import PhotoScroller, { type PhotoSlide } from "./PhotoScroller";
import {
  PHOTO_RESTORE_KEY,
  type PhotographyLocationState,
} from "./photoNav";
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

function readFromFeaturedId(
  state: PhotographyLocationState | null | undefined,
): string | undefined {
  if (state?.fromFeaturedId) return state.fromFeaturedId;
  try {
    return sessionStorage.getItem(PHOTO_RESTORE_KEY) ?? undefined;
  } catch {
    return undefined;
  }
}

export default function PhotoGallery() {
  const { gallerySlug } = useParams<{ gallerySlug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const gallery = getGallery(gallerySlug);

  const fromFeaturedId = readFromFeaturedId(
    location.state as PhotographyLocationState | null,
  );

  const goToPhotography = () => {
    navigate("/photography", {
      state: fromFeaturedId
        ? ({ restoreFeaturedId: fromFeaturedId } satisfies PhotographyLocationState)
        : undefined,
    });
  };

  if (!gallery) {
    return (
      <main className="photography-page photo-gallery-missing">
        <div className="photo-gallery-missing-inner">
          <h1>Gallery not found</h1>
          <button
            type="button"
            className="photo-gallery-back"
            onClick={goToPhotography}
          >
            <ArrowLeft size={18} strokeWidth={2.25} />
            Back to photography
          </button>
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
            alt: gallery.title,
            src: undefined as string | undefined,
          },
        ];

  const slides: PhotoSlide[] = photos.map((photo) => ({
    id: photo.id,
    imageSrc: photo.src,
    imageAlt: photo.alt,
    description: (
      <Photo_Description title={gallery.title} date={gallery.date}>
        {descriptionParagraphs(gallery.description)}
        <div className="photo-gallery-back-wrap">
          <button
            type="button"
            className="photo-gallery-back"
            onClick={goToPhotography}
          >
            <ArrowLeft size={18} strokeWidth={2.25} />
            All photography
          </button>
        </div>
      </Photo_Description>
    ),
  }));

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
