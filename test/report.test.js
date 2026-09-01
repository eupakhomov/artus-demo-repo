import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatReport, totals } from '../src/report.js';

const sales = [
  { product: 'a', amount: 1, at: '2026-03-01T00:00:00Z' },
  { product: 'b', amount: 5, at: '2026-03-01T00:00:00Z' },
  { product: 'a', amount: 2, at: '2026-03-01T00:00:00Z' },
];

test('totals sums per product', () => {
  assert.deepEqual(totals(sales), [{ name: 'a', total: 3 }, { name: 'b', total: 5 }]);
});

test('formatReport prints a header and one line per product', () => {
  const out = formatReport(totals(sales));
  assert.equal(out.split('\n').length, 3);
  assert.match(out, /^name\s+total$/m);
});
