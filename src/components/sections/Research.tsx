import { research } from '../../data/research';
import { useReveal } from '../../hooks/useInView';
import { headingId, type SectionProps } from '../../lib/section';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';
import { VideoPlayer } from './VideoPlayer';

export function Research({ id, muted }: SectionProps) {
  const { ref, revealClass } = useReveal<HTMLElement>();

  return (
    <Section id={id} muted={muted}>
      <SectionHeading id={headingId(id)} label="Research" title="Academic" accent="work">
        Applying machine learning and computer vision to real-world infrastructure problems.
      </SectionHeading>

      <article ref={ref} className={`card research-card ${revealClass}`}>
        <div>
          <div className="research-badges">
            <span className="badge badge--accent">Final-year research</span>
            <span className="badge">{research.status}</span>
          </div>
          <h3 className="research-title">{research.title}</h3>
          <p className="research-abstract">{research.abstract}</p>

          <ul className="r-stats">
            {research.stats.map((s) => (
              <li className="r-stat" key={s.label}>
                <span className="r-num">{s.value}</span>
                <span className="r-lbl">{s.label}</span>
              </li>
            ))}
          </ul>

          <TagList tags={research.tech} />
        </div>

        <div className="research-media">
          <VideoPlayer src={research.video.src} title={`${research.title} — demo video`} />
          <p className="video-caption">{research.video.caption}</p>
        </div>
      </article>
    </Section>
  );
}
