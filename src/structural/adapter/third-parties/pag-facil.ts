export class PagFacil {
  private amount: number = 0;
  private installments: number = 1;
  private cardNumber: string | null = null;
  private cvv: string | null = null;

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public setInstallments(installments: number): void {
    this.installments = installments;
  }

  public setCardNumber(cardNumber: string): void {
    this.cardNumber = cardNumber;
  }

  public setCVV(cvv: string): void {
    this.cvv = cvv;
  }

  public validateCard(): boolean {
    if (!this.cardNumber && !this.cvv && this.cvv?.length !== 3) return false;
    return true;
  }

  public pay(): boolean {
    if (!this.amount || !this.installments) return false;
    return true;
  }
}
