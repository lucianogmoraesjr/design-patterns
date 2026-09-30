import { randomUUID } from 'node:crypto';

export class LightBulb {
  private id: string;
  private state: boolean;

  constructor(state?: boolean, id?: string) {
    this.state = state ?? false;
    this.id = id ?? randomUUID();
  }

  public turnOn(): void {
    this.state = true;
  }

  public turnOff(): void {
    this.state = false;
  }

  public getId(): string {
    return this.id;
  }

  public getState(): boolean {
    return this.state;
  }
}
