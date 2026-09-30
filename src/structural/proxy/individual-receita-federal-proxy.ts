import { IndividualReceitaFederal } from './individual-receita-federal.js';
import type { ReceitaFederal } from './receita-federal.js';

export class IndividualReceitaFederalProxy implements ReceitaFederal {
  private individual: ReceitaFederal | null = null;

  constructor(private cpf: string) {}

  private getIndividual() {
    if (!this.individual) {
      this.individual = new IndividualReceitaFederal(this.cpf);
    }

    return this.individual;
  }

  public getName(): string {
    const individual = this.getIndividual();
    return individual.getName();
  }

  public getAge(): number {
    const individual = this.getIndividual();
    return individual.getAge();
  }

  public isCpfActive(): boolean {
    const individual = this.getIndividual();
    return individual.isCpfActive();
  }
}
