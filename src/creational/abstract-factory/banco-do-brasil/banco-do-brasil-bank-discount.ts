import type { Discount } from '../discount.js';

export class BancoDoBrasilBankDiscount implements Discount {
  getDiscount(): number {
    return 0.05;
  }
}
