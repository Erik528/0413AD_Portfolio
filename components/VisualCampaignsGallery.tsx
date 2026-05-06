"use client";

import { useReducedMotion, motion } from "framer-motion";
import type { Variants } from "framer-motion";
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
  captionMode?: "group" | "per-image";
  layout?: "stacked" | "row" | "masonry";
};

type VisualCampaignsGalleryProps = {
  images: VisualCampaignImage[];
  featured?: FeaturedGroup | FeaturedGroup[];
  tail?: FeaturedGroup | FeaturedGroup[];
  masonryColumnsMd?: 3 | 4 | 5 | 6;
};

export function VisualCampaignsGallery({ images, featured, tail, masonryColumnsMd = 3 }: VisualCampaignsGalleryProps) {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<VisualCampaignImage | null>(null);
  const featuredGroups = Array.isArray(featured) ? featured : featured ? [featured] : [];
  const tailGroups = Array.isArray(tail) ? tail : tail ? [tail] : [];
  const removedSrcs = new Set(
    [...featuredGroups, ...tailGroups].flatMap((g) => g.images.map((img) => img.src)),
  );
  const restImages = removedSrcs.size ? images.filter((img) => !removedSrcs.has(img.src)) : images;

  const masonryColsClass =
    masonryColumnsMd === 6
      ? "md:columns-6"
      : masonryColumnsMd === 5
        ? "md:columns-5"
        : masonryColumnsMd === 4
          ? "md:columns-4"
          : "md:columns-3";

  const captionVariants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 10, filter: "blur(9px)" },
        show: (idx: number) => ({
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: idx * 0.14 },
        }),
      };

  return (
    <>
      {featuredGroups.map((group, idx) => (
        <div key={`featured-${idx}`} className="mb-14">
          {group.layout === "row" ? (
            <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-4">
              {group.images.map((img) => (
                <div key={img.src}>
                  <div className="overflow-hidden rounded-[18px] bg-neutral-200">
                    <button
                      type="button"
                      onClick={() => setSelected(img)}
                      className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                      aria-label={`Open image: ${img.alt}`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="block h-auto w-full object-contain transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                      />
                    </button>
                  </div>
                  {group.captionMode === "per-image" && img.caption ? (
                    <div className="mt-4 text-center text-[12px] leading-[1.45] text-neutral-700 md:text-[13px]">
                      {img.caption}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : group.layout === "masonry" ? (
            <div className={`columns-1 gap-4 ${masonryColsClass}`}>
              {group.images.map((img) => (
                <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block h-auto w-full transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                    />
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
                    className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block h-auto w-full object-contain transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          {group.captionMode === "per-image" ? null : group.caption ? (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: "-10% 0px -20% 0px" }}
              variants={captionVariants}
              custom={idx}
              className="mt-5 text-center text-[12px] leading-[1.45] text-neutral-700 md:text-[13px]"
            >
              {group.caption}
            </motion.div>
          ) : null}
        </div>
      ))}

      <div className={`columns-1 gap-4 ${masonryColsClass}`}>
        {restImages.map((img) => (
          <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-[18px] bg-neutral-200">
            <button
              type="button"
              onClick={() => setSelected(img)}
              className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="block h-auto w-full transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
              />
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
                    className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block h-auto w-full object-contain transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                    />
                  </button>
                </div>
              ))}
            </div>
          ) : group.layout === "masonry" ? (
            <div className={`columns-1 gap-4 ${masonryColsClass}`}>
              {group.images.map((img) => (
                <div key={img.src} className="mb-4 break-inside-avoid overflow-hidden rounded-[18px] bg-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelected(img)}
                    className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block h-auto w-full transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                    />
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
                    className="group block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                    aria-label={`Open image: ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="block h-auto w-full object-contain transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          {group.caption ? (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.8, margin: "-10% 0px -20% 0px" }}
              variants={captionVariants}
              custom={idx}
              className="mt-5 text-center text-[12px] leading-[1.55] text-neutral-700 md:text-[13px]"
            >
              {group.caption}
            </motion.div>
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
