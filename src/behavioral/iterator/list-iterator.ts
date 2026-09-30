import type { Iterator } from './iterator.js';
import type { List } from './list.js';

export class ListIterator<T = unknown> implements Iterator<T> {
  private list: List<T>;
  private index: number = 0;
  private size: number;

  constructor(list: List<T>) {
    this.list = list;
    this.size = list.getSize();
  }

  public hasNext(): boolean {
    return this.index < this.size;
  }

  public next(): T {
    const item = this.list.getItem(this.index);
    this.index++;
    return item;
  }
}
