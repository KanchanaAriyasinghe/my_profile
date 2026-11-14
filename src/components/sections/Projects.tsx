import { useMemo, useState } from 'react';
import { projects } from '../../data/projects';
import { useReveal } from '../../hooks/useInView';
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from '../../types';
import { ExternalLink } from '../ui/ExternalLink';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';

type Filter = 'All' | ProjectCategory;

const visibleProjects = projects.filter((p) => !p.hidden);
const countFor = (f: Filter) =>
  f === 'All' ? visibleProjects.length : visibleProjects.filter((p) => p.category === f).length;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, revealClass } = useReveal<HTMLElement>();
  // Avoid a duplicate link when "View project" already points at the repo.
  const showRepo = project.repo && project.repo !== project.link;

  return (
    <article
      ref={ref}
      className={`card card--interactive project-card ${revealClass}`}
      style={{ animationDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" decoding="async" />
        ) : null}
        <span className="badge">{project.ongoing ? 'In progress' : project.category}</span>
      </div>

      <div className="project-body">
        <span className="project-date">
          <Icon name="calendar" />
          <time>{project.date}</time>
        </span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <TagList tags={project.tags} />

        <div className="project-links">
          <ExternalLink href={project.link} className="link-btn">
            <Icon name={project.link === project.repo ? 'github' : 'external'} />
            {project.link === project.repo ? 'Source code' : 'View project'}
          </ExternalLink>
          {project.demo && (
            <ExternalLink href={project.demo} className="link-btn">
              <Icon name="globe" />
              Live demo
            </ExternalLink>
          )}
          {showRepo && (
            <ExternalLink href={project.repo} className="link-btn" aria-label={`Source code of ${project.title}`}>
              <Icon name="github" />
              Code
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  // Only offer categories that actually have projects.
  const filters = useMemo<Filter[]>(
    () => ['All', ...PROJECT_CATEGORIES.filter((c) => countFor(c) > 0)],
    [],
  );
  const shown = filter === 'All' ? visibleProjects : visibleProjects.filter((p) => p.category === filter);

  return (
    <section className="section section--muted" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" label="Portfolio" title="Selected" accent="projects">
          A mix of full-stack products, AI tools and IoT builds. Have something in mind?{' '}
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
              onClick={() => setFilter(f)}
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

        <div className="project-grid">
          {shown.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
