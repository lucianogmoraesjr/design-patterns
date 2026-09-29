import type { CalculationFactory } from '../calculation-factory.js';
import type { Discount } from '../discount.js';
import type { Interest } from '../interest.js';
import type { LateFee } from '../late-fee.js';
import { CaixaBankDiscount } from './caixa-bank-discount.js';
import { CaixaBankInterest } from './caixa-bank-interest.js';
import { CaixaBankLateFee } from './caixa-bank-late-fee.js';

export class CaixaCalculationFactory implements CalculationFactory {
  createInterest(): Interest {
    return new CaixaBankInterest();
  }

  createDiscount(): Discount {
    return new CaixaBankDiscount();
  }

  createLateFee(): LateFee {
    return new CaixaBankLateFee();
  }
}
