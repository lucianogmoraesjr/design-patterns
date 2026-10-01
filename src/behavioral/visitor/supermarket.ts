import type { Department } from './department.js';
import type { Element } from './element.js';
import type { Visitor } from './visitor.js';

export class Supermarket implements Element {
  public readonly departments: Department[] = [];

  constructor(public readonly name: string) {}

  public addDepartment(department: Department) {
    this.departments.push(department);
  }

  public accept(visitor: Visitor): number {
    return visitor.visitSupermarket(this);
  }
}
