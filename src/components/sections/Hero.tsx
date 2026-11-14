import { profile } from '../../data/profile';
import { ExternalLink } from '../ui/ExternalLink';
import { Icon } from '../ui/Icon';
import { SocialLinks } from '../ui/SocialLinks';

export function Hero() {
  const { headline } = profile;

  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <div className="container hero-grid">
        <div>
          {profile.openToWork && (
            <p className="status-pill">
              <span className="live-dot" aria-hidden="true" />
              Open to new opportunities
            </p>
          )}

          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name" id="hero-name">
            {profile.fullName}
          </h1>
          <p className="hero-lead">
            {headline.before}
            <span className="text-gradient">{headline.highlight}</span>
            {headline.after}
          </p>
          <p className="hero-bio">{profile.bio}</p>

          <ul className="hero-meta">
            <li>
              <Icon name="map-pin" />
              {profile.location}
            </li>
            <li>
              <Icon name="graduation" />
              {profile.degree} · {profile.university}
            </li>
          </ul>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects <Icon name="arrow-right" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact me
            </a>
            {profile.showResumeButtons && (
              <ExternalLink href={profile.resumeUrl} className="btn btn-secondary">
                Resume <Icon name="download" />
              </ExternalLink>
            )}
            <SocialLinks />
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.fullName}`}
              width={380}
              height={475}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
