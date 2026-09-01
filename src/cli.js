#!/usr/bin/env node
import { sales } from './data.js';
import { formatReport, totals } from './report.js';

const rows = totals(sales);
console.log(formatReport(rows));
