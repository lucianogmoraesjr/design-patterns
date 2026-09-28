import type { Shipping } from './shipping.js';

export abstract class Order {
  private amount: number;
  private shipping: Shipping;

  constructor(amount: number, shipping: Shipping) {
    this.amount = amount;
    this.shipping = shipping;
  }

  public getAmount(): number {
    return this.amount;
  }

  public calculateShipping(): number {
    return this.shipping.calculate(this.amount);
  }
}
