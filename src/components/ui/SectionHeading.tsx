import type { ReactNode } from 'react';

interface Props {
  label: string;
  title: string;
  accent: string;
  children?: ReactNode;
  /** id for the <h2>, used by the section's aria-labelledby. */
  id: string;
}

export function SectionHeading({ label, title, accent, children, id }: Props) {
  return (
    <>
      <div className="section-label">{label}</div>
      <h2 className="section-title" id={id}>
        {title} <span className="accent">{accent}</span>
      </h2>
      {children && <p className="section-sub">{children}</p>}
    </>
  );
}
