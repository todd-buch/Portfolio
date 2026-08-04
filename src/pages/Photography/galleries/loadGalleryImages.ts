import type { PhotoAsset } from "../photographyData";

/**
 * Auto-import gallery delivery images under galleries/<slug>/*.
 * Drop files into the matching folder — no manual import list required.
 *
 * Delivery formats only (WebP / AVIF). Keep source JPG/PNG beside them for
 * re-encoding via `./scripts/optimize_images.sh`; Vite will not bundle the
 * sources because they are outside this glob.
 *
 * Sort is alphabetical / natural on the filename.
 */
const galleryImageModules = import.meta.glob(
  "./*/*.{webp,avif,WEBP,AVIF}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

function filenameFromPath(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1] ?? path;
}

function altFromFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** All delivery images in `galleries/<slug>/`, sorted by filename. */
export function loadGalleryPhotos(slug: string): PhotoAsset[] {
  const prefix = `./${slug}/`;

  return Object.entries(galleryImageModules)
    .filter(([path]) => path.startsWith(prefix))
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
    )
    .map(([path, src]) => {
      const filename = filenameFromPath(path);
      return {
        id: `${slug}-${filename}`,
        src,
        alt: altFromFilename(filename),
      };
    });
}
