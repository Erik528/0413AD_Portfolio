"use client";

import { CokeBreakFadeInOnView } from "./CokeBreakFadeInOnView";

export function CokeBreakHeroIntroText() {
    return (
        <CokeBreakFadeInOnView className="mt-24 md:col-span-5 md:mt-40 md:-ml-6 md:self-start md:pt-6 lg:-ml-10 lg:mt-48">
            <div className="max-w-[560px] text-[16px] leading-[1.55] text-neutral-900 md:text-[18px]">
                <p>
                    At the end of 2022, my team and I were commissioned by Coca-Cola to lead the communication strategy for
                    their biggest annual marketing campaign in China—the 2023 summer campaign, codenamed Coke Break.
                </p>

                <p className="mt-6">
                    By mid-2023, we had developed a creative concept centered around a portal shaped like a Coca-Cola bottle,
                    visually conveying the idea of "open a Coke, feel refreshed." This concept was reinforced across multiple
                    channels, including TV commercials, print visuals, event marketing, and interactive online H5 experiences.
                </p>

                <p className="mt-6">
                    As a result, the campaign led to a remarkable 8% increase in sales during the summer—a significant
                    achievement for a mass-market product in an already saturated market.
                </p>
            </div>
        </CokeBreakFadeInOnView>
    );
}
