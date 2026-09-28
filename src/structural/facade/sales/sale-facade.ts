import type { Consumer } from '../consumer.js';
import type { Product } from '../product.js';
import { BoletoPayment } from './boleto-payment.js';
import { CreditPayment } from './credit-payment.js';
import { Order } from './order.js';
import { OrderEmail } from './order-email.js';
import type { Payment } from './payment.js';

export class SaleFacade {
  private order: Order;
  private payment: Payment | undefined;
  private email: OrderEmail;

  constructor(consumer: Consumer) {
    this.order = new Order(consumer);
    this.email = new OrderEmail(this.order);
  }

  public addProduct(product: Product) {
    this.order.addProduct(product);
  }

  public creditPayment() {
    this.payment = new CreditPayment(this.order);

    if (this.payment.pay()) {
      return this.email.sendEmail('Payment successfully made via credit card');
    }

    return this.email.sendEmail('Failed to process credit card payment');
  }

  public boletoPayment() {
    this.payment = new BoletoPayment(this.order);

    if (this.payment.pay()) {
      return this.email.sendEmail('Payment successfully made via boleto');
    }

    return this.email.sendEmail('Failed to process boleto payment');
  }
}
