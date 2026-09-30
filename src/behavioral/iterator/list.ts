import type { Aggregator } from './aggregator.js';
import type { Iterator } from './iterator.js';
import { ListIterator } from './list-iterator.js';

export class List<T = unknown> implements Aggregator<T> {
  private items: T[] = [];

  constructor(private readonly size: number) {}

  public getIterator(): Iterator<T> {
    return new ListIterator(this);
  }

  public addItem(item: T): boolean {
    if (this.items.length < this.size) {
      this.items.push(item);
      return true;
    }
    return false;
  }

  public getItem(index: number) {
    return this.items[index];
  }

  public getSize() {
    return this.size;
  }
}
