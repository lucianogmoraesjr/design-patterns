import type { State } from './state.js';
import { WaitingPaymentState } from './waiting-payment-state.js';

export class Order {
  private currentState: State;

  constructor() {
    this.currentState = new WaitingPaymentState(this);
  }

  public getCurrentState(): State {
    return this.currentState;
  }

  public setCurrentState(state: State) {
    this.currentState = state;
  }

  public pay() {
    this.currentState.paymentSuccessful();
  }

  public cancelOrder() {
    this.currentState.cancelOrder();
  }

  public dispatchOrder() {
    this.currentState.dispatchOrder();
  }
}
