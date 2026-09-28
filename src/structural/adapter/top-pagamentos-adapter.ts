import type { Gateway } from './gateway.js';
import { TopPagamentos } from './third-parties/top-pagamentos.js';

export class TopPagamentosAdapter implements Gateway {
  private topPagamentos: TopPagamentos;
  private cardNumber: string | null = null;
  private cvv: string | null = null;

  constructor() {
    this.topPagamentos = new TopPagamentos();
  }

  public setAmount(amount: number): void {
    this.topPagamentos.setTotalAmount(amount);
  }

  public setInstallments(installments: number): void {
    this.topPagamentos.setInstallmentsQty(installments);
  }

  public setCardNumber(cardNumber: string): void {
    this.cardNumber = cardNumber;

    if (this.cvv) {
      this.topPagamentos.setCard(this.cardNumber, this.cvv);
    }
  }

  public setCVV(cvv: string): void {
    this.cvv = cvv;

    if (this.cardNumber) {
      this.topPagamentos.setCard(this.cardNumber, this.cvv);
    }
  }

  public validateCard(): boolean {
    return true;
  }

  public pay(): boolean {
    return this.topPagamentos.pay();
  }
}
