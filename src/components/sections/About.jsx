import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { about, brand } from "../../data/content";
import Reveal from "../ui/Reveal";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export default function About() {
  const reduced = usePrefersReducedMotion();
  const imageWrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : ["-6%", "6%"]);

  return (
    <section id={about.id} className="relative overflow-hidden bg-tis-cream px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-tis-teal-deep uppercase">
              {about.title}
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-5 flex items-end gap-4">
              <span className="font-display text-6xl font-extrabold leading-none text-tis-red md:text-7xl">
                {brand.established}
              </span>
              <span className="pb-2 text-sm tracking-[0.16em] text-tis-muted uppercase">
                Est. under
                <br />
                <span className="text-tis-ink">{brand.trust}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} variant="clipUp">
            <h2 className="mt-8 max-w-xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
              {about.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-tis-muted md:text-lg">
              {about.body}
            </p>
          </Reveal>

          <ul className="mt-10 space-y-4">
            {about.points.map((point, index) => (
              <Reveal key={point} delay={0.08 + index * 0.06}>
                <li className="border-l-2 border-tis-red pl-4 text-base text-tis-ink/85 md:text-lg">
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.28}>
            <p className="mt-10 text-xs tracking-[0.2em] text-tis-muted uppercase">
              {brand.curriculum} · Co-ed boarding & day · {brand.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} variant="scaleIn" className="relative">
          <div
            ref={imageWrapRef}
            className="relative aspect-[4/5] overflow-hidden bg-tis-cream-dark"
          >
            <motion.img
              src={about.image}
              alt={about.imageAlt}
              loading="lazy"
              style={{ y: imageY }}
              className="absolute inset-[-8%] h-[116%] w-full max-w-none object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-tis-ink/10 ring-inset" />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden bg-tis-red px-4 py-3 text-white md:block">
            <p className="font-display text-sm font-bold tracking-wide">TIS · Dehradun</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
