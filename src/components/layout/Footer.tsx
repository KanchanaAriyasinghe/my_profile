import { profile } from '../../data/profile';
import { SocialLinks } from '../ui/SocialLinks';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          {profile.firstName}
          <span>.</span>
        </span>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </p>
        <SocialLinks className="footer-socials" />
      </div>
    </footer>
  );
}
