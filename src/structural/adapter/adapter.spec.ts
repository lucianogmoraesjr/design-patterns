import { Billing } from './billing.js';
import { PagFacilAdapter } from './pag-facil-adapter.js';
import { TopPagamentosAdapter } from './top-pagamentos-adapter.js';

describe('Adapter Pattern', () => {
  it('should process a billing using PagFacil gateway', () => {
    const gateway = new PagFacilAdapter();
    const billing = new Billing(gateway);

    billing.setAmount(100);
    billing.setInstallments(3);
    billing.setCardNumber('1234123412341234');
    billing.setCVV('123');

    expect(() => billing.pay()).toBeTruthy();
  });

  it('should process a billing using TopPagamentos gateway', () => {
    const gateway = new TopPagamentosAdapter();
    const billing = new Billing(gateway);

    billing.setAmount(100);
    billing.setInstallments(3);
    billing.setCardNumber('1234123412341234');
    billing.setCVV('123');

    expect(() => billing.pay()).toBeTruthy();
  });
});
