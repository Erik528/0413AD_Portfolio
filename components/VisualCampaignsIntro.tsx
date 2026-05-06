"use client";

import { useReducedMotion, motion } from "framer-motion";
import type { Variants } from "framer-motion";

type VisualCampaignsIntroProps = {
  paragraphs: string[];
  className?: string;
};

export function VisualCampaignsIntro({ paragraphs, className }: VisualCampaignsIntroProps) {
  const reduceMotion = useReducedMotion();

  const itemVariants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12, filter: "blur(9px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6, margin: "-10% 0px -20% 0px" }}
      transition={{ staggerChildren: reduceMotion ? 0 : 0.16 }}
      className={className}
    >
      {paragraphs.map((text, idx) => (
        <motion.p
          key={`${idx}-${text}`}
          variants={itemVariants}
          transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
          className={idx === 0 ? undefined : "mt-6"}
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
}

