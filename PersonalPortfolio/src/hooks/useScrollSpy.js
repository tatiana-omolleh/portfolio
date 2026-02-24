import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in view and returns its id.
 * @param {string[]} sectionIds - Array of section id attributes
 * @param {number} offset - Pixels from top to trigger (default 100)
 */
export default function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0.1,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}
