import { BancoDoBrasilBank } from './banco-do-brasil/banco-do-brasil-bank.js';
import { CaixaBank } from './caixa/caixa-bank.js';

let caixa: CaixaBank;
let bancoDoBrasil: BancoDoBrasilBank;

describe('Factory Method Pattern', () => {
  beforeEach(() => {
    caixa = new CaixaBank();
    bancoDoBrasil = new BancoDoBrasilBank();
  });

  it('should correctly generate a boleto for 10 days with Caixa Bank', () => {
    const boleto = caixa.generateBoleto(10, 100);

    expect(boleto.calculateDiscount()).toBe(10);
    expect(boleto.calculateInterest()).toBe(2);
    expect(boleto.calculateLateFee()).toBe(5);
  });

  it('should correctly generate a boleto for 30 days with Caixa Bank', () => {
    const boleto = caixa.generateBoleto(30, 100);

    expect(boleto.calculateDiscount()).toBe(5);
    expect(boleto.calculateInterest()).toBe(5);
    expect(boleto.calculateLateFee()).toBe(10);
  });

  it('should correctly generate a boleto for 60 days with Caixa Bank', () => {
    const boleto = caixa.generateBoleto(60, 100);

    expect(boleto.calculateDiscount()).toBe(0);
    expect(boleto.calculateInterest()).toBe(10);
    expect(boleto.calculateLateFee()).toBe(20);
  });

  it('should correctly generate a boleto for 10 days with Banco Do Brasil Bank', () => {
    const boleto = bancoDoBrasil.generateBoleto(10, 100);

    expect(boleto.calculateDiscount()).toBe(2);
    expect(boleto.calculateInterest()).toBe(3);
    expect(boleto.calculateLateFee()).toBe(5);
  });

  it('should correctly generate a boleto for 30 days with Banco Do Brasil Bank', () => {
    const boleto = bancoDoBrasil.generateBoleto(30, 100);

    expect(boleto.calculateDiscount()).toBe(2);
    expect(boleto.calculateInterest()).toBe(5);
    expect(boleto.calculateLateFee()).toBe(50);
  });

  it('should correctly generate a boleto for 60 days with Banco Do Brasil Bank', () => {
    const boleto = bancoDoBrasil.generateBoleto(60, 100);

    expect(boleto.calculateDiscount()).toBe(0);
    expect(boleto.calculateInterest()).toBe(10);
    expect(boleto.calculateLateFee()).toBe(15);
  });
});
