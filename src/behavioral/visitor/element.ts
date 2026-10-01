import type { Visitor } from './visitor.js';

export interface Element {
  accept(visitor: Visitor): number;
}
