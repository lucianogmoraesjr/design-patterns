import type { Order } from '../../order.js';
import { BaseScoreHandler } from '../base-score-handler.js';

export class Score40BRL extends BaseScoreHandler {
  public override handle(order: Order): number {
    if (order.getAmount() >= 40) {
      return Math.trunc(order.getAmount() / 7);
    }

    return super.handle(order);
  }
}
