import { CanceledState } from './canceled-state.js';
import type { Order } from './order.js';
import { PaidState } from './paid-state.js';
import type { State } from './state.js';

export class WaitingPaymentState implements State {
  constructor(private order: Order) {}

  public paymentSuccessful(): void {
    this.order.setCurrentState(new PaidState(this.order));
  }

  public dispatchOrder(): void {
    throw new Error('Cannot dispatch an order that is awaiting payment');
  }

  public cancelOrder(): void {
    this.order.setCurrentState(new CanceledState());
  }
}
