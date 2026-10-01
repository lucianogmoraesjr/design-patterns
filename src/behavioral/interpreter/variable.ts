import type { Context, Expression } from './expression.js';

export class Variable implements Expression {
  constructor(public readonly variable: string) {}

  public interpret(context: Context): number {
    if (!this.validate()) throw new Error('Invalid variable.');

    const variable = context[this.variable];

    if (variable === undefined) {
      throw new Error(
        `The variable "${this.variable}" must be defined in context.`,
      );
    }

    return variable;
  }

  private validate() {
    return /^[a-z]$/.test(this.variable);
  }
}
