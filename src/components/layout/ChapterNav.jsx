import { useEffect, useState } from "react";
import { chapters } from "../../data/content";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function ChapterNav() {
  const [activeId, setActiveId] = useState(chapters[0]?.id || "");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    const elements = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.12, 0.35, 0.55] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
                className={`group flex items-center justify-end gap-3 transition ${
                  active ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
              >
                <span
                  className={`text-right text-[10px] font-semibold tracking-[0.18em] uppercase transition ${
                    active ? "text-tis-red" : "text-tis-ink/70"
                  }`}
                >
                  <span className="mr-1.5 tabular-nums">{chapter.number}</span>
                  {chapter.label}
                </span>
                <span
                  className={`block h-px transition-all duration-300 ${
                    active ? "w-8 bg-tis-red" : "w-4 bg-tis-ink/30 group-hover:w-6"
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
