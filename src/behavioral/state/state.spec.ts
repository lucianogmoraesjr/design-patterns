import { CanceledState } from './canceled-state.js';
import { Order } from './order.js';
import { PaidState } from './paid-state.js';
import { SentState } from './sent-state.js';

describe('State Pattern', () => {
  it('should transition correctly when making the order payment', () => {
    const order = new Order();
    order.pay();
    expect(order.getCurrentState()).toBeInstanceOf(PaidState);
  });

  it('should transition correctly when cancelling a paid order', () => {
    const order = new Order();
    order.cancelOrder();
    expect(order.getCurrentState()).toBeInstanceOf(CanceledState);
  });

  it('should transition correctly when sending a paid order', () => {
    const order = new Order();
    order.pay();
    order.dispatchOrder();
    expect(order.getCurrentState()).toBeInstanceOf(SentState);
  });

  it('should throw when trying to pay an already paid order', () => {
    const order = new Order();
    order.pay();
    expect(() => order.pay()).toThrow('Order already paid');
  });

  it('should throw when trying to pay an canceled order', () => {
    const order = new Order();
    order.cancelOrder();
    expect(() => order.pay()).toThrow('Cannot pay an canceled order');
  });

  it('should throw when trying to cancel an already canceled order', () => {
    const order = new Order();
    order.cancelOrder();
    expect(() => order.cancelOrder()).toThrow('Order already canceled');
  });

  it('should throw when trying to dispatch an order that is awaiting payment', () => {
    const order = new Order();
    expect(() => order.dispatchOrder()).toThrow(
      'Cannot dispatch an order that is awaiting payment',
    );
  });
});
