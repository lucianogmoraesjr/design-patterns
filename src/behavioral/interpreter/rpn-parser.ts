import { Addition } from './addition.js';
import { Digit } from './digit.js';
import { Division } from './division.js';
import type { Expression } from './expression.js';
import { Multiplication } from './multiplication.js';
import { NumberExp } from './number-exp.js';
import { Subtraction } from './subtraction.js';
import { Variable } from './variable.js';

export class RPNParser {
  public static parse(expression: string): Expression {
    const tokens = expression.trim().split(/\s+/);
    const stack: Expression[] = [];

    for (const token of tokens) {
      if (RPNParser.isOperator(token)) {
        const right = stack.pop();
        const left = stack.pop();

        if (!left || !right) {
          throw new Error(`Invalid RPN syntax near operator '${token}'`);
        }

        switch (token) {
          case '+':
            stack.push(new Addition(left, right));
            break;
          case '-':
            stack.push(new Subtraction(left, right));
            break;
          case '*':
            stack.push(new Multiplication(left, right));
            break;
          case '/':
            stack.push(new Division(left, right));
            break;
        }
      } else if (RPNParser.isVariableToken(token)) {
        stack.push(new Variable(token));
      } else {
        stack.push(RPNParser.parseNumber(token));
      }
    }

    if (stack.length !== 1) {
      throw new Error(
        'Invalid RPN syntax: the expression was not completed correctly',
      );
    }

    return stack.pop() as Expression;
  }

  private static isOperator(token: string): boolean {
    return ['+', '-', '*', '/'].includes(token);
  }

  private static isVariableToken(token: string): boolean {
    return /^[a-z]$/.test(token);
  }

  private static parseNumber(str: string): Expression {
    if (!/^\d+$/.test(str)) {
      throw new Error(`Invalid numeric token: ${str}`);
    }

    if (str.length === 1) return new Digit(str);
    return RPNParser.buildNumberExp(str);
  }

  private static buildNumberExp(str: string): NumberExp {
    if (str.length === 1) return new NumberExp(new Digit(str));

    return new NumberExp(
      new Digit(str[0]),
      RPNParser.buildNumberExp(str.slice(1)),
    );
  }
}
