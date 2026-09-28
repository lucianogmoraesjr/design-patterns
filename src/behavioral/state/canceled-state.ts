import type { State } from './state.js';

export class CanceledState implements State {
  public paymentSuccessful(): void {
    throw new Error('Cannot pay an canceled order');
  }

  public dispatchOrder(): void {
    throw new Error('Cannot dispatch an canceled order');
  }

  public cancelOrder(): void {
    throw new Error('Order already canceled');
  }
}
