import { Boleto } from '../boleto.js';

export class CaixaBankBoleto10Days extends Boleto {
  protected interestRate: number = 0.02;
  protected discount: number = 0.1;
  protected lateFee: number = 0.05;
}
