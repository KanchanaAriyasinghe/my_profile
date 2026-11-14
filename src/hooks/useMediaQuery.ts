import { useCallback, useSyncExternalStore } from 'react';

/** Subscribes to a CSS media query and re-renders when it starts/stops matching. */
export function useMediaQuery(query: string, serverFallback = false) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', callback);
      return () => mql.removeEventListener('change', callback);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverFallback,
  );
}
