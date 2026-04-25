import Image from "next/image";

type CokeBreakConceptDevelopmentSectionProps = {
  sketchSrc: string;
  characterSrc: string;
  sceneSrc: string;
  sceneLogoSrc?: string;
};

function LeftLabel({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`w-full max-w-[280px] ${className ?? ""}`}>
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold text-neutral-900">+</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-900">
          {text}
        </span>
        <span className="h-px flex-1 bg-neutral-300" />
      </div>
    </div>
  );
}

function CharacterLabel({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`relative z-10 w-full max-w-[360px] whitespace-nowrap ${className ?? ""}`}>
      <div className="flex items-center gap-3 whitespace-nowrap">
        <span className="h-px w-24 bg-neutral-300" />
        <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.32em] text-neutral-900">
          {text}
        </span>
        <span className="-ml-1 text-[10px] font-bold text-neutral-900">+</span>
      </div>
    </div>
  );
}

function RightLabel({ text, className }: { text: string; className?: string }) {
  return <CharacterLabel text={text} className={className} />;
}

export function CokeBreakConceptDevelopmentSection({
  sketchSrc,
  characterSrc,
  sceneSrc,
  sceneLogoSrc,
}: CokeBreakConceptDevelopmentSectionProps) {
  return (
    <div className="pt-10 md:pt-12 lg:pt-14">
      <div className="text-[14px] font-bold uppercase tracking-[0.4em] text-neutral-900 md:text-[16px]">
        Concept Development
      </div>

      <div className="mt-3 border-b border-neutral-300/70" />

      <div className="mt-10 md:mt-12">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8 lg:gap-10">
          <div className="md:col-span-4 md:self-center">
            <LeftLabel text="Concept Sketch" className="md:ml-auto md:-mt-20 md:translate-x-30" />
          </div>
          <div className="md:col-span-8">
            <div className="relative ml-auto aspect-[4/3] w-full max-w-[860px]">
              <Image
                src={sketchSrc}
                alt="Coke Break concept sketch"
                fill
                className="object-contain"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
            </div>
          </div>
        </div>

        <div className="-mt-24 grid grid-cols-1 items-start gap-6 md:-ml-4 md:-mt-32 md:grid-cols-12 md:gap-8 lg:-ml-6 lg:-mt-40 lg:gap-10">
          <div className="md:col-span-7">
            <div className="relative z-0 aspect-[4/3] w-full max-w-[780px]">
              <Image
                src={characterSrc}
                alt="Coke Break character design"
                fill
                className="origin-left -translate-y-4 scale-[1.2] object-contain md:-translate-y-60"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </div>
            <CharacterLabel text="Character Design" className="mt-10 md:hidden" />
          </div>

          <div className="md:col-span-5 md:flex md:items-start md:pt-44 lg:pt-52">
            <RightLabel text="Character Design" className="md:ml-2 mt-2" />
          </div>
        </div>

        <div className="-mt-10 grid grid-cols-1 items-center gap-6 md:-mt-16 md:grid-cols-12 md:gap-8 lg:-mt-50 lg:gap-10">
          <div className="md:col-span-4 md:self-center">
            <div className="relative hidden h-[220px] w-full max-w-[420px] md:ml-auto md:block lg:h-[240px]">
              <div className="pointer-events-none absolute inset-0 -translate-x-[870px]">
                <Image
                  src={sceneLogoSrc ?? "/assets/反白cokeLogo_画板 1.png"}
                  alt=""
                  fill
                  className="origin-left scale-[3.5] object-contain "
                  sizes="(min-width: 768px) 28vw, 0vw"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-end pr-6 -translate-y-8">
                <LeftLabel text="Scene Design" className="relative z-10 w-full md:translate-x-30" />
              </div>
            </div>
            <LeftLabel text="Scene Design" className="md:hidden" />
          </div>
          <div className="md:col-span-8">
            <div className="relative ml-auto aspect-[16/9] w-full max-w-[860px]">
              <Image
                src={sceneSrc}
                alt="Coke Break scene design"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 66vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
