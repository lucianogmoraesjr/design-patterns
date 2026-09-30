import type { Aggregator } from './aggregator.js';
import type { Iterator } from './iterator.js';
import { MatrixIterator } from './matrix-iterator.js';

export class Matrix<T = unknown> implements Aggregator<T> {
  private items: T[][] = [];
  private currentRow: number = 0;
  private currentCol: number = 0;

  constructor(
    private readonly rows: number,
    private readonly cols: number,
  ) {}

  public getIterator(): Iterator<T> {
    return new MatrixIterator(this);
  }

  public addItem(item: T): boolean {
    if (this.currentRow === this.rows - 1 && this.currentCol === this.cols) {
      return false;
    }

    if (this.currentCol === this.cols) {
      this.currentRow++;
      this.currentCol = 0;
    }

    if (!this.items[this.currentRow]) {
      this.items[this.currentRow] = [];
    }

    this.items[this.currentRow][this.currentCol] = item;
    this.currentCol++;
    return true;
  }

  public getItem(row: number, col: number) {
    return this.items[row][col];
  }

  public getRows() {
    return this.rows;
  }

  public getCols() {
    return this.cols;
  }
}
