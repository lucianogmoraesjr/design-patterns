import type { Element } from './element.js';
import type { Product } from './product.js';
import type { Visitor } from './visitor.js';

export class Department implements Element {
  public readonly products: Product[] = [];

  constructor(public readonly name: string) {}

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public accept(visitor: Visitor): number {
    return visitor.visitDepartment(this);
  }
}
