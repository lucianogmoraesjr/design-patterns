import type { Interest } from '../interest.js';

export class CaixaBankInterest implements Interest {
  getInterest(): number {
    return 0.02;
  }
}
