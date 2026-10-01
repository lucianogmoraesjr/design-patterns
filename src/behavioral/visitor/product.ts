import type { Element } from './element.js';
import type { Visitor } from './visitor.js';

export class Product implements Element {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly profitMargin: number,
  ) {}

  public accept(visitor: Visitor): number {
    return visitor.visitProduct(this);
  }
}
