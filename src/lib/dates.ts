import type { PartialDate } from '../types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parse(d: PartialDate): { year: number; month?: number } {
  const [y, m] = d.split('-').map(Number);
  return { year: y, month: m };
}

/** "2025-11" → "Nov 2025", "2019" → "2019". */
export function formatPartialDate(d: PartialDate): string {
  const { year, month } = parse(d);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

/** Whole months between two dates; `end` defaults to today. */
export function monthsBetween(start: PartialDate, end?: PartialDate, today = new Date()): number {
  const s = parse(start);
  const e = end ? parse(end) : { year: today.getFullYear(), month: today.getMonth() + 1 };
  return Math.max(0, (e.year - s.year) * 12 + ((e.month ?? 1) - (s.month ?? 1)));
}

/** 6 → "6 mos", 12 → "1 yr", 14 → "1 yr 2 mos". */
export function formatDuration(months: number): string {
  if (months < 1) return '< 1 mo';
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
  return parts.join(' ');
}

/** "Nov 2025 – May 2026 · 6 mos" / "Sep 2026 – Present · 2 mos". */
export function formatPeriod(start: PartialDate, end?: PartialDate, showDuration = false): string {
  const range = `${formatPartialDate(start)} – ${end ? formatPartialDate(end) : 'Present'}`;
  return showDuration ? `${range} · ${formatDuration(monthsBetween(start, end))}` : range;
}
