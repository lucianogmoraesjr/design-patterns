import type { LateFee } from '../late-fee.js';

export class BancoDoBrasilBankLateFee implements LateFee {
  getLateFee(): number {
    return 0.02;
  }
}
