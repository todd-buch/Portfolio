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
import NNH1 from "./galleries/NASCAR-NH/DSC06772.jpg";
import CS1 from "./galleries/Car-Shows/01 - DSC02846.jpg";
import LI1 from "./galleries/Long-Island/01 - DSC06229.jpg";

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
  {
    id: "NASCAR NH",
    src: NNH1,
    alt: "NASCAR NH",
    title: "NASCAR Race, New Hampshire Motor Speedway",
    date: "September 2025",
    description:
      "Mobil 1 301 NASCAR Cup Series race at New Hampshire Motor Speedway, Loudon, New Hampshire.",
  },
  {
    id: "Car Shows",
    src: CS1,
    alt: "Car Shows",
    title: "Car Shows",
    date: "Summer 2025 — present",
    description:
      "I enjoy attending car shows and capturing the unique vehicles and moments at these events. This gallery features a selection of my favorite shots from various car shows I've attended.",
    gallerySlug: "Car-Shows",
  },
  {
    id: "Long Island",
    src: LI1,
    alt: "Long Island",
    title: "Long Island",
    date: "August 2025",
    description:
      "Photos from my trip to Long Island. Nissequogue River State Park - Site of a former Psychiatric Center and the Old Westbury Gardens.",
    gallerySlug: "Long-Island",
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
  "Car-Shows": {
    slug: "Car-Shows",
    title: "Car Shows",
    date: "Summer 2025 — present",
    description:
      "I enjoy attending car shows and capturing the unique vehicles and moments at these events. This gallery features a selection of my favorite shots from various car shows I've attended.",
  },
  "Long-Island": {
    slug: "Long-Island",
    title: "Long Island",
    date: "August 2025",
    description:
      "Photos from my trip to Long Island. Nissequogue River State Park - Site of a former Psychiatric Center and the Old Westbury Gardens.",
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
