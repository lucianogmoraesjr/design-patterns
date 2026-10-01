import { SpeciesFlyweight } from './species-flyweight.js';

export class SpeciesFactory {
  public species: SpeciesFlyweight[] = [];

  public getSpecie(name: string, color: string, maxHeight: number) {
    const exists = this.species.find(
      (s) => s.name === name && s.color === color && s.maxHeight === maxHeight,
    );

    if (exists) return exists;

    const newSpecies = new SpeciesFlyweight(name, color, maxHeight);
    this.species.push(newSpecies);
    return newSpecies;
  }
}
