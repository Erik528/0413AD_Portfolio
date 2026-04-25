"use client";

import { useEffect } from "react";

type YouTubeModalProps = {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
};

const getYouTubeId = (url: string) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "").trim();
      return id.length ? id : null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const v = parsed.searchParams.get("v");
      return v?.trim().length ? v.trim() : null;
    }

    return null;
  } catch {
    return null;
  }
};

export function YouTubeModal({ open, onClose, videoUrl, title = "Video" }: YouTubeModalProps) {
  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />
      <div className="relative z-10 w-full max-w-5xl overflow-hidden bg-black">
        <div className="relative aspect-video w-full">
          {embedUrl ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={embedUrl}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
              Invalid YouTube URL
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

