import { references } from '../../data/contact';
import { useReveal } from '../../hooks/useInView';
import type { Reference } from '../../types';
import { ExternalLink } from '../ui/ExternalLink';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

function ReferenceCard({ person }: { person: Reference }) {
  const { ref, revealClass } = useReveal<HTMLElement>();
  const typeLabel = person.type === 'industry' ? 'Industry' : 'Academic';

  return (
    <article ref={ref} className={`ref-card ${revealClass}`}>
      <div className="ref-card-top">
        <div className={`ref-avatar ref-avatar--${person.type}`}>
          <Icon name="user" strokeWidth={1.5} />
        </div>
        <div className="ref-badge-wrap">
          <span className={`ref-type-badge ref-type-${person.type}`}>{typeLabel}</span>
        </div>
      </div>
      <div className="ref-card-body">
        <h3 className="ref-name">{person.name}</h3>
        <p className="ref-title">{person.title}</p>
        <p className="ref-subtitle">{person.subtitle}</p>
        <div className="ref-divider" />
        <div className="ref-org">
          <div className="ref-org-icon">
            <Icon name={person.type === 'industry' ? 'building' : 'graduation'} />
          </div>
          <span>{person.organisation}</span>
        </div>
        <div className="ref-contacts">
          <a href={`mailto:${person.email}`} className="ref-contact-link">
            <Icon name="mail" />
            {person.email}
          </a>
          <ExternalLink href={person.linkedin} className="ref-contact-link ref-contact-link--linkedin">
            <Icon name="linkedin" />
            LinkedIn Profile
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}

export function References() {
  return (
    <section className="section bg-light" id="references" aria-labelledby="references-title">
      <div className="container">
        <SectionHeading
          id="references-title"
          label="Professional References"
          title="Trusted Academic"
          accent="& Industry References"
        >
          References from academic mentors and industry professionals who can verify my technical skills, project
          experience, and professional work ethic.
        </SectionHeading>
        <div className="ref-grid">
          {references.map((r) => (
            <ReferenceCard key={r.email} person={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
