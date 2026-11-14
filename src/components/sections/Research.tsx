import { research } from '../../data/research';
import { useReveal } from '../../hooks/useInView';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import { TagList } from '../ui/TagList';
import { VideoPlayer } from './VideoPlayer';

export function Research() {
  const { ref, revealClass } = useReveal<HTMLElement>();

  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <div className="container">
        <SectionHeading id="research-title" label="Academic Work" title="My" accent="Research">
          Exploring machine learning and computer vision to solve real-world infrastructure problems.
        </SectionHeading>

        <article ref={ref} className={`research-card ${revealClass}`}>
          <div className="research-card-header">
            <span className="exp-badge exp-badge-past">{research.status}</span>
            <TagList tags={research.tech} className="research-tech-stack" />
          </div>
          <h3 className="research-title">{research.title}</h3>

          <ul className="r-stats">
            {research.stats.map((s) => (
              <li className="r-stat" key={s.label}>
                <span className="r-num">{s.value}</span>
                <span className="r-lbl">{s.label}</span>
              </li>
            ))}
          </ul>

          <div className="research-abstract">
            <h4>
              <Icon name="text" /> Abstract
            </h4>
            <p>{research.abstract}</p>
          </div>

          <div className="video-section">
            <h4 className="video-heading">
              <Icon name="play-circle" /> Demo Video
            </h4>
            <VideoPlayer src={research.video.src} title={`${research.title} — demo video`} />
            <p className="video-caption">{research.video.caption}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
