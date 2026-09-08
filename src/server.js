import { createServer } from 'node:http';
import { sales } from './data.js';
import { totals } from './report.js';

export const server = createServer((req, res) => {
  if (req.url === '/report') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(totals(sales)));
    return;
  }
  res.writeHead(404).end();
});

if (import.meta.url === `file://${process.argv[1]}`) server.listen(3000, () => console.log('listening on :3000'));
