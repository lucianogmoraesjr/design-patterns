import type { Context, Expression } from './expression.js';

export class Digit implements Expression {
  constructor(public readonly digit: string) {}

  public interpret(_context: Context): number {
    if (!this.validate()) throw new Error('Invalid digit.');

    return Number(this.digit);
  }

  private validate() {
    return /^[0-9]$/.test(this.digit);
  }
}
