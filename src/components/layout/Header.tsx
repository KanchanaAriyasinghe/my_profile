import { useEffect, useRef, useState } from 'react';
import { navItems, profile } from '../../data/profile';
import { useScrolledPast } from '../../hooks/useScrollPosition';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../ui/Icon';

const sectionIds = navItems.map((n) => n.id);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(30);
  const active = useScrollSpy(sectionIds);
  const { theme, toggle } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu on Escape, outside click, or when resizing up to desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const mql = window.matchMedia('(min-width: 769px)');
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

  return (
    <header ref={headerRef} className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label={`${profile.fullName} — home`}>
          {profile.firstName}
          <span>.</span>
        </a>

        <nav id="primary-nav" className={`navbar${menuOpen ? ' open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link${active === item.id ? ' active' : ''}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            <Icon name={isDark ? 'sun' : 'moon'} />
          </button>
          <a href="#contact" className="btn-talk">
            Hire Me
          </a>
          <button
            type="button"
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
