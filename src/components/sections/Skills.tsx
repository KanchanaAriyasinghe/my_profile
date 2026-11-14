import { SHOW_SKILL_PERCENT, skillColumns } from '../../data/skills';
import { useInView } from '../../hooks/useInView';
import type { Skill } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';

function SkillBar({ skill }: { skill: Skill }) {
  const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.3 });

  return (
    <li ref={ref} className={`skill-bar-item reveal${inView ? ' revealed' : ''}`}>
      <div className="skill-bar-header">
        <span className="skill-bar-name" id={`skill-${skill.name}`}>
          {skill.name}
        </span>
        {SHOW_SKILL_PERCENT && <span className="skill-bar-pct">{skill.level}%</span>}
      </div>
      <div
        className="skill-bar-track"
        role="progressbar"
        aria-labelledby={`skill-${skill.name}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
      >
        <div className="skill-bar-fill" style={{ width: inView ? `${skill.level}%` : 0 }} />
      </div>
    </li>
  );
}

export function Skills() {
  return (
    <section className="section bg-light" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" label="About Me" title="Technical" accent="Skills">
          Technologies I work with daily to build robust, scalable applications.
        </SectionHeading>
        <div className="skillbars-wrapper">
          {skillColumns.map((column, i) => (
            <ul className="skillbars-col" key={i}>
              {column.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
