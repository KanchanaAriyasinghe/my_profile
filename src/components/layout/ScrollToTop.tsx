import { useScrolledPast } from '../../hooks/useScrollPosition';
import { Icon } from '../ui/Icon';

export function ScrollToTop() {
  const visible = useScrolledPast(600);

  return (
    <button
      type="button"
      className={`icon-btn to-top${visible ? ' visible' : ''}`}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById('main')?.focus({ preventScroll: true });
      }}
    >
      <Icon name="arrow-up" />
    </button>
  );
}
