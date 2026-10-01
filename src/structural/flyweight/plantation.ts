import type { SpeciesFactory } from './species-factory.js';
import { Tree } from './tree.js';

export class Plantation {
  public trees: Tree[] = [];

  constructor(private readonly speciesFactory: SpeciesFactory) {}

  public addTree(
    x: number,
    y: number,
    name: string,
    color: string,
    maxHeight: number,
  ) {
    const specie = this.speciesFactory.getSpecie(name, color, maxHeight);
    this.trees.push(new Tree(x, y, specie));
  }
}
