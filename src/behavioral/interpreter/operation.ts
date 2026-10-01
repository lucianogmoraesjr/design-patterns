import type { Context, Expression } from './expression.js';

export abstract class Operation implements Expression {
  constructor(
    protected readonly left: Expression,
    protected readonly right: Expression,
  ) {}

  abstract interpret(context: Context): number;
}
