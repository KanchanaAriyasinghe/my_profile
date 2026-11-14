import { profile } from '../../data/profile';
import { SocialLinks } from '../ui/SocialLinks';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark" aria-hidden="true">
              {profile.firstName[0]}
            </span>
            <span>{profile.fullName}</span>
          </a>
          <p>
            &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
