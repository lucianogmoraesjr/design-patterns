import { Boleto } from '../boleto.js';

export class BancoDoBrasilBankBoleto10Days extends Boleto {
  protected interestRate: number = 0.03;
  protected discount: number = 0.02;
  protected lateFee: number = 0.05;
}
