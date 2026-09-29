import type { Interest } from '../interest.js';

export class BancoDoBrasilBankInterest implements Interest {
  getInterest(): number {
    return 0.03;
  }
}
