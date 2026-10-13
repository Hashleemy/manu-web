/**
 * Content gating shared by Listings and Testimonials.
 * Sample entries are visible in dev, hidden in production builds unless
 * PUBLIC_SHOW_SAMPLE_CONTENT=true.
 */
export const showSamples =
  import.meta.env.DEV || import.meta.env.PUBLIC_SHOW_SAMPLE_CONTENT === 'true';

/** Returns the entries that should render, and whether any of them are samples. */
export function visibleEntries(entries) {
  const real = entries.filter((e) => !e.sample);
  if (real.length > 0) return { items: real, isSample: false };
  if (showSamples) return { items: entries, isSample: true };
  return { items: [], isSample: false };
}
