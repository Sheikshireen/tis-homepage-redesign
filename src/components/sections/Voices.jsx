import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, visitors } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Voices() {
  const testimonialsRef = useRef(null);
  const visitorsRef = useRef(null);
  const [activeQuote, setActiveQuote] = useState(0);

  const scrollBy = (ref, direction) => {
    const node = ref.current;
    if (!node) return;
    const amount = Math.min(380, node.clientWidth * 0.85) * direction;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="voices" className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Voices & Visitors"
            title="From the parents — and guests who inspire the campus"
            subtitle="Real words from Tulas families, alongside influential personalities welcomed on campus."
          />
        </Reveal>

        <div className="mt-12 flex items-end justify-between gap-4 md:mt-14">
          <h3 className="font-display text-xl font-bold md:text-2xl">From The Parents</h3>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              data-cursor="interactive"
              onClick={() => scrollBy(testimonialsRef, -1)}
              className="rounded-full border border-tis-ink/15 p-2 transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              data-cursor="interactive"
              onClick={() => scrollBy(testimonialsRef, 1)}
              className="rounded-full border border-tis-ink/15 p-2 transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Reveal className="mt-6">
          <div
            ref={testimonialsRef}
            className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
            onScroll={(event) => {
              const node = event.currentTarget;
              const index = Math.round(node.scrollLeft / Math.max(node.clientWidth * 0.75, 1));
              setActiveQuote(Math.min(testimonials.length - 1, Math.max(0, index)));
            }}
          >
            {testimonials.map((item, index) => (
              <figure
                key={`${item.name}-${item.relation}`}
                className={`w-[min(88vw,420px)] shrink-0 snap-start border-l-2 bg-tis-cream p-6 transition md:p-8 ${
                  activeQuote === index ? "border-tis-red" : "border-tis-ink/15"
                }`}
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
        </Reveal>

        <div className="mt-16 flex items-end justify-between gap-4 md:mt-20">
          <h3 className="font-display text-xl font-bold md:text-2xl">{visitors.title}</h3>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous visitor"
              data-cursor="interactive"
              onClick={() => scrollBy(visitorsRef, -1)}
              className="rounded-full border border-tis-ink/15 p-2 transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next visitor"
              data-cursor="interactive"
              onClick={() => scrollBy(visitorsRef, 1)}
              className="rounded-full border border-tis-ink/15 p-2 transition hover:border-tis-red hover:text-tis-red"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Reveal className="mt-6">
          <div
            ref={visitorsRef}
            className="hide-scrollbar flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory"
          >
            {visitors.items.map((person) => (
              <article
                key={person.name}
                className="group w-[min(72vw,280px)] shrink-0 snap-start overflow-hidden bg-tis-cream sm:w-[300px]"
              >
                <div className="aspect-[4/5] overflow-hidden bg-tis-cream-dark">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg font-bold">{person.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-tis-muted">{person.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
