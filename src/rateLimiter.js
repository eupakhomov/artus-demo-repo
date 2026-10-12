// Sliding-window rate limiter: at most `max` requests per client IP in any `windowMs`.
const hits = new Map();

export function limit(ip, max = 100, windowMs = 60_000) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => t > now - windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length <= max;
}
