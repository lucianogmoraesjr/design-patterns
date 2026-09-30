import { randomUUID } from 'node:crypto';

export class AirConditioner {
  private id: string;
  private state: boolean;
  private temperature: number;

  constructor(state?: boolean, temperature?: number, id?: string) {
    this.state = state ?? false;
    this.id = id ?? randomUUID();
    this.temperature = temperature ?? 23;
  }

  public turnOn() {
    this.state = true;
  }

  public turnOff() {
    this.state = false;
  }

  public setTemperature(temperature: number): void {
    this.temperature = temperature;
  }

  public getId(): string {
    return this.id;
  }

  public getState(): boolean {
    return this.state;
  }

  public getTemperature(): number {
    return this.temperature;
  }
}
