import type { Order } from '../../order.js';
import { BaseScoreHandler } from '../base-score-handler.js';

export class Score70BRL extends BaseScoreHandler {
  public handle(order: Order): number {
    if (order.getAmount() >= 70) {
      return Math.trunc(order.getAmount() / 5);
    }

    return super.handle(order);
  }
}
