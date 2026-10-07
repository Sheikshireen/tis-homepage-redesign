import { useActiveSectionContext } from "../../context/ActiveSectionContext";
import { chapters } from "../../data/content";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { scrollToSection } from "../../utils/scrollToSection";

export default function ChapterNav() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const reduced = usePrefersReducedMotion();
  const { activeId, activate } = useActiveSectionContext();

  if (!isDesktop) return null;

  return (
    <nav
      aria-label="Page chapters"
      className="pointer-events-none fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-2.5">
        {chapters.map((chapter) => {
          const active = activeId === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                data-cursor="interactive"
                data-cursor-label="VIEW"
                aria-current={active ? "true" : undefined}
                aria-label={`${chapter.number} ${chapter.label}`}
                onClick={(event) => {
                  event.preventDefault();
                  activate(chapter.id);
                  scrollToSection(chapter.id, { behavior: reduced ? "auto" : "smooth" });
                }}
                className={`group flex items-center justify-end gap-3 transition ${
                  active ? "opacity-100" : "opacity-40 hover:opacity-80"
                }`}
              >
                <span
                  className={`text-right text-[10px] tracking-[0.18em] uppercase transition ${
                    active
                      ? "font-extrabold text-tis-red"
                      : "font-semibold text-tis-ink/65"
                  }`}
                >
                  <span className="mr-1.5 tabular-nums">{chapter.number}</span>
                  {chapter.label}
                </span>
                <span
                  className={`block transition-all duration-300 ${
                    active ? "h-[2px] w-9 bg-tis-red" : "h-px w-4 bg-tis-ink/30 group-hover:w-6"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
