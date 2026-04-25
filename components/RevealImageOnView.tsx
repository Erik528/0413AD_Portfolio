"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type RevealImageOnViewProps = {
    src: string;
    alt: string;
    priority?: boolean;
    sizes?: string;
    imageClassName?: string;
    backgroundColor?: string;
    variant?: "wipe" | "circle";
    circleOrigin?: { xPercent: number; yPercent: number };
    className?: string;
};

export function RevealImageOnView({
    src,
    alt,
    priority,
    sizes = "100vw",
    imageClassName,
    backgroundColor = "#f5f3ef",
    variant = "wipe",
    circleOrigin = { xPercent: 18, yPercent: 100 },
    className,
}: RevealImageOnViewProps) {
    const reduceMotion = useReducedMotion();

    const circleStart = `circle(0% at ${circleOrigin.xPercent}% ${circleOrigin.yPercent}%)`;
    const circleEnd = `circle(200% at ${circleOrigin.xPercent}% ${circleOrigin.yPercent}%)`;

    return (
        <motion.div
            initial={
                reduceMotion
                    ? false
                    : variant === "circle"
                      ? { opacity: 0, y: 18, scale: 0.985, clipPath: circleStart, filter: "blur(6px)" }
                      : { opacity: 0, y: 18 }
            }
            whileInView={
                reduceMotion
                    ? undefined
                    : variant === "circle"
                      ? { opacity: 1, y: 0, scale: 1, clipPath: circleEnd, filter: "blur(0px)" }
                      : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            <Image src={src} alt={alt} fill className={imageClassName} sizes={sizes} priority={priority} />

            {reduceMotion || variant !== "wipe" ? null : (
                <motion.div
                    aria-hidden="true"
                    initial={{ y: 0, opacity: 1 }}
                    whileInView={{ y: "-110%", opacity: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: `linear-gradient(to bottom, ${backgroundColor} 0%, ${backgroundColor} 68%, transparent 100%)`,
                    }}
                />
            )}

            {reduceMotion || variant !== "circle" ? null : (
                <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0.9, scale: 0.65 }}
                    whileInView={{ opacity: 0, scale: 1.15 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                        transformOrigin: `${circleOrigin.xPercent}% ${circleOrigin.yPercent}%`,
                        background: `radial-gradient(circle at ${circleOrigin.xPercent}% ${circleOrigin.yPercent}%, ${backgroundColor} 0%, ${backgroundColor} 48%, transparent 70%)`,
                    }}
                />
            )}
        </motion.div>
    );
}
