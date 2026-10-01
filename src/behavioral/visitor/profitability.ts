import type { Department } from './department.js';
import type { Product } from './product.js';
import type { Supermarket } from './supermarket.js';
import type { Visitor } from './visitor.js';

export class Profitability implements Visitor {
  visitSupermarket(supermarket: Supermarket): number {
    let profitability = 0;

    for (const d of supermarket.departments) {
      for (const p of d.products) {
        profitability += this.calculateProductProfitability(p);
      }
    }

    return Number(profitability.toFixed(2));
  }

  visitDepartment(department: Department): number {
    let profitability = 0;

    for (const p of department.products) {
      profitability += this.calculateProductProfitability(p);
    }

    return Number(profitability.toFixed(2));
  }

  visitProduct(product: Product): number {
    return this.calculateProductProfitability(product);
  }

  private calculateProductProfitability(product: Product) {
    return Number(((product.price * product.profitMargin) / 100).toFixed(2));
  }
}
