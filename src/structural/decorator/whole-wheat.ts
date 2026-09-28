import { AddonDecorator } from './addon-decorator.js';

export class WholeWheat extends AddonDecorator {
  public getDescription(): string | undefined {
    return `${this.pizza.getDescription()} + Massa Integral`;
  }

  public getPrice(): number {
    return this.pizza.getPrice() + 5;
  }
}
