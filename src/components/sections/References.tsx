import { references } from '../../data/contact';
import { useReveal } from '../../hooks/useInView';
import type { Reference } from '../../types';
import { ExternalLink } from '../ui/ExternalLink';
import { Icon } from '../ui/Icon';
import { headingId, type SectionProps } from '../../lib/section';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

const HONORIFIC = /^(dr|eng|mr|mrs|ms|prof)\.?$|^\(.*\)$/i;

/** "Dr. (Mrs.) J. Jananie" → "JJ" */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => !HONORIFIC.test(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function ReferenceCard({ person }: { person: Reference }) {
  const { ref, revealClass } = useReveal<HTMLElement>();

  return (
    <article ref={ref} className={`card card--interactive ref-card ${revealClass}`}>
      <div className="ref-head">
        <span className="avatar" aria-hidden="true">
          {initials(person.name)}
        </span>
        <div>
          <h3 className="ref-name">{person.name}</h3>
          <p className="ref-title">{person.title}</p>
        </div>
        <span className={`badge${person.type === 'academic' ? ' badge--accent' : ''}`}>
          {person.type === 'industry' ? 'Industry' : 'Academic'}
        </span>
      </div>

      <p className="ref-subtitle">{person.subtitle}</p>
      <p className="ref-org">
        <Icon name={person.type === 'industry' ? 'building' : 'graduation'} />
        {person.organisation}
      </p>

      <div className="ref-actions">
        <a href={`mailto:${person.email}`} className="btn btn-secondary btn-sm" title={person.email}>
          <Icon name="mail" />
          {person.email}
        </a>
        <ExternalLink href={person.linkedin} className="btn btn-secondary btn-sm">
          <Icon name="linkedin" />
          LinkedIn
        </ExternalLink>
      </div>
    </article>
  );
}

export function References({ id, muted }: SectionProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading id={headingId(id)} label="References" title="People who can" accent="vouch for me">
        Academic mentors and industry professionals who can speak to my technical skills, project work and work ethic.
      </SectionHeading>
      <div className="ref-grid">
        {references.map((r) => (
          <ReferenceCard key={r.email} person={r} />
        ))}
      </div>
    </Section>
  );
}
