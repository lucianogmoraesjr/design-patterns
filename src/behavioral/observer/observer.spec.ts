import { Customer } from './customer.js';
import { Newsletter } from './newsletter.js';
import { Partner } from './partner.js';
import { Supplier } from './supplier.js';

describe('Observer Pattern', () => {
  it('should notify an observer when new message is added', () => {
    const newsletter = new Newsletter();
    const customer = new Customer('John Doe', 'john@mail.com', newsletter);

    const customerUpdateSpy = vi.spyOn(customer, 'update');

    newsletter.addMessage('First message');

    expect(customerUpdateSpy).toHaveBeenCalledWith('First message');
  });

  it('should notify all observers when new message is added', () => {
    const newsletter = new Newsletter();
    const customer = new Customer('John Doe', 'john@mail.com', newsletter);
    const partner = new Partner('Jane Doe', 'jane@mail.com', newsletter);
    const supplier = new Supplier('Mary Smith', 'mary@mail.com', newsletter);

    const customerUpdateSpy = vi.spyOn(customer, 'update');
    const partnerUpdateSpy = vi.spyOn(partner, 'update');
    const supplierUpdateSpy = vi.spyOn(supplier, 'update');

    newsletter.addMessage('First message');

    expect(customerUpdateSpy).toHaveBeenCalledWith('First message');
    expect(partnerUpdateSpy).toHaveBeenCalledWith('First message');
    expect(supplierUpdateSpy).toHaveBeenCalledWith('First message');
  });

  it('should not notify an observer if they unsubscribe from the newsletter', () => {
    const newsletter = new Newsletter();
    const customer = new Customer('John Doe', 'john@mail.com', newsletter);
    const partner = new Partner('Jane Doe', 'jane@mail.com', newsletter);
    const supplier = new Supplier('Mary Smith', 'mary@mail.com', newsletter);

    const customerUpdateSpy = vi.spyOn(customer, 'update');
    const partnerUpdateSpy = vi.spyOn(partner, 'update');
    const supplierUpdateSpy = vi.spyOn(supplier, 'update');

    newsletter.addMessage('First message');

    expect(customerUpdateSpy).toHaveBeenCalledWith('First message');
    expect(partnerUpdateSpy).toHaveBeenCalledWith('First message');
    expect(supplierUpdateSpy).toHaveBeenCalledWith('First message');

    newsletter.removeObserver(supplier);
    newsletter.addMessage('Second message');

    expect(customerUpdateSpy).toHaveBeenCalledWith('Second message');
    expect(partnerUpdateSpy).toHaveBeenCalledWith('Second message');
    expect(supplierUpdateSpy).not.toHaveBeenCalledWith('Second message');
  });
});
