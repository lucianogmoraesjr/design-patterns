import type { Gateway } from './gateway.js';

export abstract class Payment {
  protected amount: number;
  private gateway: Gateway;

  constructor(amount: number, gateway: Gateway) {
    this.amount = amount;
    this.gateway = gateway;
  }

  public abstract calculateDiscount(): number;

  public calculateFee(): number {
    return 0;
  }

  public charge(): number {
    const final = this.amount + this.calculateFee() - this.calculateDiscount();
    return this.gateway.charge(final);
  }
}
