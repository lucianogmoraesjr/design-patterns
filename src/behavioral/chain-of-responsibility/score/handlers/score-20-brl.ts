import type { Order } from '../../order.js';
import { BaseScoreHandler } from '../base-score-handler.js';

export class Score20BRL extends BaseScoreHandler {
  public handle(order: Order): number {
    if (order.getAmount() >= 20) {
      return Math.trunc(order.getAmount() / 10);
    }

    return super.handle(order);
  }
}
