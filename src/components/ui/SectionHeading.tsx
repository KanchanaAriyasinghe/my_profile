import type { ReactNode } from 'react';

interface Props {
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  id: string;
  label: string;
  title: string;
  /** Rendered with the brand gradient after `title`. */
  accent: string;
  children?: ReactNode;
}

export function SectionHeading({ id, label, title, accent, children }: Props) {
  return (
    <header className="section-head">
      <p className="eyebrow">{label}</p>
      <h2 className="section-title" id={id}>
        {title} <span className="text-gradient">{accent}</span>
      </h2>
      {children && <p className="section-desc">{children}</p>}
    </header>
  );
}
