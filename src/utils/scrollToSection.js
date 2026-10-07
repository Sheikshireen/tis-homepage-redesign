const HEADER_OFFSET = 96;

/**
 * Smooth-scroll to a section by id. Used only on explicit navigation clicks.
 * Never call this from IntersectionObserver or passive scroll listeners.
 */
export function scrollToSection(id, { behavior = "smooth" } = {}) {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });

  if (history.replaceState) {
    history.replaceState(null, "", `#${id}`);
  }
}

export function getSectionIdFromHref(href) {
  if (!href || !href.startsWith("#")) return null;
  return href.slice(1);
}
