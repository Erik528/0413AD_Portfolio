"use client";

import { useState } from "react";
import { ImageLightbox } from "./ImageLightbox";

type MobileExperienceImage = {
  src: string;
  alt: string;
  caption?: string;
};

type MobileExperienceSixColumnGalleryProps = {
  columns: MobileExperienceImage[][];
};

export function MobileExperienceSixColumnGallery({ columns }: MobileExperienceSixColumnGalleryProps) {
  const [selected, setSelected] = useState<MobileExperienceImage | null>(null);
  const mdColsClass =
    columns.length === 6
      ? "md:grid-cols-6"
      : columns.length === 5
        ? "md:grid-cols-5"
        : columns.length === 4
          ? "md:grid-cols-4"
          : columns.length === 3
            ? "md:grid-cols-3"
            : "md:grid-cols-2";

  return (
    <>
      <div className={`grid grid-cols-2 gap-4 ${mdColsClass} md:gap-4`}>
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {col.map((img) => (
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
                    className="block h-auto w-full transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                  />
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <ImageLightbox
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
        src={selected?.src ?? ""}
        alt={selected?.alt ?? ""}
        caption={selected?.caption}
      />
    </>
  );
}
