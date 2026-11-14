import { useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { projects } from '../../data/projects';
import { useReveal } from '../../hooks/useInView';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { headingId, type SectionProps } from '../../lib/section';
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from '../../types';
import { ExternalLink } from '../ui/ExternalLink';
import { Icon } from '../ui/Icon';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';

type Filter = 'All' | ProjectCategory;

const visibleProjects = projects.filter((p) => !p.hidden);
const countFor = (f: Filter) =>
  f === 'All' ? visibleProjects.length : visibleProjects.filter((p) => p.category === f).length;

const pad = (n: number) => String(n).padStart(2, '0');
const yearOf = (date: string) => date.match(/\d{4}/)?.[0] ?? '';

/** "https://www.github.com/user/repo/" → "github.com/user/repo" */
function displayUrl(url: string) {
  try {
    const u = new URL(url);
    return `${u.hostname.replace(/^www\./, '')}${u.pathname}`.replace(/\/$/, '');
  } catch {
    return url;
  }
}

/** Warm the browser cache so switching projects shows the screenshot instantly. */
const prefetched = new Set<string>();
function prefetchImage(src?: string) {
  if (!src || prefetched.has(src)) return;
  prefetched.add(src);
  const img = new Image();
  img.decoding = 'async';
  img.src = src;
}

/* ── Presentational pieces ─────────────────────────────────── */

function BrowserFrame({ project }: { project: Project }) {
  const url = project.demo ?? project.repo ?? project.link;
  return (
    <div className="browser">
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">
          <Icon name={project.demo ? 'globe' : project.repo ? 'github' : 'external'} />
          <span>{displayUrl(url)}</span>
        </span>
      </div>
      <div className="browser-view">
        {project.image ? (
          <img src={project.image} alt={`Screenshot of ${project.title}`} decoding="async" />
        ) : (
          <div className="browser-empty">
            <Icon name="code" />
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  const knownLinks = [project.demo, project.repo, project.post];
  return (
    <div className="pd-actions">
      {project.demo && (
        <ExternalLink href={project.demo} className="btn btn-primary btn-sm">
          Live demo <Icon name="external" />
        </ExternalLink>
      )}
      {project.repo && (
        <ExternalLink href={project.repo} className="btn btn-secondary btn-sm">
          <Icon name="github" /> Source code
        </ExternalLink>
      )}
      {project.post && (
        <ExternalLink href={project.post} className="btn btn-secondary btn-sm">
          <Icon name="linkedin" /> Write-up
        </ExternalLink>
      )}
      {!knownLinks.includes(project.link) && (
        <ExternalLink href={project.link} className="btn btn-secondary btn-sm">
          View project <Icon name="external" />
        </ExternalLink>
      )}
    </div>
  );
}

function ProjectDetail({ project, showTitle = true }: { project: Project; showTitle?: boolean }) {
  return (
    <div className="pd">
      <BrowserFrame project={project} />
      <div className="pd-body">
        <div className="pd-meta">
          <span className="badge badge--accent">{project.category}</span>
          {project.demo && (
            <span className="badge badge--success">
              <span className="live-dot" aria-hidden="true" />
              Live
            </span>
          )}
          {project.ongoing && <span className="badge">In progress</span>}
          <span className="pd-date">
            <Icon name="calendar" />
            <time>{project.date}</time>
          </span>
        </div>
        {showTitle && <h3 className="pd-title">{project.title}</h3>}
        <p className="pd-desc">{project.description}</p>
        <TagList tags={project.tags} label="Tech stack" />
        <ProjectActions project={project} />
      </div>
    </div>
  );
}

function ItemLabel({
  project,
  index,
  icon,
}: {
  project: Project;
  index: number;
  icon: 'arrow-right' | 'chevron-down';
}) {
  return (
    <>
      <span className="st-index">{pad(index + 1)}</span>
      <span className="st-text">
        <span className="st-title">{project.title}</span>
        <span className="st-meta">
          {project.category} · {yearOf(project.date)}
          {project.demo && ' · Live'}
        </span>
      </span>
      <Icon name={icon} className="st-arrow" />
    </>
  );
}

/* ── Desktop: vertical tabs (WAI-ARIA tabs pattern) ────────── */

interface ViewProps {
  items: Project[];
  selected: string | null;
  onSelect: (title: string | null) => void;
}

function ShowcaseTabs({ items, selected, onSelect }: ViewProps) {
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = Math.max(
    0,
    items.findIndex((p) => p.title === selected),
  );
  const active = items[activeIndex];
  const tabId = (i: number) => `${uid}-tab-${i}`;
  const panelId = `${uid}-panel`;

  const go = (i: number, focus = false) => {
    const next = (i + items.length) % items.length;
    onSelect(items[next].title);
    prefetchImage(items[(next + 1) % items.length]?.image);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const target = {
      ArrowDown: i + 1,
      ArrowRight: i + 1,
      ArrowUp: i - 1,
      ArrowLeft: i - 1,
      Home: 0,
      End: items.length - 1,
    }[e.key];
    if (target === undefined) return;
    e.preventDefault();
    go(target, true);
  };

  if (!active) return null;

  return (
    <div className="showcase">
      <div className="showcase-list" role="tablist" aria-orientation="vertical" aria-label="Projects">
        {items.map((p, i) => (
          <button
            key={p.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={tabId(i)}
            className="showcase-tab"
            aria-selected={i === activeIndex}
            aria-controls={panelId}
            tabIndex={i === activeIndex ? 0 : -1}
            onClick={() => go(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            onMouseEnter={() => prefetchImage(p.image)}
            onFocus={() => prefetchImage(p.image)}
          >
            <ItemLabel project={p} index={i} icon="arrow-right" />
          </button>
        ))}
      </div>

      <div className="card showcase-panel" role="tabpanel" id={panelId} aria-labelledby={tabId(activeIndex)}>
        {/* key → remount so the enter animation replays on every switch */}
        <ProjectDetail key={active.title} project={active} />
        <div className="pd-nav">
          <span className="pd-counter">
            {pad(activeIndex + 1)} / {pad(items.length)}
          </span>
          <div className="pd-nav-buttons">
            <button
              type="button"
              className="icon-btn"
              onClick={() => go(activeIndex - 1)}
              aria-label="Previous project"
            >
              <Icon name="arrow-left" />
            </button>
            <button type="button" className="icon-btn" onClick={() => go(activeIndex + 1)} aria-label="Next project">
              <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mobile: accordion (disclosure pattern) ────────────────── */

function ShowcaseAccordion({ items, selected, onSelect }: ViewProps) {
  const uid = useId();

  return (
    <ul className="project-accordion">
      {items.map((p, i) => {
        const open = p.title === selected;
        const btnId = `${uid}-btn-${i}`;
        const regionId = `${uid}-region-${i}`;
        return (
          <li key={p.title} className={`acc-item${open ? ' is-open' : ''}`}>
            <h3>
              <button
                type="button"
                id={btnId}
                className="showcase-tab"
                aria-expanded={open}
                aria-controls={regionId}
                onClick={() => onSelect(open ? null : p.title)}
              >
                <ItemLabel project={p} index={i} icon="chevron-down" />
              </button>
            </h3>
            <div
              id={regionId}
              role="region"
              aria-labelledby={btnId}
              className={`collapse${open ? ' is-open' : ''}`}
              inert={!open}
            >
              <div>{open && <ProjectDetail project={p} showTitle={false} />}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Section ───────────────────────────────────────────────── */

export function Projects({ id, muted }: SectionProps) {
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<string | null>(visibleProjects[0]?.title ?? null);
  const isDesktop = useMediaQuery('(min-width: 901px)', true);
  const { ref, revealClass } = useReveal<HTMLDivElement>();

  // Only offer categories that actually have projects.
  const filters = useMemo<Filter[]>(() => ['All', ...PROJECT_CATEGORIES.filter((c) => countFor(c) > 0)], []);
  const shown = filter === 'All' ? visibleProjects : visibleProjects.filter((p) => p.category === filter);

  const applyFilter = (f: Filter) => {
    setFilter(f);
    const first = (f === 'All' ? visibleProjects : visibleProjects.filter((p) => p.category === f))[0];
    setSelected(first?.title ?? null);
  };

  const View = isDesktop ? ShowcaseTabs : ShowcaseAccordion;

  return (
    <Section id={id} muted={muted}>
      <SectionHeading id={headingId(id)} label="Portfolio" title="Selected" accent="projects">
        Full-stack products, AI tools and IoT builds — pick one to explore. Have something in mind?{' '}
        <a href="#contact" className="text-link">
          Let's build it together.
        </a>
      </SectionHeading>

      <div className="segmented" role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`segmented-btn${filter === f ? ' is-active' : ''}`}
            aria-pressed={filter === f}
            onClick={() => applyFilter(f)}
          >
            {f}
            <span className="segmented-count">{countFor(f)}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} project{shown.length === 1 ? '' : 's'}
        {filter === 'All' ? '' : ` in ${filter}`}
      </p>

      <div ref={ref} className={revealClass}>
        <View items={shown} selected={selected} onSelect={setSelected} />
      </div>
    </Section>
  );
}
