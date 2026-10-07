import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { brand, ctas, hero } from "../../data/content";
import Button from "../ui/Button";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.42]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);

  const goAbout = (event) => {
    event.preventDefault();
    scrollToSection("about", { behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-tis-red text-tis-on-brand"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={hero.image}
          alt={hero.imageAlt}
          style={{ y: imageY }}
          className={`absolute inset-[-6%] h-[112%] w-[112%] max-w-none object-cover ${
            reduced ? "" : "ken-burns"
          }`}
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(110,1,26,0.88)_0%,rgba(185,1,36,0.62)_52%,rgba(28,28,28,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(96,186,177,0.22),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,18,18,0.5)_0%,transparent_52%)]" />
      {!reduced ? (
        <motion.div className="absolute inset-0 bg-tis-ink" style={{ opacity: overlayOpacity }} />
      ) : null}

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-28 md:px-8 md:pb-24 lg:pb-28"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[11px] font-semibold tracking-[0.24em] text-tis-teal uppercase sm:text-xs md:text-sm"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-5 font-display text-[2.5rem] leading-[0.95] font-extrabold tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem]">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: reduced ? 0 : 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {brand.taglineLead}
              </motion.span>
            </span>
            <span className="mt-1 block">
              <motion.span
                className="font-accent inline-block text-[1.08em] font-normal italic text-tis-teal"
                initial={reduced ? false : { opacity: 0, y: 28, rotate: -6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ delay: reduced ? 0 : 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {brand.taglineAccent}
              </motion.span>{" "}
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduced ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: reduced ? 0 : 0.42, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {brand.taglineEnd}
                </motion.span>
              </span>
            </span>
          </h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0 : 0.55, duration: 0.6 }}
            className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-tis-on-brand/90 sm:mt-6 sm:text-base md:text-lg"
          >
            {hero.supporting}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduced ? 0 : 0.65, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
          >
            <Button
              as="a"
              href={ctas.apply.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              size="lg"
              data-cursor-label="APPLY"
              className="shadow-[0_18px_40px_-18px_rgba(255,255,255,0.9)]"
            >
              {ctas.apply.label}
              <ArrowDownRight size={18} aria-hidden="true" />
            </Button>
            <Button
              as="a"
              href="#about"
              variant="outline"
              size="lg"
              data-cursor-label="EXPLORE"
              onClick={goAbout}
            >
              Explore Tulas
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <a
        href="#about"
        onClick={goAbout}
        data-cursor="interactive"
        data-cursor-label="SCROLL"
        className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-tis-on-brand/75 md:bottom-10"
        aria-label="Scroll to explore Tulas"
      >
        <span className="text-[10px] tracking-[0.22em] uppercase">Scroll to explore</span>
        <span className="scroll-cue-line inline-flex h-9 w-5 items-start justify-center rounded-full border border-tis-on-brand/40 pt-1.5">
          <ChevronDown size={12} aria-hidden="true" />
        </span>
      </a>
    </section>
  );
}
