export class TopPagamentos {
  private amount: number = 0;
  private installments: number = 1;
  private cardNumber: string | null = null;
  private cvv: string | null = null;

  public setTotalAmount(amount: number): void {
    this.amount = amount;
  }

  public setInstallmentsQty(installments: number): void {
    this.installments = installments;
  }

  public setCard(cardNumber: string, cvv: string): void {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
  }

  public pay(): boolean {
    if (!this.cardNumber && !this.cvv && this.cvv?.length !== 3) return false;
    if (!this.amount || !this.installments) return false;
    return true;
  }
}
