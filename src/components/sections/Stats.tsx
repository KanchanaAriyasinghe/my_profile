import { stats } from '../../data/profile';
import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from '../../hooks/useInView';
import type { Stat } from '../../types';
import { Icon } from '../ui/Icon';

function StatCard({ stat, index, start }: { stat: Stat; index: number; start: boolean }) {
  const value = useCountUp(stat.value, start, { delay: index * 100 });
  const final = `${stat.value}${stat.suffix ?? ''}`;

  return (
    <li className="stat-card reveal-stat">
      <div className="stat-icon-wrap">
        <Icon name={stat.icon} strokeWidth={1.8} />
      </div>
      <div className="stat-number-wrap">
        {/* Screen readers get the final value; the animated digits are visual only. */}
        <span className="stat-number" aria-hidden="true">
          {value}
          {stat.suffix}
        </span>
        <span className="sr-only">{final}</span>
      </div>
      <p className="stat-label">{stat.label}</p>
    </li>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLUListElement>({ threshold: 0.3, rootMargin: '0px' });

  return (
    <section className="stats-section" id="stats" aria-label="Highlights">
      <div className="container">
        <ul className="stats-grid" ref={ref}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} start={inView} />
          ))}
        </ul>
      </div>
    </section>
  );
}
