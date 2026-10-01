import { describe, expect, it } from 'vitest';
import { Book } from './book.js';
import { Magazine } from './magazine.js';
import { PrototypeManager } from './prototype-manager.js'; // Ajuste o caminho se necessário
import { Work } from './work.js';

describe('Prototype Pattern', () => {
  describe('Concrete Prototypes', () => {
    it('should clone a Book with the exact same values but different memory reference', () => {
      const originalBook = new Book('Clean Code', 'Robert C. Martin', 464);
      const clonedBook = originalBook.clone();
      expect(clonedBook).toEqual(originalBook);
      expect(clonedBook).not.toBe(originalBook);
      expect(clonedBook).toBeInstanceOf(Book);
    });

    it('should clone a Magazine with the exact same values but different memory reference', () => {
      const originalMagazine = new Magazine('Tech Today', 42);
      const clonedMagazine = originalMagazine.clone();
      expect(clonedMagazine).toEqual(originalMagazine);
      expect(clonedMagazine).not.toBe(originalMagazine);
      expect(clonedMagazine).toBeInstanceOf(Magazine);
    });

    it('should clone a Work with the exact same values but different memory reference', () => {
      const originalWork = new Work(
        'Mona Lisa',
        'Leonardo da Vinci',
        'Painting',
      );
      const clonedWork = originalWork.clone();
      expect(clonedWork).toEqual(originalWork);
      expect(clonedWork).not.toBe(originalWork);
      expect(clonedWork).toBeInstanceOf(Work);
    });
  });

  describe('PrototypeManager', () => {
    it('should return a registered prototype instance when a valid key is provided', () => {
      const manager = new PrototypeManager();
      const bookPrototype = manager.getInstance('book');
      expect(bookPrototype).toBeInstanceOf(Book);
      expect((bookPrototype as Book).name).toBe('Unknown');
    });

    it('should allow cloning the prototype retrieved from the manager', () => {
      const manager = new PrototypeManager();
      const originalPrototype = manager.getInstance('magazine');
      const clonedMagazine = originalPrototype.clone();
      expect(clonedMagazine).toEqual(originalPrototype);
      expect(clonedMagazine).not.toBe(originalPrototype);
    });

    it('should throw an error when trying to get an unregistered prototype', () => {
      const manager = new PrototypeManager();
      expect(() => {
        manager.getInstance('invalid_key');
      }).toThrow('Instance not found');
    });
  });
});
