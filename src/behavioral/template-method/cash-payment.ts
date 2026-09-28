import { Payment } from './payment.js';

export class CashPayment extends Payment {
  public calculateDiscount(): number {
    return this.amount * 0.1;
  }
}
