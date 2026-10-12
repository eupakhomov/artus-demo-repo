import { test } from 'node:test';
import assert from 'node:assert/strict';
import { limit } from '../src/rateLimiter.js';

test('allows up to max requests in the window', () => {
  for (let i = 0; i < 3; i++) assert.equal(limit('10.0.0.1', 3), true);
  assert.equal(limit('10.0.0.1', 3), false);
});
