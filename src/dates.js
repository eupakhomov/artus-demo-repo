/**
 * Parses an ISO-8601 timestamp and returns midnight (UTC) of its calendar day in UTC,
 * e.g. '2026-03-01T23:30:00-05:00' -> 2026-03-02T00:00:00.000Z.
 */
export function parseDay(iso) {
  const d = new Date(iso);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** 'YYYY-MM-DD' of the UTC calendar day. */
export function dayKey(iso) {
  return parseDay(iso).toISOString().slice(0, 10);
}
