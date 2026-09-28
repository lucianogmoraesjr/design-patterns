import { Pizza } from './pizza.js';

export class MozzarellaPizza extends Pizza {
  public getDescription(): string | undefined {
    return 'Pizza de Mussarela';
  }

  public getPrice(): number {
    return 22;
  }
}
