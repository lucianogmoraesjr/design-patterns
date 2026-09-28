import type { Order } from './order.js';

export class OrderEmail {
  private order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public sendEmail(message: string) {
    return `Email sent (${this.order.getConsumer().getEmail()}): ${message}`;
  }
}
