# Photo galleries

Each subfolder is one gallery. The folder name is the **slug** used in URLs and in `photographyData.ts`.

```
galleries/
  portraits/          →  /photography/portraits
    01-hero.jpg
    02-studio.jpg
  example-gallery/    →  /photography/example-gallery
    ...
```

## Workflow

1. **Main photography page (highlights)**  
   In `photographyData.ts`, manually import the hero/highlight image and write its title + text.  
   Set `gallerySlug` to the folder name to show “View the gallery”.

   ```ts
   import hero from "./galleries/portraits/01-hero.jpg";

   {
     src: hero,
     title: "Evening session",
     description: "…",
     gallerySlug: "portraits",
   }
   ```

2. **Full gallery page**  
   Drop every image for that series into `galleries/<slug>/`.  
   They are pulled in automatically (sorted by filename).  
   Gallery title / date / description still live in `photographyData.ts` under `galleryMeta`.

## Tips

- Prefer `01-`, `02-` prefixes if you care about order.
- Filenames become default alt text (`my-shot.jpg` → “my shot”).
- Empty folders are fine while scaffolding; the gallery page will say there are no images yet.

## Optimize for the web

Galleries ship **WebP/AVIF only** (see `loadGalleryImages.ts`).

**Adding new photos**

1. Drop source JPG/PNG into `galleries/<slug>/`.
2. Run from repo root:

   ```bash
   ./scripts/optimize_images.sh
   ```

3. Remove the sources once the `.webp` files look good (or use `--remove-sources` on the script).

Featured imports in `photographyData.ts` are manual — point them at the `.webp` path.
