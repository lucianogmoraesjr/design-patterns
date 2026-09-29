import type { Order } from '../order.js';
import { Score20BRL } from './handlers/score-20-brl.js';
import { Score40BRL } from './handlers/score-40-brl.js';
import { Score70BRL } from './handlers/score-70-brl.js';

export class ScoreCalculator {
  public calculateOrderScore(order: Order, day: number) {
    const score70 = new Score70BRL();
    const score40 = new Score40BRL();
    const score20 = new Score20BRL();
    score70.setNext(score40).setNext(score20);
    if (day >= 16 && day <= 31) return score70.handle(order) * 2;
    return score70.handle(order);
  }
}
