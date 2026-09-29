import { Order } from './order.js';
import { ScoreCalculator } from './score/score-calculator.js';

let scoreCalculator: ScoreCalculator;

describe('Chain of Responsibility Pattern', () => {
  beforeEach(() => {
    scoreCalculator = new ScoreCalculator();
  });

  describe('First Fortnight', () => {
    it('should award 1 point per 5 BRL for orders above 69.99', () => {
      const order = new Order(100);
      const score = scoreCalculator.calculateOrderScore(order, 15);
      expect(score).toBe(20);
    });

    it('should award 1 point per 7 BRL for orders between 40.00 and 69.99', () => {
      const order = new Order(50);
      const score = scoreCalculator.calculateOrderScore(order, 15);
      expect(score).toBe(7);
    });

    it('should award 1 point per 10 BRL for orders between 20.00 and 39.99', () => {
      const order = new Order(30);
      const score = scoreCalculator.calculateOrderScore(order, 15);
      expect(score).toBe(3);
    });

    it('should award 0 points for orders below 20.00', () => {
      const order = new Order(10);
      const score = scoreCalculator.calculateOrderScore(order, 15);
      expect(score).toBe(0);
    });
  });

  describe('Second Fortnight', () => {
    it('should award 2 points per 5 BRL for orders above 69.99', () => {
      const order = new Order(100);
      const score = scoreCalculator.calculateOrderScore(order, 16);
      expect(score).toBe(40);
    });

    it('should award 2 points per 7 BRL for orders between 40.00 and 69.99', () => {
      const order = new Order(50);
      const score = scoreCalculator.calculateOrderScore(order, 16);
      expect(score).toBe(14);
    });

    it('should award 2 points per 10 BRL for orders between 20.00 and 39.99', () => {
      const order = new Order(30);
      const score = scoreCalculator.calculateOrderScore(order, 16);
      expect(score).toBe(6);
    });

    it('should award 0 points for orders below 20.00', () => {
      const order = new Order(10);
      const score = scoreCalculator.calculateOrderScore(order, 16);
      expect(score).toBe(0);
    });
  });
});
