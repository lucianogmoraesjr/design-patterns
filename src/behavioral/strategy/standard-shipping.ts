import type { Shipping } from './shipping.js';

export class StandardShipping implements Shipping {
  public calculate(amount: number): number {
    return amount * 0.05;
  }
}
