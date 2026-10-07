/**
 * @deprecated Prefer ActiveSectionProvider + useActiveSectionContext.
 * Kept as a thin local spy for any non-provider use.
 */
import { useEffect, useRef, useState } from "react";

const HEADER_OFFSET = 96;

export function useActiveSection(sectionIds, { spyOffset = HEADER_OFFSET + 8 } = {}) {
  const [activeId, setActiveId] = useState("");
  const lockedRef = useRef(false);
  const unlockTimerRef = useRef(0);
  const idsKey = sectionIds.join("|");

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);

    const resolveActive = () => {
      if (lockedRef.current) return;

      if (!ids.length) {
        setActiveId("");
        return;
      }

      const spy = spyOffset;
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 80) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      const firstEl = document.getElementById(ids[0]);
      if (firstEl && firstEl.getBoundingClientRect().top > spy) {
        setActiveId("");
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - spy <= 0) {
          current = id;
        }
      }
      setActiveId(current);
    };

    resolveActive();
    window.addEventListener("scroll", resolveActive, { passive: true });
    window.addEventListener("resize", resolveActive);

    return () => {
      window.removeEventListener("scroll", resolveActive);
      window.removeEventListener("resize", resolveActive);
      window.clearTimeout(unlockTimerRef.current);
    };
  }, [idsKey, spyOffset]);

  const activate = (id) => {
    lockedRef.current = true;
    setActiveId(id);
    window.clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = window.setTimeout(() => {
      lockedRef.current = false;
      const ids = idsKey.split("|").filter(Boolean);
      const spy = spyOffset;
      const firstEl = document.getElementById(ids[0]);
      if (firstEl && firstEl.getBoundingClientRect().top > spy) {
        setActiveId("");
        return;
      }
      let current = ids[0] || "";
      for (const sectionId of ids) {
        const el = document.getElementById(sectionId);
        if (!el) continue;
        if (el.getBoundingClientRect().top - spy <= 0) current = sectionId;
      }
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= docHeight - 80) current = ids[ids.length - 1] || current;
      setActiveId(current);
    }, 1200);
  };

  return { activeId, activate };
}
