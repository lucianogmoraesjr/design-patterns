import type { Memento } from './memento.js';

export interface Originator {
  save(): Memento;
}
