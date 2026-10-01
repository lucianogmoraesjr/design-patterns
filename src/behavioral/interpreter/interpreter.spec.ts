import { describe, expect, it } from 'vitest';
import { Addition } from './addition.js';
import { Digit } from './digit.js';
import { Division } from './division.js';
import type { Context } from './expression.js';
import { Multiplication } from './multiplication.js';
import { NumberExp } from './number-exp.js';
import { RPNParser } from './rpn-parser.js';
import { Subtraction } from './subtraction.js';
import { Variable } from './variable.js';

describe('Interpreter Pattern', () => {
  it('should interpret a composed NumberExp correctly', () => {
    const digit4 = new Digit('4');
    const digit2 = new Digit('2');
    const number42 = new NumberExp(digit4, new NumberExp(digit2));

    expect(number42.interpret({})).toBe(42);
  });

  it('should evaluate simple mathematical operations', () => {
    const num10 = new NumberExp(new Digit('1'), new NumberExp(new Digit('0')));
    const num5 = new Digit('5');

    const addition = new Addition(num10, num5);
    const subtraction = new Subtraction(num10, num5);
    const multiplication = new Multiplication(num10, num5);
    const division = new Division(num10, num5);

    expect(addition.interpret({})).toBe(15);
    expect(subtraction.interpret({})).toBe(5);
    expect(multiplication.interpret({})).toBe(50);
    expect(division.interpret({})).toBe(2);
  });

  it('should evaluate complex expressions with variables and context', () => {
    const varA = new Variable('a');
    const varB = new Variable('b');
    const varC = new Variable('c');
    const num2 = new Digit('2');

    const sum = new Addition(varA, varB);
    const sub = new Subtraction(varC, num2);
    const formula = new Multiplication(sum, sub);

    const context1: Context = { a: 3, b: 2, c: 10 };
    expect(formula.interpret(context1)).toBe(40);

    const context2: Context = { a: 1, b: 1, c: 4 };
    expect(formula.interpret(context2)).toBe(4);
  });

  it('should throw an error for invalid constraints', () => {
    expect(() => new Digit('10').interpret({})).toThrow('Invalid digit.');
    expect(() => new Variable('X').interpret({})).toThrow('Invalid variable.');

    const varA = new Variable('a');

    expect(() => varA.interpret({})).toThrow(
      'The variable "a" must be defined in context.',
    );
  });

  it('should interpret the RPN tree for the expression: 5 9 + x - 20 2 * 10 - y / -', () => {
    const tree = new Subtraction(
      new Subtraction(
        new Addition(
          new NumberExp(new Digit('5')),
          new NumberExp(new Digit('9')),
        ),
        new Variable('x'),
      ),
      new Division(
        new Subtraction(
          new Multiplication(
            new NumberExp(new Digit('2'), new NumberExp(new Digit('0'))),
            new NumberExp(new Digit('2')),
          ),
          new NumberExp(new Digit('1'), new NumberExp(new Digit('0'))),
        ),
        new Variable('y'),
      ),
    );

    const context = { x: 2, y: 3 };
    const result = tree.interpret(context);

    expect(result).toBe(2);
  });

  it('should parse and evaluate a complex RPN expression correctly', () => {
    const rpnString = '5 9 + x - 20 2 * 10 - y / -';
    const astRoot = RPNParser.parse(rpnString);
    const result = astRoot.interpret({ x: 2, y: 3 });
    expect(result).toBe(2);
  });

  it('should parse and evaluate basic math operators', () => {
    expect(RPNParser.parse('10 5 +').interpret({})).toBe(15);
    expect(RPNParser.parse('10 5 -').interpret({})).toBe(5);
    expect(RPNParser.parse('10 5 *').interpret({})).toBe(50);
    expect(RPNParser.parse('10 5 /').interpret({})).toBe(2);
  });

  it('should throw errors for invalid RPN syntax', () => {
    expect(() => RPNParser.parse('5 A +')).toThrow('Invalid numeric token: A');
    expect(() => RPNParser.parse('5 +')).toThrow(
      "Invalid RPN syntax near operator '+'",
    );
    expect(() => RPNParser.parse('5 5 5 +')).toThrow(
      'Invalid RPN syntax: the expression was not completed correctly',
    );
  });
});
