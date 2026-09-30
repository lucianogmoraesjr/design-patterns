import type { Iterator } from './iterator.js';
import type { Matrix } from './matrix.js';

export class MatrixIterator<T = unknown> implements Iterator<T> {
  private matrix: Matrix<T>;
  private row: number = 0;
  private col: number = 0;
  private rowsLength: number;
  private colsLength: number;

  constructor(matrix: Matrix<T>) {
    this.matrix = matrix;
    this.rowsLength = matrix.getRows();
    this.colsLength = matrix.getCols();
  }

  public hasNext(): boolean {
    return this.row < this.rowsLength;
  }

  public next(): T {
    const item = this.matrix.getItem(this.row, this.col);

    if (this.col === this.colsLength - 1) {
      this.row = this.row + 1;
      this.col = 0;
    } else {
      this.col = this.col + 1;
    }

    return item;
  }
}
