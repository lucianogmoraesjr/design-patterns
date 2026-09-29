export abstract class Boleto {
  protected amount: number;
  protected abstract interestRate: number;
  protected abstract discount: number;
  protected abstract lateFee: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public calculateInterest() {
    return this.amount * this.interestRate;
  }

  public calculateDiscount() {
    return this.amount * this.discount;
  }

  public calculateLateFee() {
    return this.amount * this.lateFee;
  }
}
