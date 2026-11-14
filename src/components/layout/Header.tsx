import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/profile';
import { useScrolledPast } from '../../hooks/useScrollPosition';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useTheme } from '../../hooks/useTheme';
import { pageSections } from '../../sections';
import { Icon } from '../ui/Icon';

// The brand links to #home, so the menu only lists the page sections.
const menuItems = pageSections.map(({ id, label }) => ({ id, label }));
const sectionIds = ['home', ...menuItems.map((n) => n.id)];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(16);
  const active = useScrollSpy(sectionIds);
  const { theme, toggle } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu on Escape, outside click, or when widening to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const mql = window.matchMedia('(min-width: 981px)');
    const onResize = () => mql.matches && setMenuOpen(false);

    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    mql.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      mql.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  const isDark = theme === 'dark';
  const classes = ['site-header', scrolled && 'is-scrolled', menuOpen && 'is-open'].filter(Boolean).join(' ');

  return (
    <header ref={headerRef} className={classes}>
      <div className="container">
        <div className="header-inner">
          <a href="#home" className="brand" aria-label={`${profile.fullName} — back to top`}>
            <span className="brand-mark" aria-hidden="true">
              {profile.firstName[0]}
            </span>
            <span>{profile.firstName}</span>
          </a>

          <nav id="primary-nav" className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link${active === item.id ? ' is-active' : ''}`}
                    aria-current={active === item.id ? 'location' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={toggle}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              <Icon name={isDark ? 'sun' : 'moon'} />
            </button>
            <a href="#contact" className="btn btn-primary btn-sm header-cta">
              Let's talk
            </a>
            <button
              type="button"
              className="icon-btn nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Icon name={menuOpen ? 'x' : 'menu'} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
