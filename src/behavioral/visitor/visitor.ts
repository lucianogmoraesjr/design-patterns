import type { Department } from './department.js';
import type { Product } from './product.js';
import type { Supermarket } from './supermarket.js';

export interface Visitor {
  visitSupermarket(supermarket: Supermarket): number;
  visitDepartment(department: Department): number;
  visitProduct(product: Product): number;
}
