import { Payment } from './payment.js';

export class BoletoPayment extends Payment {
  public pay(): boolean {
    if (this.order.getAmount() > 0) {
      return true;
    }

    return false;
  }
}
