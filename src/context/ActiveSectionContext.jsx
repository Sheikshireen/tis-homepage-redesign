
/* eslint-disable react-refresh/only-export-components -- provider + hook pair */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { TRACKED_SECTION_IDS } from "./activeSectionShared";

const ActiveSectionContext = createContext({
  activeId: "",
  activate: () => {},
});

function resolveFromScroll(ids) {
  if (!ids.length) return "";

  const spy = 104; // matches header offset used by scrollToSection
  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= docHeight - 80) {
    return ids[ids.length - 1];
  }

  const firstEl = document.getElementById(ids[0]);
  if (firstEl && firstEl.getBoundingClientRect().top > spy) {
    return "";
  }

  let current = ids[0];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top - spy <= 0) {
      current = id;
    }
  }
  return current;
}

export function ActiveSectionProvider({ children, sectionIds = TRACKED_SECTION_IDS }) {
  const [activeId, setActiveId] = useState("");
  const lockedRef = useRef(false);
  const unlockTimerRef = useRef(0);
  const idsKey = sectionIds.join("|");
  const ids = useMemo(() => idsKey.split("|").filter(Boolean), [idsKey]);

  useEffect(() => {
    const onScrollOrResize = () => {
      if (lockedRef.current) return;
      setActiveId(resolveFromScroll(ids));
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.clearTimeout(unlockTimerRef.current);
    };
  }, [ids]);

  const activate = useCallback(
    (id) => {
      lockedRef.current = true;
      setActiveId(id);
      window.clearTimeout(unlockTimerRef.current);
      unlockTimerRef.current = window.setTimeout(() => {
        lockedRef.current = false;
        setActiveId(resolveFromScroll(ids));
      }, 1200);
    },
    [ids],
  );

  const value = useMemo(() => ({ activeId, activate }), [activeId, activate]);

  return (
    <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  return useContext(ActiveSectionContext);
}
