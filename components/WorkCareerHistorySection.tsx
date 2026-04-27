export function WorkCareerHistorySection() {
  const careerHistory = [
    {
      timeframe: "Feb 2024 - Present",
      location: "Launceston, Australia",
      companyMark: null,
      role: "Freelancer",
      bullets: [
        "Completing a Master's degree in ICT while integrating AI and emerging technologies into a creative practice to enhance workflows and storytelling.",
        "Collaborating as a freelance creative on the CROSS project and other projects for Weber Shandwick, contributing to digital creative planning, visual development and campaign execution.",
        "Open to full-time opportunities where interdisciplinary strengths across design and technology are valued.",
      ],
      logos: ["Weber Shandwick", "CROSS"],
    },
    {
      timeframe: "Oct 2021 - Jan 2024",
      location: "Shanghai, China",
      companyMark: "Ogilvy",
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
      role: "Art Director - McCann Health",
      bullets: [
        "Led end-to-end creative planning and execution for large-scale visual campaigns across healthcare and FMCG brands, covering brand strategy, key visual development and integrated asset production.",
        "Developed product communication visuals for Roche, translating complex medical information into clear, effective visual systems.",
        "Contributed to the award-winning GSK 'Truth of Life' campaign, which received the Grand Prix at the 2019 Cannes Lions International Festival of Creativity.",
        "Led the campaign for Intragen 2019, driving an 8% increase in winter season sales through campaign packaging and retail experience.",
      ],
      logos: ["GSK", "Roche", "Intragen"],
    },
    {
      timeframe: "Mar 2017 - Mar 2019",
      location: "Shanghai, China",
      companyMark: null,
      role: "Graphic Designer - Publicis.Sapient",
      bullets: [
        "Delivered graphic design and digital creative support across social platforms, contributing to campaign planning and production of visual assets for multiple brands.",
        "Worked closely with clients including BYD, L'Oréal and KFC, providing consistent creative execution and long-term brand communication support.",
        "Led the creation of festive illustration content for BYD's official Weibo account (Apr 2017 - Jan 2018), driving an average 40% increase in engagement and supported a previous content performance.",
      ],
      logos: ["BYD", "L'ORÉAL", "KFC"],
    },
  ] as const;

  return (
    <section className="relative pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {careerHistory.map((entry) => (
            <div key={`${entry.timeframe}-${entry.role}`} className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-900">
                  {entry.timeframe}
                </div>
                <div className="text-right text-[10px] font-bold text-neutral-500">{entry.location}</div>
              </div>

              {entry.companyMark ? (
                <div className="mt-3">
                  <div className="inline-flex items-center justify-center bg-neutral-200 px-3 py-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-neutral-900">
                    {entry.companyMark}
                  </div>
                </div>
              ) : null}

              <div className="mt-3 text-[12px] font-bold text-[#d23a3a]">{entry.role}</div>

              <ul className="mt-4 list-disc space-y-2 pl-4 text-[11px] leading-[1.55] text-neutral-700">
                {entry.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {entry.logos.map((label) => (
                  <div
                    key={label}
                    className="inline-flex h-8 items-center justify-center border border-neutral-300/70 bg-neutral-200/70 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-700"
                  >
                    {label}
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
