import Image from "next/image";

const brands = [
  { name: "Coca-Cola", src: "/logos/coca-cola.png" },
  { name: "BYD", src: "/logos/byd.png" },
  { name: "Sprite", src: "/logos/sprite.png" },
  { name: "KFC", src: "/logos/kfc.png" },
  { name: "L'Oréal", src: "/logos/loreal.png" },
  { name: "GSK", src: "/logos/gsk.png" },
  { name: "Roche", src: "/logos/roche.png" },
  { name: "Häagen-Dazs", src: "/logos/haagen_dazs.png" },
];

export function BrandExperienceSection() {
  return (
    <section id="brand-experience" className="relative py-16 md:py-20 lg:py-24">
      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between pb-6">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.4em] text-neutral-900 md:text-[14px]">
            Brand Experience
          </h2>
          <div className="flex gap-4 text-[10px] font-bold text-neutral-400">
            <span>+</span>
            <span>+</span>
          </div>
        </div>

        <div className="relative overflow-hidden py-16">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex shrink-0 items-center gap-12 px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-10">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="relative h-18 w-48 grayscale transition-all duration-500 hover:grayscale-0 md:h-20 md:w-60 lg:h-24 lg:w-72"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-12 px-6 md:gap-16 md:px-8 lg:gap-20 lg:px-10">
              {brands.map((brand, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="relative h-18 w-48 grayscale transition-all duration-500 hover:grayscale-0 md:h-20 md:w-60 lg:h-24 lg:w-72"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
