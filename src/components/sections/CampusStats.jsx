import { motion, useScroll, useTransform } from "framer-motion";
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
    const duration = 1100;
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
    <span className="font-display text-4xl font-extrabold tracking-tight text-tis-red sm:text-5xl lg:text-6xl">
      {display}
      <span className="text-[0.68em]">{suffix}</span>
    </span>
  );
}

function StatItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <Reveal delay={index * 0.06} variant="fadeUp">
      <article ref={ref} className="flex flex-col border-t border-tis-ink/10 pt-6">
        <div className="mb-4 flex h-10 w-10 items-center justify-center">
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="max-h-9 max-w-9 object-contain"
          />
        </div>
        <StatValue value={item.value} suffix={item.suffix} active={inView} />
        <p className="mt-2 max-w-[14ch] text-xs font-medium tracking-[0.14em] text-tis-muted uppercase md:text-sm">
          {item.label}
        </p>
      </article>
    </Reveal>
  );
}

export default function CampusStats() {
  const reduced = usePrefersReducedMotion();
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : ["-6%", "6%"]);

  return (
    <section
      id={campusStats.id}
      className="relative overflow-hidden bg-tis-cream px-5 py-28 md:px-8 md:py-36"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal variant="clipUp">
          <p className="text-sm font-semibold tracking-[0.2em] text-tis-teal-deep uppercase">
            {campusStats.title}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            {campusStats.headline}
          </h2>
          <p className="mt-4 max-w-xl text-base text-tis-muted md:text-lg">
            {campusStats.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1} variant="scaleIn" className="mt-12 md:mt-16">
          <div
            ref={imageRef}
            className="relative aspect-[16/9] overflow-hidden bg-tis-cream-dark sm:aspect-[21/9]"
          >
            <motion.img
              src={campusStats.featuredImage}
              alt={campusStats.featuredImageAlt}
              loading="lazy"
              style={{ y: imageY }}
              className="absolute inset-[-8%] h-[116%] w-full max-w-none object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(28,28,28,0.28)_0%,transparent_45%)]" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-tis-ink/10 ring-inset" />
            <p className="absolute bottom-4 left-4 font-display text-sm font-bold tracking-wide text-white md:bottom-6 md:left-6 md:text-base">
              TIS · 22 acres · Dehradun
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-5 lg:gap-6">
          {campusStats.items.map((item, index) => (
            <StatItem key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
