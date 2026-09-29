import { BancoDoBrasilCalculationFactory } from './banco-do-brasil/banco-do-brasil-calculation-factory.js';
import { Bank } from './bank.js';
import { CaixaCalculationFactory } from './caixa/caixa-calculation-factory.js';

describe('Abstract Factory Pattern', () => {
  it('should correctly generate a boleto with Caixa Bank', () => {
    const factory = new CaixaCalculationFactory();
    const bank = new Bank(factory);
    const boleto = bank.generateBoleto(100);

    expect(boleto.calculateDiscount()).toBe(10);
    expect(boleto.calculateInterest()).toBe(2);
    expect(boleto.calculateLateFee()).toBe(5);
  });

  it('should correctly generate a boleto with Banco Do Brasil Bank', () => {
    const factory = new BancoDoBrasilCalculationFactory();
    const bank = new Bank(factory);
    const boleto = bank.generateBoleto(100);

    expect(boleto.calculateDiscount()).toBe(5);
    expect(boleto.calculateInterest()).toBe(3);
    expect(boleto.calculateLateFee()).toBe(2);
  });
});
