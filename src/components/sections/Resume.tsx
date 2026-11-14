import { useId, useState } from 'react';
import { education, experience } from '../../data/resume';
import { useReveal } from '../../hooks/useInView';
import { formatPeriod } from '../../lib/dates';
import type { TimelineEntry } from '../../types';
import { Icon, type IconName } from '../ui/Icon';
import { headingId, type SectionProps } from '../../lib/section';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';

const visible = (entries: TimelineEntry[]) => entries.filter((e) => !e.hidden);

function StatusBadge({ current }: { current: boolean }) {
  return current ? (
    <span className="badge badge--success">
      <span className="live-dot" aria-hidden="true" />
      Current
    </span>
  ) : (
    <span className="badge">Completed</span>
  );
}

function ExperienceItem({ entry, defaultOpen }: { entry: TimelineEntry; defaultOpen: boolean }) {
  const { ref, revealClass } = useReveal<HTMLLIElement>();
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const current = !entry.end;

  return (
    <li ref={ref} className={`timeline-item${current ? ' is-current' : ''} ${revealClass}`}>
      <span className="timeline-marker" aria-hidden="true" />
      <article className="card timeline-card">
        <div className="tl-head">
          <div>
            <h4 className="tl-role">{entry.title}</h4>
            <p className="tl-org">
              <Icon name={entry.icon} />
              {entry.organisation}
            </p>
          </div>
          <div className="tl-meta">
            <StatusBadge current={current} />
            <span className="tl-period">{formatPeriod(entry.start, entry.end, entry.showDuration)}</span>
          </div>
        </div>

        <p className="tl-desc">{entry.description}</p>

        {entry.highlights && entry.highlights.length > 0 && (
          <>
            <button
              type="button"
              className="tl-toggle"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? 'Hide' : 'Show'} key responsibilities ({entry.highlights.length})
              <Icon name="chevron-down" />
            </button>
            <div id={panelId} className={`collapse${open ? ' is-open' : ''}`} inert={!open}>
              <div>
                <ul className="tl-highlights">
                  {entry.highlights.map((h) => (
                    <li key={h.label}>
                      <strong>{h.label}:</strong> {h.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        <TagList tags={entry.tags} label="Technologies used" />
      </article>
    </li>
  );
}

function EducationCard({ entry }: { entry: TimelineEntry }) {
  const { ref, revealClass } = useReveal<HTMLElement>();
  return (
    <article ref={ref} className={`card edu-card ${revealClass}`}>
      <div className="edu-top">
        <span className="icon-tile">
          <Icon name={entry.icon} />
        </span>
        <span className="tl-period">{formatPeriod(entry.start, entry.end)}</span>
      </div>
      <h4 className="tl-role">{entry.title}</h4>
      <p className="tl-org">{entry.organisation}</p>
      {entry.note && <p className="tl-note">{entry.note}</p>}
      <p className="tl-desc">{entry.description}</p>
      <TagList tags={entry.tags} label="Highlights" />
    </article>
  );
}

function BlockTitle({ icon, children }: { icon: IconName; children: string }) {
  return (
    <h3 className="block-title">
      <span className="icon-tile icon-tile--sm">
        <Icon name={icon} />
      </span>
      {children}
    </h3>
  );
}

export function Resume({ id, muted }: SectionProps) {
  const jobs = visible(experience);

  return (
    <Section id={id} muted={muted}>
      <SectionHeading id={headingId(id)} label="Journey" title="Experience &" accent="education">
        Where I've worked, what I've studied, and what I've achieved along the way.
      </SectionHeading>

      <div className="resume-block">
        <BlockTitle icon="building">Work experience</BlockTitle>
        <ol className="timeline">
          {jobs.map((e, i) => (
            <ExperienceItem key={`${e.organisation}-${e.title}`} entry={e} defaultOpen={i === 0} />
          ))}
        </ol>
      </div>

      <div className="resume-block">
        <BlockTitle icon="graduation">Education</BlockTitle>
        <div className="edu-grid">
          {visible(education).map((e) => (
            <EducationCard key={e.title} entry={e} />
          ))}
        </div>
      </div>
    </Section>
  );
}
