export interface State {
  paymentSuccessful(): void;
  dispatchOrder(): void;
  cancelOrder(): void;
}
