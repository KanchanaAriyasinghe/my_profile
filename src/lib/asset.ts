/**
 * Resolve a file in /public against Vite's base URL so links keep working
 * when the site is served from a sub-path (e.g. GitHub Pages /my_profile/).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
