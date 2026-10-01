import { Book } from './book.js';
import { Magazine } from './magazine.js';
import type { Prototype } from './prototype.js';
import { Work } from './work.js';

export class PrototypeManager {
  private prototypes: Map<string, Prototype> = new Map();

  constructor() {
    this.prototypes.set('book', new Book('Unknown', 'Unknown', 0));
    this.prototypes.set('magazine', new Magazine('Unknown', 0));
    this.prototypes.set('work', new Work('Unknown', 'Unknown', 'Unknown'));
  }

  public getInstance(key: string): Prototype {
    const instance = this.prototypes.get(key);
    if (!instance) throw new Error('Instance not found');
    return instance;
  }
}
