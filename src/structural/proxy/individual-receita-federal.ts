import type { ReceitaFederal } from './receita-federal.js';
import { sleep } from './sleep.js';

export class IndividualReceitaFederal implements ReceitaFederal {
  private name: string = 'John Doe';
  private cpf: string;
  private age: number = 25;
  private active: boolean = true;

  constructor(cpf: string) {
    this.cpf = cpf;
    sleep(500);
  }

  public getName() {
    sleep(200);
    return this.name;
  }

  public getAge() {
    sleep(300);
    return this.age;
  }

  public isCpfActive() {
    sleep(300);
    return !!this.cpf && this.active;
  }
}
