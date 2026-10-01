import type { Prototype } from './prototype.js';

export class Magazine implements Prototype {
  constructor(
    public readonly name: string,
    public readonly edition: number,
  ) {}

  clone(): Prototype {
    return new Magazine(this.name, this.edition);
  }
}
