import { Boleto } from '../boleto.js';

export class BancoDoBrasilBankBoleto30Days extends Boleto {
  protected interestRate: number = 0.05;
  protected discount: number = 0.02;
  protected lateFee: number = 0.5;
}
