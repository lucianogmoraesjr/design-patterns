import type { Order } from '../order.js';
import type { ScoreHandler } from './score-handler.js';

export abstract class BaseScoreHandler implements ScoreHandler {
  private next: ScoreHandler | undefined;

  public handle(order: Order): number {
    if (this.next) {
      return this.next.handle(order);
    }

    return 0;
  }

  public setNext(next: ScoreHandler): ScoreHandler {
    this.next = next;
    return next;
  }
}
