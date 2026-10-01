import type { Context } from './expression.js';
import { Operation } from './operation.js';

export class Division extends Operation {
  public interpret(context: Context): number {
    return Math.trunc(
      this.left.interpret(context) / this.right.interpret(context),
    );
  }
}
