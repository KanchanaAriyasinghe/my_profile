import { certifications, education, experience, memberships } from '../../data/resume';
import { useReveal } from '../../hooks/useInView';
import type { Achievement, TimelineEntry } from '../../types';
import { ExternalLink } from '../ui/ExternalLink';
import { Icon, type IconName } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';

function TimelineCard({ entry, first }: { entry: TimelineEntry; first: boolean }) {
  const { ref, revealClass } = useReveal<HTMLLIElement>();
  const current = entry.status === 'current';

  return (
    <li ref={ref} className={`exp-card ${revealClass}`}>
      <div className={`exp-dot${first ? '' : ' exp-dot-past'}`} aria-hidden="true" />
      <div className="exp-content">
        <div className="exp-top">
          <div>
            <h4 className="exp-role">{entry.title}</h4>
            <p className="exp-company">
              <Icon name={entry.icon} className="inline-svg" />
              {entry.organisation}
            </p>
          </div>
          <div className="exp-right">
            <span className={`exp-badge${current ? '' : ' exp-badge-past'}`}>
              {current && <span className="live-dot" />}
              {current ? 'Current' : 'Completed'}
            </span>
            <span className="exp-date">{entry.period}</span>
          </div>
        </div>
        <hr className="exp-divider" />
        <div className="exp-desc">
          <p>{entry.description}</p>
        </div>
        <TagList tags={entry.tags} className="exp-tags" label="Highlights" />
      </div>
    </li>
  );
}

function SubHeading({ icon, title, desc, work }: { icon: IconName; title: string; desc: string; work?: boolean }) {
  return (
    <div className="resume-sub-heading">
      <div className={`resume-sub-icon${work ? ' resume-sub-icon--work' : ''}`}>
        <Icon name={icon} />
      </div>
      <div className="resume-sub-text">
        <h3 className="resume-sub-title">{title}</h3>
        <p className="resume-sub-desc">{desc}</p>
      </div>
      <div className="resume-sub-line" />
    </div>
  );
}

function AchievementBlock({ icon, title, items }: { icon: IconName; title: string; items: Achievement[] }) {
  const { ref, revealClass } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`info-block ${revealClass}`}>
      <h4 className="info-label">
        <Icon name={icon} />
        {title}
      </h4>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? <ExternalLink href={item.href}>{item.label}</ExternalLink> : item.label}
            <span className={`pill${item.pillVariant === 'green' ? ' pill-green' : ''}`}>{item.pill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Resume() {
  return (
    <section className="section" id="resume" aria-labelledby="resume-title">
      <div className="container">
        <SectionHeading id="resume-title" label="My Journey" title="Resume &" accent="Experience">
          A timeline of my education and professional growth.
        </SectionHeading>

        <SubHeading icon="graduation" title="Education" desc="My academic background and qualifications" />
        <ol className="exp-timeline">
          {education.map((e, i) => (
            <TimelineCard key={e.title} entry={e} first={i === 0} />
          ))}
        </ol>

        <SubHeading icon="building" title="Work Experience" desc="My professional journey and internships" work />
        <ol className="exp-timeline">
          {experience.map((e, i) => (
            <TimelineCard key={e.title} entry={e} first={i === 0} />
          ))}
        </ol>

        <div className="resume-block-heading">
          <div className="resume-block-line" />
          <h3 className="resume-block-label">
            <Icon name="cert" />
            Achievements &amp; Memberships
          </h3>
          <div className="resume-block-line" />
        </div>

        <div className="two-col-grid">
          <AchievementBlock icon="cert" title="Courses & Certifications" items={certifications} />
          <AchievementBlock icon="heart" title="Volunteering & Memberships" items={memberships} />
        </div>
      </div>
    </section>
  );
}
