"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type CokeBreakFadeInOnViewProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    amount?: number;
};

export function CokeBreakFadeInOnView({
    children,
    className,
    delay = 0,
    amount = 0.35,
}: CokeBreakFadeInOnViewProps) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.9, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
