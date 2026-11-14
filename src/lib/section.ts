/** Props every page section receives from the registry in `src/sections.ts`. */
export interface SectionProps {
  id: string;
  /** Alternating background band — assigned automatically by position. */
  muted?: boolean;
}

/** Id of a section's <h2>, used for aria-labelledby. */
export const headingId = (sectionId: string) => `${sectionId}-title`;
