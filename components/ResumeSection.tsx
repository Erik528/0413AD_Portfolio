"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import hoverStyles from "./HeroSloganHover.module.css";

const resumeIntro =
  "HI, I'M ERIK WU, A SENIOR GRAPHIC DESIGNER WITH OVER 8 YEARS OF EXPERIENCE, CURRENTLY BASED IN AUSTRALIA. GREAT TO MEET YOU!";

function ResumeIntroHeadline() {
  const controls = useAnimationControls();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -20% 0px" });
  const hoverRef = useRef<HTMLHeadingElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const latestRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  useEffect(() => {
    return () => {
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const updateHoverGradient = () => {
    const root = hoverRef.current;
    const latest = latestRef.current;
    if (!root || !latest) return;

    const elRect = root.getBoundingClientRect();
    const deadZone = 18;
    const maxBlur = 11.5;
    const maxDist = Math.max(elRect.width, elRect.height) * 0.6;

    const chars = root.querySelectorAll<HTMLElement>(`.${hoverStyles.char}`);
    chars.forEach((node) => {
      const r = node.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = cx - latest.x;
      const dy = cy - latest.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= deadZone) {
        node.style.setProperty("--blur", "0px");
        return;
      }

      const t = Math.min(1, Math.max(0, (dist - deadZone) / Math.max(1, maxDist - deadZone)));
      const eased = t * t;
      const blurPx = eased * maxBlur;
      node.style.setProperty("--blur", `${blurPx.toFixed(2)}px`);
    });
  };

  const scheduleHoverGradient = (x: number, y: number) => {
    latestRef.current = { x, y };
    if (rafIdRef.current) return;
    rafIdRef.current = window.requestAnimationFrame(() => {
      rafIdRef.current = null;
      updateHoverGradient();
    });
  };

  const resetHoverGradient = () => {
    const root = hoverRef.current;
    if (!root) return;
    latestRef.current = null;
    const chars = root.querySelectorAll<HTMLElement>(`.${hoverStyles.char}`);
    chars.forEach((node) => node.style.setProperty("--blur", "0px"));
  };

  return (
    <motion.h3
      ref={(node) => {
        ref.current = node;
        hoverRef.current = node;
      }}
      initial="hidden"
      animate={controls}
      className="text-left text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-7xl"
      onMouseMove={(e) => scheduleHoverGradient(e.clientX, e.clientY)}
      onMouseLeave={resetHoverGradient}
    >
      {resumeIntro.split(" ").map((word, wordIdx) => (
        <span key={`w-${wordIdx}`} className="inline-block whitespace-nowrap">
          {Array.from(word).map((ch, chIdx) => (
            <span key={`${word}-${ch}-${chIdx}`} className={hoverStyles.char}>
              {ch}
            </span>
          ))}
          {wordIdx === resumeIntro.split(" ").length - 1 ? null : "\u00A0"}
        </span>
      ))}
    </motion.h3>
  );
}

export function ResumeSection() {
  return (
    <section id="resume" className="relative border-b border-neutral-300/50 py-16 md:py-20 lg:py-24">
      <div className="absolute top-0 left-0 w-full border-t border-neutral-300/70" />
      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        <div className="absolute -bottom-[5px] left-0 text-[10px] font-bold text-neutral-400 lg:left-2">+</div>
        <div className="absolute -bottom-[5px] right-0 text-[10px] font-bold text-neutral-400 lg:right-2">+</div>

        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-[18px] font-bold uppercase tracking-[0.4em] text-neutral-900 md:text-[22px]">
            Resume
          </h2>
          <div className="flex gap-4 text-[10px] font-bold text-neutral-400">
            <span>+</span>
            <span>+</span>
          </div>
        </div>
        <div className="mb-10 border-b border-neutral-300/70" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-16">
          <div>
            <ResumeIntroHeadline />

            <div className="mt-12 max-w-[520px]">
              <img
                src="/assets/Radar_画板 1.png"
                alt="Radar chart"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/人物插画_画板 1.png"
              alt="Erik Wu illustration"
              className="w-full max-w-[740px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
