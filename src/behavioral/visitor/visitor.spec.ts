import { Department } from './department.js';
import { Product } from './product.js';
import { Profitability } from './profitability.js';
import { Supermarket } from './supermarket.js';

let profitability: Profitability;

describe('Visitor Pattern', () => {
  beforeEach(() => {
    profitability = new Profitability();
  });

  it('should calculate the products profitability', () => {
    const product = new Product('Macarrão', 3.2, 15);
    const productProfitability = product.accept(profitability);
    expect(productProfitability).toBe(0.48);
  });

  it('should calculate the department profitability', () => {
    const department = new Department('Mercearia');
    const product1 = new Product('Macarrão', 3.2, 15);
    const product2 = new Product('Arroz 5Kg', 18, 30);
    department.addProduct(product1);
    department.addProduct(product2);
    const departmentProfitability = department.accept(profitability);
    expect(departmentProfitability).toBe(5.88);
  });

  it('should calculate the supermarket profitability', () => {
    const supermarket = new Supermarket('ACME');
    const department1 = new Department('Mercearia');
    const department2 = new Department('Higiene');
    supermarket.addDepartment(department1);
    supermarket.addDepartment(department2);
    const product1 = new Product('Macarrão', 3.2, 15);
    const product2 = new Product('Arroz 5Kg', 18, 30);
    const product3 = new Product('Papel Higiênico', 11, 35);
    const product4 = new Product('Sabonete', 1.2, 10);
    department1.addProduct(product1);
    department1.addProduct(product2);
    department2.addProduct(product3);
    department2.addProduct(product4);
    const supermarketProfitability = supermarket.accept(profitability);
    expect(supermarketProfitability).toBe(9.85);
  });
});
