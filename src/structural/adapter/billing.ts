import type { Gateway } from './gateway.js';

export class Billing {
  constructor(private readonly gateway: Gateway) {}

  public setAmount(amount: number): void {
    this.gateway.setAmount(amount);
  }

  public setInstallments(installments: number): void {
    this.gateway.setInstallments(installments);
  }

  public setCardNumber(cardNumber: string): void {
    this.gateway.setCardNumber(cardNumber);
  }

  public setCVV(cvv: string): void {
    this.gateway.setCVV(cvv);
  }

  public pay(): boolean {
    if (this.gateway.validateCard()) {
      return this.gateway.pay();
    }

    return false;
  }
}
