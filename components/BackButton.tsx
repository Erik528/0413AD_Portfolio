"use client";

type BackButtonProps = {
  className?: string;
  fallbackHref?: string;
};

export function BackButton({ className, fallbackHref = "/" }: BackButtonProps) {
  return (
    <a
      href={fallbackHref}
      className={`learnmore-btn relative z-20 inline-flex cursor-pointer items-center gap-4 border border-neutral-900/10 bg-white/40 px-6 py-3.5 backdrop-blur-md transition-all duration-500 hover:border-neutral-900/20 hover:bg-white/60 hover:shadow-[0_0_0_1px_rgba(17,17,17,0.18),0_0_22px_rgba(17,17,17,0.12)] ${className ?? ""
        }`}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-neutral-700 transition-transform duration-500 group-hover:-translate-x-0.5"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      <span className="learnmore-text text-[9px] font-bold tracking-[0.5em] text-neutral-700 transition-colors duration-500 group-hover:text-neutral-900">
        BACK
      </span>
    </a>
  );
}
