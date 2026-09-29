import type { CalculationFactory } from './calculation-factory.js';
import type { Discount } from './discount.js';
import type { Interest } from './interest.js';
import type { LateFee } from './late-fee.js';

export class Boleto {
  private amount: number;
  private interest: Interest;
  private discount: Discount;
  private lateFee: LateFee;

  constructor(amount: number, calculationFactory: CalculationFactory) {
    this.amount = amount;
    this.interest = calculationFactory.createInterest();
    this.discount = calculationFactory.createDiscount();
    this.lateFee = calculationFactory.createLateFee();
  }

  public calculateInterest() {
    return this.amount * this.interest.getInterest();
  }

  public calculateDiscount() {
    return this.amount * this.discount.getDiscount();
  }

  public calculateLateFee() {
    return this.amount * this.lateFee.getLateFee();
  }
}
