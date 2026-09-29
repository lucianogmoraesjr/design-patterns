import type { CalculationFactory } from '../calculation-factory.js';
import type { Discount } from '../discount.js';
import type { Interest } from '../interest.js';
import type { LateFee } from '../late-fee.js';
import { BancoDoBrasilBankDiscount } from './banco-do-brasil-bank-discount.js';
import { BancoDoBrasilBankInterest } from './banco-do-brasil-bank-interest.js';
import { BancoDoBrasilBankLateFee } from './banco-do-brasil-bank-late-fee.js';

export class BancoDoBrasilCalculationFactory implements CalculationFactory {
  createInterest(): Interest {
    return new BancoDoBrasilBankInterest();
  }

  createDiscount(): Discount {
    return new BancoDoBrasilBankDiscount();
  }

  createLateFee(): LateFee {
    return new BancoDoBrasilBankLateFee();
  }
}
