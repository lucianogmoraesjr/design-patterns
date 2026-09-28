import { CashPayment } from './cash-payment.js';
import { CreditPayment } from './credit-payment.js';
import { DebitPayment } from './debit-payment.js';
import { Gateway } from './gateway.js';

describe('Template Method Pattern', () => {
  it('should make a charge with Credit Payment', () => {
    const gateway = new Gateway();
    const payment = new CreditPayment(1000, gateway);

    expect(payment.charge()).toBe(1030);
  });

  it('should make a charge with Debit Payment', () => {
    const gateway = new Gateway();
    const payment = new DebitPayment(1000, gateway);

    expect(payment.charge()).toBe(954);
  });

  it('should make a charge with Cash Payment', () => {
    const gateway = new Gateway();
    const payment = new CashPayment(1000, gateway);

    expect(payment.charge()).toBe(900);
  });
});
