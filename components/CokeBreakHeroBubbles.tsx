"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type BubbleConfig = {
  src: string;
  className: string;
  startOffset?: number;
  range?: [number, number];
  enabled?: boolean;
};

type CokeBreakHeroBubblesProps = {
  bubbles: [BubbleConfig, BubbleConfig, BubbleConfig];
  containerClassName?: string;
};

export function CokeBreakHeroBubbles({ bubbles, containerClassName }: CokeBreakHeroBubblesProps) {
  const reduceMotion = useReducedMotion();

  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const update = () => setViewportHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollY } = useScroll();

  const startY = viewportHeight ? viewportHeight + 260 : 1400;

  const [b1, b2, b3] = bubbles;
  const r1: [number, number] = b1.range ?? [0, 260];
  const r2: [number, number] = b2.range ?? [0, 300];
  const r3: [number, number] = b3.range ?? [0, 340];

  const rawY1 = useTransform(scrollY, r1, [startY + (b1.startOffset ?? 0), 0]);
  const rawY2 = useTransform(scrollY, r2, [startY + (b2.startOffset ?? 140), 0]);
  const rawY3 = useTransform(scrollY, r3, [startY + (b3.startOffset ?? 260), 0]);

  const y1 = useSpring(rawY1, { stiffness: 320, damping: 38 });
  const y2 = useSpring(rawY2, { stiffness: 320, damping: 38 });
  const y3 = useSpring(rawY3, { stiffness: 320, damping: 38 });

  const rawOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  const opacity = useSpring(rawOpacity, { stiffness: 260, damping: 40 });

  return (
    <div className={containerClassName ?? "pointer-events-none absolute inset-0 z-[90]"}>
      {b1.enabled === false ? null : (
        <motion.div style={{ y: reduceMotion ? 0 : y1, opacity: reduceMotion ? 1 : opacity }} className={b1.className}>
          <Image src={b1.src} alt="" fill className="object-contain" />
        </motion.div>
      )}
      {b2.enabled === false ? null : (
        <motion.div style={{ y: reduceMotion ? 0 : y2, opacity: reduceMotion ? 1 : opacity }} className={b2.className}>
          <Image src={b2.src} alt="" fill className="object-contain" />
        </motion.div>
      )}
      {b3.enabled === false ? null : (
        <motion.div style={{ y: reduceMotion ? 0 : y3, opacity: reduceMotion ? 1 : opacity }} className={b3.className}>
          <Image src={b3.src} alt="" fill className="object-contain" />
        </motion.div>
      )}
    </div>
  );
}
