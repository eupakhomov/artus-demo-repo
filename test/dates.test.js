// Run the date tests in a fixed non-UTC zone, so they behave the same on every machine.
process.env.TZ = 'America/Los_Angeles';

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { dayKey, parseDay } from '../src/dates.js';

test('parseDay uses the UTC calendar day for offset timestamps', () => {
  assert.equal(parseDay('2026-03-01T23:30:00-05:00').toISOString(), '2026-03-02T00:00:00.000Z');
});

test('dayKey keeps UTC midnight on the same day', () => {
  assert.equal(dayKey('2026-03-01T00:00:00Z'), '2026-03-01');
});
