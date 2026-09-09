/** Sums sales per product: [{product, amount, at}] -> [{name, total}], largest first. */
export function totals(sales) {
  const byName = new Map();
  for (const s of sales) byName.set(s.product, (byName.get(s.product) ?? 0) + s.amount);
  return [...byName].map(([name, total]) => ({ name, total })).sort((a, b) => b.total - a.total);
}

/** A plain-text table of the totals. */
export function formatReport(rows) {
  const width = Math.max(4, ...rows.map((r) => r.name.length));
  const lines = rows.map((r) => `${r.name.padEnd(width)}  ${r.total.toFixed(2).padStart(9)}`);
  return [`${'name'.padEnd(width)}  ${'total'.padStart(9)}`, ...lines].join('\n');
}
