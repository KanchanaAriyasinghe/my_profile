import { stats } from '../../data/profile';
import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from '../../hooks/useInView';
import type { Stat } from '../../types';
import { Icon } from '../ui/Icon';

function StatItem({ stat, index, start }: { stat: Stat; index: number; start: boolean }) {
  const value = useCountUp(stat.value, start, { delay: index * 90, duration: 1600 });

  return (
    <li className="stat">
      <div className="stat-top">
        {/* Screen readers get the final value; the animated digits are visual only. */}
        <span className="stat-number" aria-hidden="true">
          {value}
          {stat.suffix}
        </span>
        <Icon name={stat.icon} />
      </div>
      <span className="sr-only">
        {stat.value}
        {stat.suffix}
      </span>
      <p className="stat-label">{stat.label}</p>
    </li>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLUListElement>({ threshold: 0.3, rootMargin: '0px' });

  return (
    <section className="stats" id="stats" aria-label="Highlights">
      <div className="container">
        <ul className="card stats-grid" ref={ref}>
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} start={inView} />
          ))}
        </ul>
      </div>
    </section>
  );
}
