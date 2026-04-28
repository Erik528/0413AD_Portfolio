import Image from "next/image";

export function WorkCareerHistorySection() {
  const freelancerLogoWidths: Record<string, string> = {
    Crocs: "w-20",
    Columbia: "w-28",
  };

  const freelancerLogoSrc: Record<string, string> = {
    Crocs: "/assets/resume/CROCS.png",
    Columbia: "/assets/resume/Columbia.png",
  };

  const brandedTopLogoSrc: Record<string, string> = {
    Ogilvy: "/assets/resume/Ogilvy.png",
    "McCANN HEALTH": "/assets/resume/McCANN.png",
    "Publicis Communications": "/assets/resume/Publicis.png",
  };

  const brandedClientLogoSrc: Record<string, string> = {
    BYD: "/assets/resume/BYD.png",
    "Coca-Cola": "/assets/resume/Coke.png",
    KFC: "/assets/resume/KFC.png",
    LOREAL: "/assets/resume/LOREAL.png",
    Sprite: "/assets/resume/Sprite.png",
    GSK: "/assets/resume/gsk.png",
    Roche: "/assets/resume/Roche.png",
    "Häagen-Dazs": "/assets/resume/HaagenDazs.png",
    "Haagen-Dazs": "/assets/resume/HaagenDazs.png",
  };

  const careerHistory = [
    {
      timeframe: "Feb 2024 - Present",
      location: "Launceston, Australia",
      companyMark: null,
      topLogo: "Weber Shandwick",
      role: "Freelancer - Weber Shandwick",
      bullets: [
        "Completing a Master's degree in ICT while integrating AI and emerging technologies into a creative practice to enhance workflows and storytelling.",
        "Collaborating as a freelance creative on the CROSS project and other projects for Weber Shandwick, contributing to digital creative planning, visual development and campaign execution.",
        "Open to full-time opportunities where interdisciplinary strengths across design and technology are valued.",
      ],
      logos: ["Crocs", "Columbia"],
      variant: "freelancer",
    },
    {
      timeframe: "Oct 2021 - Jan 2024",
      location: "Shanghai, China",
      companyMark: "Ogilvy",
      variant: "branded",
      logoWidth: "w-24",
      role: "Senior Art Director - Ogilvy",
      bullets: [
        "Led creative strategy and end-to-end visual execution for Coca-Cola and Sprite campaigns across TV, OOH and digital channels.",
        "Directed the 'Sprite No Sugar, No Competition' relaunch: led a cross-functional team of 3 designers and 4 engineers, delivering +48% increase in volume share and +12.8% uplift in brand awareness (regional KPI).",
        "Led the art direction for the 2023 Coca-Cola Brand campaign, shaping creative strategy and execution across TV, OOH and social channels.",
        "Delivered a +65% uplift in national sales during the campaign month and achieved over 150 million total impressions across social platforms.",
        "Coached and mentored junior designers, establishing design review standards and increasing team delivery consistency.",
      ],
      logos: ["Coca-Cola", "Sprite"],
    },
    {
      timeframe: "Apr 2019 - Jul 2021",
      location: "Shanghai, China",
      companyMark: "McCANN HEALTH",
      variant: "branded",
      logoWidth: "w-32",
      role: "Art Director - McCann Health",
      bullets: [
        "Led end-to-end creative planning and execution for large-scale visual campaigns across healthcare and FMCG brands, covering brand strategy, key visual development and integrated asset production.",
        "Developed product communication visuals for Roche, translating complex medical information into clear, effective visual systems.",
        "Contributed to the award-winning GSK 'Truth of Life' campaign, which received the Grand Prix at the 2019 Cannes Lions International Festival of Creativity.",
        "Led the campaign for Intragen 2019, driving an 8% increase in winter season sales through campaign packaging and retail experience.",
      ],
      logos: ["GSK", "Roche", "Häagen-Dazs"],
    },
    {
      timeframe: "Mar 2017 - Mar 2019",
      location: "Shanghai, China",
      companyMark: "Publicis Communications",
      variant: "branded",
      logoWidth: "w-40",
      logoScale: "origin-right scale-[1.2]",
      role: "Graphic Designer - Publicis.Sapient",
      bullets: [
        "Delivered graphic design and digital creative support across social platforms, contributing to campaign planning and production of visual assets for multiple brands.",
        "Worked closely with clients including BYD, L'Oréal and KFC, providing consistent creative execution and long-term brand communication support.",
        "Led the creation of festive illustration content for BYD's official Weibo account (Apr 2017 - Jan 2018), driving an average 40% increase in engagement and supported a previous content performance.",
      ],
      logos: ["BYD", "LOREAL", "KFC"],
    },
  ] as const;

  return (
    <section className="relative border-b border-neutral-300/50 pt-14 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="absolute left-0 right-0 top-4 border-t border-neutral-300/50" />
      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        <div className="mb-10 text-[14px] font-bold uppercase tracking-[0.4em] text-neutral-900 md:text-[16px]">
          CAREER HISTORY
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.35fr_1.25fr_1fr_1fr] xl:gap-12">
          {careerHistory.map((entry) => (
            <div key={`${entry.timeframe}-${entry.role}`} className="flex h-full flex-col">
              {entry.variant === "freelancer" ? (
                <div className="flex items-start gap-4">
                  <div className="relative mt-[2px] h-11 w-24">
                    <Image
                      src="/assets/resume/WeberShandwick.png"
                      alt="Weber Shandwick"
                      fill
                      sizes="96px"
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-[2px] h-11 w-px bg-neutral-300/70" />
                  <div className="min-w-0 flex-1 max-w-[300px]">
                    <div className="flex items-baseline gap-4">
                      <div className="min-w-0 truncate text-[12px] font-bold text-neutral-900">{entry.timeframe}</div>
                      <div className="ml-auto shrink-0 whitespace-nowrap text-[12px] font-medium text-neutral-500">
                        {entry.location}
                      </div>
                    </div>
                    <div className="mt-2 break-words text-[15px] font-bold leading-[1.15] text-[#f12b1c] md:text-[16px]">
                      {entry.role}
                    </div>
                  </div>
                </div>
              ) : entry.variant === "branded" ? (
                <div className="flex items-start gap-4">
                  {entry.companyMark && brandedTopLogoSrc[entry.companyMark] ? (
                    <div className={`relative mt-[2px] h-11 ${entry.logoWidth ?? "w-20"}`}>
                      <Image
                        src={brandedTopLogoSrc[entry.companyMark]}
                        alt={entry.companyMark}
                        fill
                        sizes="160px"
                        className={`object-contain ${"logoScale" in entry ? entry.logoScale ?? "" : ""}`}
                      />
                    </div>
                  ) : (
                    <div
                      role="img"
                      aria-label={entry.companyMark ?? "Company logo"}
                      className={`mt-[2px] h-11 ${entry.logoWidth ?? "w-20"} border border-neutral-300/70 bg-neutral-200`}
                    />
                  )}
                  <div className="mt-[2px] h-11 w-px bg-neutral-300/70" />
                  <div className="min-w-0 flex-1 max-w-[300px]">
                    <div className="flex items-baseline gap-4">
                      <div className="min-w-0 truncate text-[12px] font-bold text-neutral-900">{entry.timeframe}</div>
                      <div className="ml-auto shrink-0 whitespace-nowrap text-[12px] font-medium text-neutral-500">
                        {entry.location}
                      </div>
                    </div>
                    <div className="mt-2 break-words text-[15px] font-bold leading-[1.15] text-[#f12b1c] md:text-[16px]">
                      {entry.role}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-900">
                    {entry.timeframe}
                  </div>
                  <div className="text-right text-[10px] font-bold text-neutral-500">{entry.location}</div>
                </div>
              )}

              {entry.variant === "branded" ? null : entry.companyMark ? (
                <div className="mt-3">
                  <div className="inline-flex items-center justify-center bg-neutral-200 px-3 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-neutral-900">
                    {entry.companyMark}
                  </div>
                </div>
              ) : null}

              {entry.variant === "freelancer" || entry.variant === "branded" ? null : (
                <div className="mt-3 text-[12px] font-bold text-[#f12b1c]">{entry.role}</div>
              )}

              <ul className="mt-4 space-y-4 text-[11px] leading-[1.6] text-neutral-700">
                {entry.bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#f12b1c]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className={
                  entry.variant === "freelancer"
                    ? "mt-6 flex items-center gap-4"
                    : "mt-6 flex flex-wrap items-center gap-3"
                }
              >
                {entry.logos.map((label) => (
                  <div
                    key={label}
                    className={
                      entry.variant === "freelancer"
                        ? `relative h-9 ${freelancerLogoWidths[label] ?? "w-24"}`
                        : "inline-flex h-8 items-center justify-center text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-700"
                    }
                  >
                    {entry.variant === "freelancer" ? (
                      <Image
                        src={freelancerLogoSrc[label] ?? ""}
                        alt={label}
                        fill
                        sizes="120px"
                        className="object-contain"
                      />
                    ) : entry.variant === "branded" && brandedClientLogoSrc[label] ? (
                      <Image
                        src={brandedClientLogoSrc[label]}
                        alt={label}
                        width={96}
                        height={32}
                        className="h-8 w-auto object-contain"
                      />
                    ) : (
                      label
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
