import type { ReactNode } from 'react';
import { headingId, type SectionProps } from '../../lib/section';

export function Section({ id, muted, children }: SectionProps & { children: ReactNode }) {
  return (
    <section id={id} className={`section${muted ? ' section--muted' : ''}`} aria-labelledby={headingId(id)}>
      <div className="container">{children}</div>
    </section>
  );
}
