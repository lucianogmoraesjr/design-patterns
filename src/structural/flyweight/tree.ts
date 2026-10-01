import type { SpeciesFlyweight } from './species-flyweight.js';

export class Tree {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly flyweight: SpeciesFlyweight,
  ) {}
}
