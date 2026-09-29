import type { Order } from '../order.js';

export interface ScoreHandler {
  handle(order: Order): number;
  setNext(next: ScoreHandler): ScoreHandler;
}
