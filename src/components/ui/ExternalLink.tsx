import type { AnchorHTMLAttributes } from 'react';

/** Opens in a new tab safely (no window.opener / referrer leakage). */
export function ExternalLink({ children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
