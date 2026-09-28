import { CanceledState } from './canceled-state.js';
import type { Order } from './order.js';
import { SentState } from './sent-state.js';
import type { State } from './state.js';

export class PaidState implements State {
  constructor(private order: Order) {}

  public paymentSuccessful(): void {
    throw new Error('Order already paid');
  }

  public dispatchOrder(): void {
    this.order.setCurrentState(new SentState());
  }

  public cancelOrder(): void {
    this.order.setCurrentState(new CanceledState());
  }
}
