import type { Shipping } from './shipping.js';

export class ExpressShipping implements Shipping {
  public calculate(amount: number): number {
    return amount * 0.1;
  }
}
