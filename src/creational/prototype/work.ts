import type { Prototype } from './prototype.js';

export class Work implements Prototype {
  constructor(
    public readonly name: string,
    public readonly author: string,
    public readonly type: string,
  ) {}

  clone(): Prototype {
    return new Work(this.name, this.author, this.type);
  }
}
