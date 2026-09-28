import type { Order } from './order.js';

export abstract class Payment {
  protected order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  public abstract pay(): boolean;
}
