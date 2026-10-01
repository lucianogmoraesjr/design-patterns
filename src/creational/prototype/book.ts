import type { Prototype } from './prototype.js';

export class Book implements Prototype {
  constructor(
    public readonly name: string,
    public readonly author: string,
    public readonly pages: number,
  ) {}

  clone(): Prototype {
    return new Book(this.name, this.author, this.pages);
  }
}
