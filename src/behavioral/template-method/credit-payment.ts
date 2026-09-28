import { Payment } from './payment.js';

export class CreditPayment extends Payment {
  public override calculateFee(): number {
    return this.amount * 0.05;
  }

  public calculateDiscount(): number {
    if (this.amount > 300) {
      return this.amount * 0.02;
    }

    return 0;
  }
}
