import { describe, expect, it } from 'vitest';
import { Plantation } from './plantation.js';
import { SpeciesFactory } from './species-factory.js';

describe('Flyweight Pattern', () => {
  describe('SpeciesFactory', () => {
    it('should return the exact same instance for identical intrinsic states', () => {
      const factory = new SpeciesFactory();

      const oak1 = factory.getSpecie('Oak', 'Green', 10);
      const oak2 = factory.getSpecie('Oak', 'Green', 10);

      expect(oak1).toBe(oak2);
      expect(factory.species.length).toBe(1);
    });

    it('should create a new instance for different intrinsic states', () => {
      const factory = new SpeciesFactory();

      const oak = factory.getSpecie('Oak', 'Green', 10);
      const pine = factory.getSpecie('Pine', 'Dark Green', 15);

      expect(oak).not.toBe(pine);
      expect(factory.species.length).toBe(2);
    });
  });

  describe('Plantation', () => {
    it('should reuse flyweights when planting multiple trees of the same species', () => {
      const factory = new SpeciesFactory();
      const plantation = new Plantation(factory);

      plantation.addTree(1, 1, 'Oak', 'Green', 10);
      plantation.addTree(5, 5, 'Oak', 'Green', 10);
      plantation.addTree(10, 10, 'Oak', 'Green', 10);
      plantation.addTree(2, 2, 'Pine', 'Dark Green', 15);
      plantation.addTree(6, 6, 'Pine', 'Dark Green', 15);

      expect(plantation.trees.length).toBe(5);
      expect(factory.species.length).toBe(2);
      expect(plantation.trees[0].flyweight).toBe(plantation.trees[1].flyweight);
      expect(plantation.trees[0].x).toBe(1);
      expect(plantation.trees[1].x).toBe(5);
    });
  });
});
