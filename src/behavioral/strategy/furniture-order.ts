import { Order } from './order.js';
import type { Shipping } from './shipping.js';

export class FurnitureOrder extends Order {
  private departmentName: string;

  constructor(amount: number, shipping: Shipping) {
    super(amount, shipping);
    this.departmentName = 'Furniture';
  }

  public getDepartmentName(): string {
    return this.departmentName;
  }
}
