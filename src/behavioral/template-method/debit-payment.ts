import { Payment } from './payment.js';

export class DebitPayment extends Payment {
  public override calculateFee(): number {
    return 4;
  }

  public calculateDiscount(): number {
    return this.amount * 0.05;
  }
}
