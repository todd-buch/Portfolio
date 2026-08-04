import type { ReactNode } from "react";
import "./Project_Image_Gallery.css";

type GalleryImageProps = {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
};

export function Gallery_Image({
  src,
  alt = "",
  caption,
  className,
}: GalleryImageProps) {
  return (
    <figure
      className={["gallery-image", className].filter(Boolean).join(" ")}
    >
      <a
        href={src}
        className="gallery-image-link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </a>
      {caption ? (
        <figcaption className="gallery-image-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

type ProjectImageGalleryProps = {
  children?: ReactNode;
};

export default function Project_Image_Gallery({
  children,
}: ProjectImageGalleryProps) {
  return <div className="project-image-gallery">{children}</div>;
}
