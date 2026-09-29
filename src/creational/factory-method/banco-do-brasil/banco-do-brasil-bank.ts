import { Bank } from '../bank.js';
import type { Boleto } from '../boleto.js';
import { BancoDoBrasilBankBoleto10Days } from './banco-do-brasil-bank-boleto-10-days.js';
import { BancoDoBrasilBankBoleto30Days } from './banco-do-brasil-bank-boleto-30-days.js';
import { BancoDoBrasilBankBoleto60Days } from './banco-do-brasil-bank-boleto-60-days.js';

export class BancoDoBrasilBank extends Bank {
  protected createBoleto(dueDate: number, amount: number): Boleto {
    switch (dueDate) {
      case 10:
        return new BancoDoBrasilBankBoleto10Days(amount);
      case 30:
        return new BancoDoBrasilBankBoleto30Days(amount);
      case 60:
        return new BancoDoBrasilBankBoleto60Days(amount);
      default:
        throw new Error('Due date not available');
    }
  }
}
