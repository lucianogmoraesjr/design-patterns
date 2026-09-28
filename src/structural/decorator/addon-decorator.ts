import { Pizza } from './pizza.js';

export abstract class AddonDecorator extends Pizza {
  constructor(protected readonly pizza: Pizza) {
    super();
  }
}
