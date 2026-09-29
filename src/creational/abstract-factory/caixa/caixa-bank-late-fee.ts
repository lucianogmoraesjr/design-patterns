import type { LateFee } from '../late-fee.js';

export class CaixaBankLateFee implements LateFee {
  getLateFee(): number {
    return 0.05;
  }
}
