import { profile } from '../../data/profile';
import { Icon } from '../ui/Icon';
import { ExternalLink } from '../ui/ExternalLink';
import { SocialLinks } from '../ui/SocialLinks';

export function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-name">
      <div className="hero-inner container">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name" id="hero-name">
            {profile.fullName}
          </h1>
          <p className="hero-role">
            <span className="accent">{profile.degree}</span> | {profile.university}
          </p>
          <p className="hero-subtitle">
            <span className="accent">{profile.roles.join(' | ')}</span>
          </p>
          <p className="hero-bio">{profile.bio}</p>

          <div className="hero-hire-wrap">
            <a href="#contact" className="btn-hire">
              <span className="btn-hire-icon">
                <Icon name="user" />
              </span>
              <span className="btn-hire-text">Hire Me</span>
              {profile.openToWork && <span className="btn-hire-badge">Open to Work</span>}
            </a>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              Projects <Icon name="code" className="btn-icon" />
            </a>
            {profile.showResumeButtons && (
              <>
                <ExternalLink href={profile.resumeUrl} className="btn-outline">
                  View Resume <Icon name="external" className="btn-icon" />
                </ExternalLink>
                <a href={profile.resumeUrl} className="btn-outline" download>
                  Download Resume <Icon name="download" className="btn-icon" />
                </a>
              </>
            )}
          </div>

          <SocialLinks className="hero-socials" />
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-blob" />
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.fullName}`}
            className="hero-photo"
            width={340}
            height={420}
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="hero-deco hero-deco-1" aria-hidden="true" />
      <div className="hero-deco hero-deco-2" aria-hidden="true" />
    </section>
  );
}
