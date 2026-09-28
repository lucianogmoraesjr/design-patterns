import { ElectronicOrder } from './electronic-order.js';
import { ExpressShipping } from './express-shipping.js';
import { StandardShipping } from './standard-shipping.js';

describe('Strategy Pattern', () => {
  it('should correctly calculate the standard shipping cost (5% of the value)', () => {
    const standardShipping = new StandardShipping();
    const order = new ElectronicOrder(100, standardShipping);

    expect(order.calculateShipping()).toBe(5);
  });

  it('should correctly calculate the express shipping cost (10% of the value)', () => {
    const expressShipping = new ExpressShipping();
    const order = new ElectronicOrder(100, expressShipping);

    expect(order.calculateShipping()).toBe(10);
  });

  it('should initiate the electronic request with the correct department', () => {
    const standardShipping = new StandardShipping();
    const order = new ElectronicOrder(100, standardShipping);

    expect(order.getDepartmentName()).toBe('Electronic');
    expect(order.getAmount()).toBe(100);
  });
});
