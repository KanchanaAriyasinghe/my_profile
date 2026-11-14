import { services } from '../../data/services';
import type { Service } from '../../types';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';

function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="service-card">
      <div className="service-icon-wrap">
        <Icon name={service.icon} strokeWidth={1.8} />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.description}</p>
      <TagList tags={service.tags} className="service-tags" />
    </li>
  );
}

export function Services() {
  const visible = services.filter((s) => !s.hidden);

  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" label="What I Do" title="My" accent="Services">
          End-to-end solutions across software development, machine learning, and intelligent systems.
        </SectionHeading>
        <ul className="services-grid">
          {visible.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
