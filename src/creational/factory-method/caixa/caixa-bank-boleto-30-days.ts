import { Boleto } from '../boleto.js';

export class CaixaBankBoleto30Days extends Boleto {
  protected interestRate: number = 0.05;
  protected discount: number = 0.05;
  protected lateFee: number = 0.1;
}
