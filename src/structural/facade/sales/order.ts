import type { Consumer } from '../consumer.js';
import type { Product } from '../product.js';

export class Order {
  private consumer: Consumer;
  private products: Product[] = [];
  private amount: number = 0;

  constructor(consumer: Consumer) {
    this.consumer = consumer;
  }

  public addProduct(product: Product) {
    this.products.push(product);
    this.amount += product.getPrice();
  }

  public getConsumer(): Consumer {
    return this.consumer;
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getAmount(): number {
    return this.amount;
  }
}
