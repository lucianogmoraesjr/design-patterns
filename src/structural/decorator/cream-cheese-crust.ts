import { AddonDecorator } from './addon-decorator.js';

export class CreamCheeseCrust extends AddonDecorator {
  public getDescription(): string | undefined {
    return `${this.pizza.getDescription()} + Borda de Requeijão`;
  }

  public getPrice(): number {
    return this.pizza.getPrice() + 8.5;
  }
}
