import { services } from '../../data/services';
import { useReveal } from '../../hooks/useInView';
import type { Service } from '../../types';
import { Icon } from '../ui/Icon';
import { headingId, type SectionProps } from '../../lib/section';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, revealClass } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`card card--interactive service-card ${revealClass}`}
      style={{ animationDelay: `${(index % 3) * 80}ms` }}
    >
      <span className="icon-tile">
        <Icon name={service.icon} />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <TagList tags={service.tags} />
    </li>
  );
}

export function Services({ id, muted }: SectionProps) {
  const visible = services.filter((s) => !s.hidden);

  return (
    <Section id={id} muted={muted}>
      <SectionHeading id={headingId(id)} label="What I do" title="Services I" accent="offer">
        End-to-end delivery — from interface to infrastructure — across web development, quality engineering and machine
        learning.
      </SectionHeading>
      <ul className="services-grid">
        {visible.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </ul>
    </Section>
  );
}
