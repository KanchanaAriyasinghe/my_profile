import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
}

/**
 * True once the page is scrolled past `threshold` pixels.
 * Returns a boolean (not the raw scrollY) so components only re-render when it flips.
 */
export function useScrolledPast(threshold: number) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );
}
