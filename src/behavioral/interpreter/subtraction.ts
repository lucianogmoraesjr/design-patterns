import type { Context } from './expression.js';
import { Operation } from './operation.js';

export class Subtraction extends Operation {
  public interpret(context: Context): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}
