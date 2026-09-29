import { Boleto } from './boleto.js';
import type { CalculationFactory } from './calculation-factory.js';

export class Bank {
  constructor(private readonly calculationFactory: CalculationFactory) {}

  public generateBoleto(amount: number) {
    return new Boleto(amount, this.calculationFactory);
  }
}
