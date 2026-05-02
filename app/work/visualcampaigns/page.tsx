import { Navbar } from "../../../components/Navbar";

export default function VisualCampaignsPage() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar variant="workDetail" />
      <main className="flex-1">
        <section className="relative border-b border-neutral-300/50 pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24 lg:pt-12">
          <div className="container-custom relative px-4 md:px-6 lg:px-8">
            <div className="mb-10">
              <div className="flex items-start justify-between gap-8">
                <h1 className="text-[18px] font-bold uppercase tracking-[0.4em] text-neutral-900 md:text-[22px]">
                  Visual Campaigns
                </h1>
                <div className="pt-[2px] text-[10px] font-bold text-neutral-900">+</div>
              </div>
              <div className="relative mt-2 border-b border-neutral-300/70" />
            </div>

            <div className="w-full">
              <img
                src="/assets/VisualCampaigns/1.png"
                alt="Visual Campaigns"
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

