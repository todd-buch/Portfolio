import { loadGalleryPhotos } from "./galleries/loadGalleryImages";

export type PhotoAsset = {
  id: string;
  src?: string;
  alt: string;
};

export type FeaturedPhoto = {
  id: string;
  src?: string;
  alt: string;
  title: string;
  date?: string;
  description: string;
  gallerySlug?: string;
};

export type GalleryMeta = {
  slug: string;
  title: string;
  date?: string;
  description: string;
};

export type PhotoGallery = GalleryMeta & {
  photos: PhotoAsset[];
};

/* Intro */

export const photographyIntro = {
  title: "Photography",
  bio: "Outside of Software Development, I enjoy capturing moments through photography. My interests include cars, motorsports, landscapes, and candid portraits. This page showcases a selection of my favorite shots.",
};

/* Higlights */
import NTS1 from "./galleries/NASCAR-Truck-Series/01 - Poster.jpg";

export const featuredPhotos: FeaturedPhoto[] = [
  {
    id: "NASCAR Truck Series",
    src: NTS1,
    alt: "NASCAR Truck Series",
    title: "NASCAR Truck Series",
    date: "June 2025",
    description:
      "The NASCAR Craftsman Truck Series race at Lime Rock Park, Connecticut.",
    gallerySlug: "NASCAR-Truck-Series",
  },
];

/* Gallery */

export const galleryMeta: Record<string, GalleryMeta> = {
  "NASCAR-Truck-Series": {
    slug: "NASCAR-Truck-Series",
    title: "NASCAR Truck Series",
    date: "June 2025",
    description:
      "The NASCAR Craftsman Truck Series race at Lime Rock Park, Connecticut.",
  },
};

export function getGallery(slug: string | undefined): PhotoGallery | undefined {
  if (!slug) return undefined;
  const meta = galleryMeta[slug];
  if (!meta) return undefined;

  return {
    ...meta,
    photos: loadGalleryPhotos(slug),
  };
}
