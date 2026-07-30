/** Base path GitHub Pages — harus sama dengan next.config.ts */
export const BASE_PATH = '/portofolio';

/** Prefix path aset publik agar cocok dengan subfolder GitHub Pages */
export function withBasePath(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;

  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === BASE_PATH || normalized.startsWith(`${BASE_PATH}/`)) {
    return normalized;
  }

  return `${BASE_PATH}${normalized}`;
}
