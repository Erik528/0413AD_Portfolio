import { Navbar } from "../../components/Navbar";

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col pb-24">
      <Navbar />
      <main className="flex-1">
        <section className="relative border-b border-neutral-300/50 py-16 md:py-20 lg:py-24">
          <div className="container-custom relative px-4 md:px-6 lg:px-8">
            <div className="mb-10 flex items-center justify-between">
              <h1 className="text-[18px] font-bold uppercase tracking-[0.4em] text-neutral-900 md:text-[22px]">
                Work
              </h1>
              <div className="flex gap-4 text-[10px] font-bold text-neutral-400">
                <span>+</span>
                <span>+</span>
              </div>
            </div>
            <p className="max-w-[60ch] text-[14px] leading-relaxed text-neutral-700">
              This page is the destination for your Featured Work click-through. Add work projects, case studies, or a
              grid here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
