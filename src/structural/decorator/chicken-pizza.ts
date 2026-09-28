import { Pizza } from './pizza.js';

export class ChickenPizza extends Pizza {
  public getDescription(): string | undefined {
    return 'Pizza de Frango';
  }

  public getPrice(): number {
    return 19;
  }
}
