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

function ProjectCard({ project }: { project: Project }) {
  const { ref, revealClass } = useReveal<HTMLElement>();
  const externalUrl = project.demo ?? project.post;

  return (
    <article ref={ref} className={`project-card ${revealClass}${project.ongoing ? ' project-card--ongoing' : ''}`}>
      <div className="project-thumb">
        {project.image ? (
          <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" decoding="async" />
        ) : (
          <div className="project-thumb-icon">
            <Icon name="code" strokeWidth={1.5} />
          </div>
        )}
        {project.ongoing && (
          <div className="project-ongoing-badge">
            <span className="ongoing-pulse" />
            Ongoing
          </div>
        )}
        <div className="project-overlay">
          {externalUrl && (
            <ExternalLink
              href={externalUrl}
              className="overlay-btn"
              aria-label={`${project.demo ? 'Live demo' : 'Write-up'} of ${project.title}`}
            >
              <Icon name="external" />
            </ExternalLink>
          )}
          {project.repo && (
            <ExternalLink href={project.repo} className="overlay-btn" aria-label={`Source code of ${project.title}`}>
              <Icon name="github" />
            </ExternalLink>
          )}
        </div>
      </div>

      <div className="project-body">
        <TagList tags={project.tags} className="project-tags" />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-date">
          <Icon name="calendar" />
          <time>{project.date}</time>
        </div>
        <div className="project-buttons">
          <ExternalLink href={project.link} className="view-project-btn">
            View project <Icon name="arrow-right" className="btn-icon-sm" />
          </ExternalLink>
          {project.demo && (
            <ExternalLink href={project.demo} className="view-project-btn">
              Live Demo <Icon name="external" className="btn-icon-sm" />
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
    () => ['All', ...PROJECT_CATEGORIES.filter((c) => visibleProjects.some((p) => p.category === c))],
    [],
  );
  const shown = filter === 'All' ? visibleProjects : visibleProjects.filter((p) => p.category === filter);

  return (
    <section className="section bg-light" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" label="Portfolio" title="Recent" accent="Projects">
          Below you can see examples of my recent work.
          <br />
          Have a project you would like to discuss?{' '}
          <a href="#contact" className="inline-link">
            Let's make something great together!
          </a>
        </SectionHeading>

        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {filters.map((f) => {
            const count = f === 'All' ? visibleProjects.length : visibleProjects.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                type="button"
                className={`filter-btn${filter === f ? ' active' : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f} <span className="filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {shown.length} {filter === 'All' ? '' : filter} project{shown.length === 1 ? '' : 's'}
        </p>

        <div className="project-grid">
          {shown.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
