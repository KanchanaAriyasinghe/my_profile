import type { IconName } from './components/ui/Icon';

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: IconName;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  tags: string[];
  hidden?: boolean;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  items: string[];
}

/** 'YYYY' or 'YYYY-MM'. */
export type PartialDate = `${number}` | `${number}-${number}`;

export interface TimelineEntry {
  title: string;
  organisation: string;
  icon: IconName;
  start: PartialDate;
  /** Omit for an ongoing role — it then shows "Present" and a "Current" badge. */
  end?: PartialDate;
  /** Show the computed length, e.g. "· 6 mos". */
  showDuration?: boolean;
  /** Optional extra line such as "Cumulative GPA: 3.36 / 4.00". */
  note?: string;
  description: string;
  /** Labelled bullet points (e.g. "API Integration: …"). */
  highlights?: { label: string; text: string }[];
  tags: string[];
  /** Keep in the data without showing it on the site. */
  hidden?: boolean;
}

export interface Achievement {
  label: string;
  href?: string;
  pill: string;
  pillVariant?: 'default' | 'green';
}

export const PROJECT_CATEGORIES = ['Full-Stack', 'Frontend', 'AI / ML', 'IoT'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  title: string;
  description: string;
  image?: string;
  date: string;
  tags: string[];
  category: ProjectCategory;
  /** Where the "View project" link goes. */
  link: string;
  repo?: string;
  demo?: string;
  /** LinkedIn / write-up post. */
  post?: string;
  ongoing?: boolean;
  /** Keep a project in the data without showing it on the site. */
  hidden?: boolean;
}

export interface Research {
  title: string;
  status: string;
  tech: string[];
  stats: { value: string; label: string }[];
  abstract: string;
  video: { src: string; caption: string };
}

export interface Reference {
  name: string;
  title: string;
  subtitle: string;
  type: 'industry' | 'academic';
  organisation: string;
  email: string;
  linkedin: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  icon: IconName;
  href?: string;
  hint?: string;
}
