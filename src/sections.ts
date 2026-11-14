import type { ComponentType } from 'react';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Projects } from './components/sections/Projects';
import { References } from './components/sections/References';
import { Research } from './components/sections/Research';
import { Resume } from './components/sections/Resume';
import { Services } from './components/sections/Services';
import { Skills } from './components/sections/Skills';
import type { SectionProps } from './lib/section';

export interface PageSection {
  /** Anchor id — also used in the URL hash (#experience). */
  id: string;
  /** Label in the navigation menu. */
  label: string;
  Component: ComponentType<SectionProps>;
}

/**
 * Page order after the hero + stats strip.
 * This one list drives the page layout, the navigation menu, scroll-spy,
 * and the alternating section backgrounds — reorder here and everything follows.
 * Strongest evidence first: what you've done and built, then what you offer.
 */
export const pageSections: PageSection[] = [
  { id: 'experience', label: 'Experience', Component: Resume },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'services', label: 'Services', Component: Services },
  { id: 'skills', label: 'Skills', Component: Skills },
  { id: 'achievements', label: 'Achievements', Component: Achievements },
  { id: 'research', label: 'Research', Component: Research },
  { id: 'references', label: 'References', Component: References },
  { id: 'contact', label: 'Contact', Component: Contact },
];
