"use client";

import type { Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  const revealVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
      }
    : {
        hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const skillIcons = [
    { label: "PS", src: "/assets/resume/PS.png" },
    { label: "AI", src: "/assets/resume/AI.png" },
    { label: "AE", src: "/assets/resume/AE.png" },
    { label: "PR", src: "/assets/resume/PR.png" },
    { label: "ID", src: "/assets/resume/ID.png" },
    { label: "C4D", src: "/assets/resume/C4D.png" },
    { label: "Figma", src: "/assets/resume/Figma.png" },
    { label: "GPT", src: "/assets/resume/GPT.png" },
    { label: "JIMENG", src: "/assets/resume/JIMENG.png" },
    { label: "Gemini", src: "/assets/resume/Gemini.png" },
    { label: "Trae", src: "/assets/resume/Trae.png" },
  ] as const;

  return (
    <section className="relative border-b border-neutral-300/50 pt-14 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-[14px] font-bold uppercase tracking-[0.4em] text-neutral-900 md:text-[16px]">
          SKILLS
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-16 xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35, margin: "-10% 0px -20% 0px" }}
            variants={revealVariants}
            className="relative h-[260px] w-full md:h-[300px] xl:h-[340px]"
          >
            <Image
              src="/assets/resume/0428-logo大本营-26.png"
              alt="Skills radar"
              fill
              sizes="(min-width: 1280px) 520px, (min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
          </motion.div>
          <div className="min-w-0">
            <motion.h3
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35, margin: "-10% 0px -20% 0px" }}
              variants={revealVariants}
              className="text-3xl font-bold uppercase leading-[1.1] tracking-tight text-neutral-900 md:text-4xl lg:text-5xl"
            >
              AI is like a map. It shows possibilities but it takes judgment to choose the right path.
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35, margin: "-10% 0px -20% 0px" }}
              variants={revealVariants}
              className="mt-5 max-w-[68ch] text-[10px] leading-[1.7] text-neutral-700 md:text-[11px]"
            >
              Coming from a pro-UI background as a well-rounded designer, I&apos;m able to direct AI with purpose rather
              than rely on it — using it to accelerate production while maintaining quality and intent. I have strong
              proficiency in Adobe Creative Suite (Photoshop, Illustrator, and InDesign), with additional experience in
              Cinema 4D and Figma, and practical working knowledge of After Effects and Premiere Pro.
            </motion.p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              {skillIcons.map((icon) => (
                <div key={icon.label} className="contents">
                  <div className="relative h-9 w-9">
                    <Image src={icon.src} alt={icon.label} fill sizes="36px" className="object-contain" />
                  </div>
                  {icon.label === "Figma" ? <div className="mx-2 h-8 w-px bg-neutral-300/70" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
