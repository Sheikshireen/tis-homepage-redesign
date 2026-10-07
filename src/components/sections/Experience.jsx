import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { ctas, experience } from "../../data/content";
import Reveal from "../ui/Reveal";

export default function Experience() {
  return (
    <section id={experience.id} className="relative min-h-[78vh] overflow-hidden bg-tis-red text-white">
      <motion.img
        src={experience.image}
        alt={experience.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(100,1,24,0.86)_0%,rgba(28,28,28,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(96,186,177,0.18),transparent_42%)]" />

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-5 py-28 md:px-8 md:py-32">
        <Reveal variant="clipUp">
          <p className="text-sm font-semibold tracking-[0.2em] text-tis-teal uppercase">
            {experience.title}
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            {experience.headline}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">{experience.body}</p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <motion.a
            href={ctas.virtualTour.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            data-cursor-label="ENTER"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex min-h-[180px] flex-1 flex-col justify-between overflow-hidden border border-white/25 bg-white/10 p-7 backdrop-blur-sm transition hover:border-white/55 hover:bg-white/16 md:p-9"
          >
            <div className="absolute -right-4 -bottom-10 font-display text-8xl font-extrabold text-white/10 transition duration-500 group-hover:scale-110 group-hover:text-white/18">
              ENTER
            </div>
            <div>
              <p className="text-xs tracking-[0.22em] text-tis-teal uppercase">Portal</p>
              <p className="mt-3 font-display text-3xl font-bold md:text-4xl">
                {ctas.virtualTour.label}
              </p>
            </div>
            <div className="relative flex items-center justify-between">
              <span className="text-sm tracking-[0.18em] uppercase">Explore campus</span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-tis-red transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={20} aria-hidden="true" />
              </span>
            </div>
          </motion.a>

          <a
            href={ctas.brochure.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="interactive"
            data-cursor-label="VIEW"
            className="inline-flex min-h-[180px] w-full flex-col justify-between border border-white/20 px-6 py-7 transition hover:border-tis-teal hover:bg-white/8 sm:w-56"
          >
            <FileText size={22} aria-hidden="true" />
            <span>
              <span className="block font-display text-xl font-bold">{ctas.brochure.label}</span>
              <span className="mt-1 block text-xs tracking-[0.16em] text-white/65 uppercase">
                Download PDF
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
