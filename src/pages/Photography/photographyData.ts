/**
 * Photography content
 * -------------------
 * HIGHLIGHTS (this file): manually import images + write title/text for /photography.
 * FULL GALLERIES: drop files into galleries/<slug>/ — images auto-load.
 *
 * Example:
 *   import hero from "./galleries/portraits/01-hero.jpg";
 *   featuredPhotos: [{ src: hero, gallerySlug: "portraits", ... }]
 *   galleryMeta.portraits → title/description for /photography/portraits
 *   (all images in galleries/portraits/ appear on that page automatically)
 *
 * Featured page  →  /photography
 * Gallery page   →  /photography/<slug>
 */

import { loadGalleryPhotos } from "./galleries/loadGalleryImages";

export type PhotoAsset = {
  id: string;
  /** Resolved image URL (import or glob). Omit for a placeholder. */
  src?: string;
  alt: string;
};

export type FeaturedPhoto = {
  id: string;
  /** Manually import the highlight image for the main page. */
  src?: string;
  alt: string;
  title: string;
  date?: string;
  description: string;
  /**
   * Folder name under galleries/ and URL segment.
   * When set → “View the gallery” → /photography/<gallerySlug>
   */
  gallerySlug?: string;
};

export type GalleryMeta = {
  /** Must match the folder name under galleries/ */
  slug: string;
  title: string;
  date?: string;
  /** Same text for every image in this gallery */
  description: string;
};

export type PhotoGallery = GalleryMeta & {
  photos: PhotoAsset[];
};

/* -------------------------------------------------------------------------- */
/*  FEATURED HIGHLIGHTS — manual imports + copy for the main page             */
/* -------------------------------------------------------------------------- */
import hero from "./galleries/example-gallery/DSC07711.jpg";

export const featuredPhotos: FeaturedPhoto[] = [
  {
    id: "featured-1",
    src: hero,
    alt: "Placeholder for featured photo 1",
    title: "Featured Title One",
    date: "2024",
    description:
      "Short story about this image. Import a file from the gallery folder for the highlight, then drop the rest of the series into that same folder.",
    gallerySlug: "example-gallery",
  },
  {
    id: "featured-2",
    alt: "Placeholder for featured photo 2",
    title: "Featured Title Two",
    date: "2025",
    description:
      "Standalone highlight with no gallery — leave gallerySlug off and the button stays hidden.",
  },
  {
    id: "featured-3",
    alt: "Placeholder for featured photo 3",
    title: "Featured Title Three",
    date: "2023",
    description:
      "Links to the portraits gallery folder. Add images under galleries/portraits/ and they show up automatically.",
    gallerySlug: "portraits",
  },
];

/* -------------------------------------------------------------------------- */
/*  GALLERY METADATA — title/text only; images come from galleries/<slug>/    */
/* -------------------------------------------------------------------------- */

export const galleryMeta: Record<string, GalleryMeta> = {
  "example-gallery": {
    slug: "example-gallery",
    title: "Example Gallery",
    date: "2024",
    description:
      "Shared description for every image in this gallery. Drop files into galleries/example-gallery/ to fill the slides.",
  },
  portraits: {
    slug: "portraits",
    title: "Portraits",
    date: "2023–2025",
    description:
      "A series of portrait sessions. Images auto-load from galleries/portraits/.",
  },
};

/** Resolve gallery meta + auto-imported images for a URL slug. */
export function getGallery(slug: string | undefined): PhotoGallery | undefined {
  if (!slug) return undefined;
  const meta = galleryMeta[slug];
  if (!meta) return undefined;

  return {
    ...meta,
    photos: loadGalleryPhotos(slug),
  };
}
