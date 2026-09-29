import type { Boleto } from './boleto.js';

export abstract class Bank {
  protected abstract createBoleto(dueDate: number, amount: number): Boleto;

  public generateBoleto(dueDate: number, amount: number) {
    return this.createBoleto(dueDate, amount);
  }
}
