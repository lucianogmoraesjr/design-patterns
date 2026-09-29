import type { Discount } from './discount.js';
import type { Interest } from './interest.js';
import type { LateFee } from './late-fee.js';

export interface CalculationFactory {
  createInterest(): Interest;
  createDiscount(): Discount;
  createLateFee(): LateFee;
}
