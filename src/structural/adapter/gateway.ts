export interface Gateway {
  setAmount(amount: number): void;
  setInstallments(installments: number): void;
  setCardNumber(cardNumber: string): void;
  setCVV(cvv: string): void;
  validateCard(): boolean;
  pay(): boolean;
}
