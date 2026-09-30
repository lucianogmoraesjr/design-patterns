import { IndividualReceitaFederalProxy } from './individual-receita-federal-proxy.js';
import type { ReceitaFederal } from './receita-federal.js';

export class User {
  private individual: ReceitaFederal;

  constructor(
    private name: string,
    private cpf: string,
    private age: number,
  ) {
    this.individual = new IndividualReceitaFederalProxy(cpf);
  }

  public validateName() {
    return this.name === this.individual.getName();
  }

  public isCpfActive() {
    return this.individual.isCpfActive();
  }

  public checkMajority() {
    return this.age >= 18 && this.age === this.individual.getAge();
  }

  public getName() {
    return this.name;
  }

  public getCpf() {
    return this.cpf;
  }

  public getAge() {
    return this.age;
  }
}
