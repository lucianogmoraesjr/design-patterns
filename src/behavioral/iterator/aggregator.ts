import type { Iterator } from './iterator.js';

export interface Aggregator<T = unknown> {
  getIterator(): Iterator<T>;
}
