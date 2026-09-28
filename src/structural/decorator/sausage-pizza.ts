import { Pizza } from './pizza.js';

export class SausagePizza extends Pizza {
  public getDescription(): string | undefined {
    return 'Pizza de Calabresa';
  }

  public getPrice(): number {
    return 25;
  }
}
