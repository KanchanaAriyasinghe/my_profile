import { skillGroups } from '../../data/skills';
import { useReveal } from '../../hooks/useInView';
import type { SkillGroup } from '../../types';
import { Icon } from '../ui/Icon';
import { headingId, type SectionProps } from '../../lib/section';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const { ref, revealClass } = useReveal<HTMLLIElement>();
  const titleId = `skill-${index}`;

  return (
    <li
      ref={ref}
      className={`card card--interactive skill-group ${revealClass}`}
      style={{ animationDelay: `${(index % 3) * 80}ms` }}
      aria-labelledby={titleId}
    >
      <div className="skill-group-head">
        <span className="icon-tile icon-tile--sm">
          <Icon name={group.icon} />
        </span>
        <h3 id={titleId}>{group.title}</h3>
        <span className="skill-count" aria-hidden="true">
          {String(group.items.length).padStart(2, '0')}
        </span>
      </div>
      <TagList tags={group.items} label={group.title} />
    </li>
  );
}

export function Skills({ id, muted }: SectionProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading id={headingId(id)} label="Toolkit" title="Technical" accent="skills">
        The languages, frameworks and tools I use to design, build, test and ship software.
      </SectionHeading>
      <ul className="skills-grid">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.title} group={group} index={i} />
        ))}
      </ul>
    </Section>
  );
}
