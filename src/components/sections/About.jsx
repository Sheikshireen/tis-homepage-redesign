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
  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : ["-5%", "5%"]);

  return (
    <section id={about.id} className="relative overflow-hidden bg-tis-cream px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal variant="fadeLeft">
            <p className="text-sm font-semibold tracking-[0.2em] text-tis-teal-deep uppercase">
              {about.title}
            </p>
          </Reveal>

          <Reveal delay={0.05} variant="clipUp">
            <div className="mt-5 flex items-end gap-4">
              <span className="font-display text-6xl font-extrabold leading-none text-tis-red md:text-7xl">
                {brand.established}
              </span>
              <span className="pb-1.5 text-sm tracking-[0.16em] text-tis-muted uppercase">
                Established
                <br />
                <span className="text-tis-fg">{brand.trust}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} variant="clipUp">
            <h2 className="mt-7 max-w-xl font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-[2.75rem]">
              {about.headline}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-tis-secondary md:text-lg">
              {about.body}
            </p>
          </Reveal>

          <ul className="mt-8 space-y-3.5">
            {about.points.map((point, index) => (
              <Reveal key={point} delay={0.08 + index * 0.05} variant="fadeLeft">
                <li className="border-l-2 border-tis-red pl-4 text-base text-tis-fg md:text-lg">
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.22}>
            <p className="mt-8 text-xs tracking-[0.2em] text-tis-muted uppercase">
              {brand.curriculum} · Co-ed boarding & day · {brand.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08} variant="scaleIn" className="relative">
          <div
            ref={imageWrapRef}
            className="relative aspect-[4/5] overflow-hidden bg-tis-cream-dark sm:aspect-[3/4]"
          >
            <motion.img
              src={about.image}
              alt={about.imageAlt}
              loading="eager"
              decoding="async"
              style={{ y: imageY }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-tis-border ring-inset" />
          </div>
          <div className="absolute -bottom-3 -left-3 hidden bg-tis-red px-4 py-2.5 text-tis-on-brand md:block">
            <p className="font-display text-sm font-bold tracking-wide">TIS · Dehradun</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
