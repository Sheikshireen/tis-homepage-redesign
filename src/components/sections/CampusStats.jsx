import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { campusStats } from "../../data/content";
import Reveal from "../ui/Reveal";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

function StatValue({ value, suffix, active }) {
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    if (reduced) {
      const frame = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduced, value]);

  return (
    <span className="font-display text-5xl font-extrabold tracking-tight text-tis-red sm:text-6xl lg:text-7xl">
      {display}
      <span className="text-[0.72em]">{suffix}</span>
    </span>
  );
}

function StatItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <Reveal delay={index * 0.08} variant="clipUp">
      <article
        ref={ref}
        className="group relative flex h-full flex-col border-t border-tis-ink/12 pt-7"
      >
        <div className="mb-6 overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            className="h-36 w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-44"
          />
        </div>
        <StatValue value={item.value} suffix={item.suffix} active={inView} />
        <p className="mt-3 max-w-[14ch] text-sm font-medium tracking-[0.14em] text-tis-muted uppercase md:text-[0.95rem]">
          {item.label}
        </p>
      </article>
    </Reveal>
  );
}

export default function CampusStats() {
  return (
    <section
      id={campusStats.id}
      className="relative overflow-hidden bg-tis-cream px-5 py-24 md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute top-16 right-0 font-display text-[18vw] leading-none font-extrabold text-tis-red/[0.04] select-none">
        TIS
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-tis-teal-deep uppercase">
            {campusStats.title}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            Built for learning, sport, and care
          </h2>
          <p className="mt-4 max-w-xl text-base text-tis-muted md:text-lg">
            {campusStats.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {campusStats.items.map((item, index) => (
            <StatItem key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
