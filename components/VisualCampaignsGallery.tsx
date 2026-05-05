"use client";

import { useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

type VisualCampaignImage = {
  src: string;
  alt: string;
  caption?: string;
  disableCaption?: boolean;
};

type FeaturedGroup = {
  images: VisualCampaignImage[];
  title?: string;
  caption?: string;
  layout?: "stacked" | "row" | "masonry";
};

type VisualCampaignsGalleryProps = {
  images: VisualCampaignImage[];
  featured?: FeaturedGroup | FeaturedGroup[];
  tail?: FeaturedGroup | FeaturedGroup[];
};

export function VisualCampaignsGallery({ images, featured, tail }: VisualCampaignsGalleryProps) {
  const [selected, setSelected] = useState<VisualCampaignImage | null>(null);
  const featuredGroups = Array.isArray(featured) ? featured : featured ? [featured] : [];
  const tailGroups = Array.isArray(tail) ? tail : tail ? [tail] : [];
  const removedSrcs = new Set(
    [...featuredGroups, ...tailGroups].flatMap((g) => g.images.map((img) => img.src)),
  );
  const restImages = removedSrcs.size ? images.filter((img) => !removedSrcs.has(img.src)) : images;

  return (
    <>
      {featuredGroups.map((group, idx) => (
        <div key={`featured-${idx}`} className="mb-14">
          {group.layout === "row" ? (
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-4">
              {group.images.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} className="block h-auto w-full object-contain" />
                  </button>
                </div>
              ))}
            </div>
          ) : group.layout === "masonry" ? (
            <div className="columns-1 gap-4 md:columns-3">
              {group.images.map((img) => (
                <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} className="block h-auto w-full" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {group.images.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} className="block h-auto w-full object-contain" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {group.caption ? (
            <div className="mt-5 text-center text-[12px] leading-[1.45] text-neutral-700 md:text-[13px]">
              {group.caption}
            </div>
          ) : null}
        </div>
      ))}

      <div className="columns-1 gap-4 md:columns-3">
        {restImages.map((img) => (
          <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-[18px] bg-neutral-200">
            <button
              type="button"
              onClick={() => setSelected(img)}
              className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} className="block h-auto w-full" />
            </button>
          </div>
        ))}
      </div>

      {tailGroups.map((group, idx) => (
        <div key={`tail-${idx}`} className="mt-14">
          {group.title ? (
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-neutral-300/70" />
              <div className="text-[12px] font-bold uppercase tracking-[0.4em] text-neutral-900">
                {group.title}
              </div>
              <div className="h-px flex-1 bg-neutral-300/70" />
            </div>
          ) : null}
          {group.layout === "row" ? (
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-4">
              {group.images.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} className="block h-auto w-full object-contain" />
                  </button>
                </div>
              ))}
            </div>
          ) : group.layout === "masonry" ? (
            <div className="columns-1 gap-4 md:columns-3">
              {group.images.map((img) => (
                <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} className="block h-auto w-full" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {group.images.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img src={img.src} alt={img.alt} className="block h-auto w-full object-contain" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {group.caption ? (
            <div className="mt-5 text-center text-[12px] leading-[1.55] text-neutral-700 md:text-[13px]">
              {group.caption}
            </div>
          ) : null}
        </div>
      ))}

      <ImageLightbox
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        src={selected?.src ?? ""}
        alt={selected?.alt ?? ""}
        caption={
          selected?.disableCaption
            ? undefined
            : selected?.caption
              ? selected.caption
              : selected
                ? "占位符"
                : undefined
        }
      />
    </>
  );
}
