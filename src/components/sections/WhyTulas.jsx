import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { whyTulas } from "../../data/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

function QuoteBlock({ item, index }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : index % 2 === 0 ? ["-3%", "3%"] : ["3%", "-3%"],
  );
  const imageScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1.06, 1]);
  const reversed = index % 2 === 1;

  return (
    <article ref={ref} className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
      <div className={reversed ? "lg:order-2" : undefined}>
        <Reveal variant="clipUp">
          <p className="font-accent text-[1.85rem] leading-[1.15] text-tis-red italic sm:text-3xl md:text-4xl lg:text-[2.75rem]">
            “{item.quote}”
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-tis-muted md:text-lg">
            {item.body}
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={0.08}
        variant="scaleIn"
        className={reversed ? "lg:order-1" : undefined}
      >
        <div className="relative overflow-hidden bg-tis-cream">
          <motion.div style={{ x }} className="will-change-transform">
            <motion.img
              src={item.image}
              alt={item.imageAlt}
              loading="lazy"
              style={{ scale: imageScale }}
              className="mx-auto h-[320px] w-auto object-contain object-bottom sm:h-[380px] md:h-[440px]"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />
        </div>
      </Reveal>
    </article>
  );
}

export default function WhyTulas() {
  return (
    <section id={whyTulas.id} className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={whyTulas.title}
            title="A school that chooses you back"
            subtitle="Support, creativity, and belonging—spoken in the school’s own voice."
          />
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {whyTulas.items.map((item, index) => (
            <QuoteBlock key={item.quote} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
