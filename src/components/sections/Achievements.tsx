import { certifications, memberships } from '../../data/resume';
import { useReveal } from '../../hooks/useInView';
import { headingId, type SectionProps } from '../../lib/section';
import type { Achievement } from '../../types';
import { ExternalLink } from '../ui/ExternalLink';
import { Icon, type IconName } from '../ui/Icon';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

function AwardList({ icon, title, items }: { icon: IconName; title: string; items: Achievement[] }) {
  const { ref, revealClass } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`card list-card ${revealClass}`}>
      <h3>
        <span className="icon-tile icon-tile--sm">
          <Icon name={icon} />
        </span>
        {title}
      </h3>
      <ul className="award-list">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <ExternalLink href={item.href}>
                {item.label}
                <Icon name="external" />
              </ExternalLink>
            ) : (
              <span>{item.label}</span>
            )}
            <span className={`badge${item.pillVariant === 'green' ? ' badge--success' : ' badge--accent'}`}>
              {item.pill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Achievements({ id, muted }: SectionProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading id={headingId(id)} label="Recognition" title="Achievements &" accent="memberships">
        Certifications, competitions and professional communities I'm part of.
      </SectionHeading>
      <div className="awards-grid">
        <AwardList icon="cert" title="Certifications & competitions" items={certifications} />
        <AwardList icon="heart" title="Volunteering & memberships" items={memberships} />
      </div>
    </Section>
  );
}
