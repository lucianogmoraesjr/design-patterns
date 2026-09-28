import type { State } from './state.js';

export class SentState implements State {
  public paymentSuccessful(): void {
    throw new Error('Cannot pay an sent order');
  }

  public dispatchOrder(): void {
    throw new Error('Cannot dispatch an sent order');
  }

  public cancelOrder(): void {
    throw new Error('Order already sent');
  }
}
