"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type CokeBreakScrollToTopButtonProps = {
    className?: string;
};

function isNearPageBottom(triggerOffset = 220) {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - triggerOffset;
}

export function CokeBreakScrollToTopButton({ className }: CokeBreakScrollToTopButtonProps) {
    const reduceMotion = useReducedMotion();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(isNearPageBottom());
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <motion.div
            className={className}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? { opacity: visible ? 1 : 0 } : { opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ pointerEvents: visible ? "auto" : "none" }}
        >
            <a href="#top" className="group inline-flex flex-col items-start" aria-label="Scroll to top">
                <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-neutral-900 transition-colors duration-500 group-hover:text-neutral-950">
                    SCROLL
                </div>
                <div className="mt-3 inline-flex h-12 w-12 items-center justify-center border border-neutral-900/70 bg-transparent transition-all duration-500 group-hover:border-neutral-900 group-hover:bg-neutral-900/5 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-neutral-900">
                    <span className="text-[16px] leading-none text-neutral-900 transition-transform duration-500 group-hover:-translate-y-0.5">
                        ↑
                    </span>
                </div>
                <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.32em] text-neutral-900 transition-colors duration-500 group-hover:text-neutral-950">
                    TO TOP
                </div>
            </a>
        </motion.div>
    );
}
