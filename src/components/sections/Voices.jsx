import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Voices() {
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({
      left: Math.min(420, node.clientWidth * 0.85) * direction,
      behavior: "smooth",
    });
  };

  return (
    <section id="voices" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Voices"
              title="From The Parents"
              subtitle="Real words from Tulas families — swipe to explore."
            />
          </Reveal>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              data-cursor="interactive"
              data-cursor-label="VIEW"
              onClick={() => scrollBy(-1)}
              className="rounded-full border border-tis-ink/15 p-2.5 transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              data-cursor="interactive"
              data-cursor-label="VIEW"
              onClick={() => scrollBy(1)}
              className="rounded-full border border-tis-ink/15 p-2.5 transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Reveal className="mt-10">
          <div
            ref={trackRef}
            className="hide-scrollbar flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory"
            data-cursor="interactive"
            data-cursor-label="DRAG"
          >
            {testimonials.map((item) => (
              <figure
                key={`${item.name}-${item.relation}`}
                className="w-[min(88vw,440px)] shrink-0 snap-start border-l-2 border-tis-red bg-tis-cream p-6 md:p-8"
              >
                <blockquote className="font-accent text-xl leading-snug text-tis-ink italic md:text-2xl">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-display font-bold">{item.name}</p>
                  <p className="text-sm text-tis-muted">{item.relation}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs tracking-[0.16em] text-tis-muted uppercase">
            Swipe or use arrows · {testimonials.length} voices
          </p>
        </Reveal>
      </div>
    </section>
  );
}
