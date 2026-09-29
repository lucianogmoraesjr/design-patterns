import { Boleto } from '../boleto.js';

export class BancoDoBrasilBankBoleto60Days extends Boleto {
  protected interestRate: number = 0.1;
  protected discount: number = 0;
  protected lateFee: number = 0.15;
}
