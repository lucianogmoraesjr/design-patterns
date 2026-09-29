import { Bank } from '../bank.js';
import type { Boleto } from '../boleto.js';
import { CaixaBankBoleto10Days } from './caixa-bank-boleto-10-days.js';
import { CaixaBankBoleto30Days } from './caixa-bank-boleto-30-days.js';
import { CaixaBankBoleto60Days } from './caixa-bank-boleto-60-days.js';

export class CaixaBank extends Bank {
  protected createBoleto(dueDate: number, amount: number): Boleto {
    switch (dueDate) {
      case 10:
        return new CaixaBankBoleto10Days(amount);
      case 30:
        return new CaixaBankBoleto30Days(amount);
      case 60:
        return new CaixaBankBoleto60Days(amount);
      default:
        throw new Error('Due date not available');
    }
  }
}
