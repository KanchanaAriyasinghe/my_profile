import { useEffect, useRef, useState } from 'react';

interface Options extends IntersectionObserverInit {
  /** Stop observing after the first time the element becomes visible. */
  once?: boolean;
}

/**
 * Tracks whether an element is in the viewport.
 * Falls back to "visible" when IntersectionObserver is unavailable so content is never hidden.
 */
export function useInView<T extends Element>({
  once = true,
  threshold = 0.05,
  rootMargin = '0px 0px -40px 0px',
  root = null,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin, root },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin, root]);

  return { ref, inView };
}

/** Convenience: className for the scroll-reveal animation. */
export function useReveal<T extends Element>() {
  const { ref, inView } = useInView<T>();
  return { ref, revealClass: inView ? 'reveal revealed' : 'reveal' };
}
