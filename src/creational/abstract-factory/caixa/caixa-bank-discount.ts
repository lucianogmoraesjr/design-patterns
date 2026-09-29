import type { Discount } from '../discount.js';

export class CaixaBankDiscount implements Discount {
  getDiscount(): number {
    return 0.1;
  }
}
