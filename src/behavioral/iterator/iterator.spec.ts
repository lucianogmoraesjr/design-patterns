import { List } from './list.js';
import { ListIterator } from './list-iterator.js';
import { Matrix } from './matrix.js';
import { MatrixIterator } from './matrix-iterator.js';

describe('Iterator Pattern', () => {
  describe('List', () => {
    let collection: ListIterator<number>;

    beforeEach(() => {
      const list = new List<number>(9);
      list.addItem(1);
      list.addItem(2);
      list.addItem(3);
      list.addItem(4);
      list.addItem(5);
      list.addItem(6);
      list.addItem(7);
      list.addItem(8);
      list.addItem(9);
      collection = new ListIterator(list);
    });

    it('should iterate correctly in forward order', () => {
      const result: number[] = [];

      while (collection.hasNext()) {
        result.push(collection.next());
      }

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('Matrix', () => {
    let collection: MatrixIterator<number>;

    beforeEach(() => {
      const matrix = new Matrix<number>(3, 3);

      matrix.addItem(1);
      matrix.addItem(2);
      matrix.addItem(3);
      matrix.addItem(4);
      matrix.addItem(5);
      matrix.addItem(6);
      matrix.addItem(7);
      matrix.addItem(8);
      matrix.addItem(9);

      collection = new MatrixIterator(matrix);
    });

    it('should iterate correctly in forward order', () => {
      const result: number[] = [];

      while (collection.hasNext()) {
        result.push(collection.next());
      }

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
});
