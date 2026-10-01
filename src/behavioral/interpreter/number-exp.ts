import type { Digit } from './digit.js';
import type { Context, Expression } from './expression.js';

export class NumberExp implements Expression {
  constructor(
    public readonly left: Digit,
    public readonly right: NumberExp | null = null,
  ) {}

  public interpret(context: Context): number {
    if (!this.right) return this.left.interpret(context);

    return Number(
      `${this.left.interpret(context)}${this.right.interpret(context)}`,
    );
  }
}
