import { test } from 'node:test';
import assert from 'node:assert/strict';
import { server } from '../src/server.js';

test('GET /health returns 200 with {"status":"ok"}', async () => {
  server.listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/health`);
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { status: 'ok' });
  } finally {
    server.close();
  }
});
