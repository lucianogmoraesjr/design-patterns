import { Consumer } from './consumer.js';
import { Product } from './product.js';
import { BoletoPayment } from './sales/boleto-payment.js';
import { Order } from './sales/order.js';
import { OrderEmail } from './sales/order-email.js';
import { SaleFacade } from './sales/sale-facade.js';

describe('Facade Pattern', () => {
  it('should process a simple sale via boleto', () => {
    const consumer = new Consumer('John Doe', '12345678910', 'john@mail.com');

    const product1 = new Product('Blusa Rosa', 'Blusa feminina rosa', 80.99);
    const product2 = new Product('Calça Jeans', 'Calça jeans masculina', 119.9);
    const product3 = new Product(
      'Camiseta Preta',
      'Camiseta preta masculina',
      49.9,
    );

    const sale = new SaleFacade(consumer);
    sale.addProduct(product1);
    sale.addProduct(product2);
    sale.addProduct(product3);

    expect(sale.boletoPayment()).toEqual(
      'Email sent (john@mail.com): Payment successfully made via boleto',
    );
  });

  it('should process a simple sale via credit card', () => {
    const consumer = new Consumer('John Doe', '12345678910', 'john@mail.com');

    const product1 = new Product('Blusa Rosa', 'Blusa feminina rosa', 80.99);
    const product2 = new Product('Calça Jeans', 'Calça jeans masculina', 119.9);
    const product3 = new Product(
      'Camiseta Preta',
      'Camiseta preta masculina',
      49.9,
    );

    const sale = new SaleFacade(consumer);
    sale.addProduct(product1);
    sale.addProduct(product2);
    sale.addProduct(product3);

    expect(sale.creditPayment()).toEqual(
      'Email sent (john@mail.com): Payment successfully made via credit card',
    );
  });
});
