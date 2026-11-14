import { socialLinks } from '../../data/profile';
import { ExternalLink } from './ExternalLink';
import { Icon } from './Icon';

export function SocialLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      {socialLinks.map((s) => (
        <ExternalLink key={s.label} href={s.href} aria-label={s.label} title={s.label}>
          <Icon name={s.icon} />
        </ExternalLink>
      ))}
    </div>
  );
}
