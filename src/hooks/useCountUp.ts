import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/** Animates from 0 to `target` (ease-out cubic) once `start` becomes true. */
export function useCountUp(target: number, start: boolean, { duration = 1800, delay = 0 } = {}) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || reducedMotion) return;

    let frame = 0;
    let startTime: number | null = null;
    const timeout = window.setTimeout(() => {
      const step = (now: number) => {
        startTime ??= now;
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [target, start, duration, delay, reducedMotion]);

  // With reduced motion, skip the animation and show the final number.
  return reducedMotion ? target : value;
}
