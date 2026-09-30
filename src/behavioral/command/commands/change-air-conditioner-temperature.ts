import type { AirConditioner } from '../air-conditioner.js';
import type { Command } from '../command.js';

export class ChangeAirConditionerTemperature implements Command {
  private currentTemperature: number;
  private prevTemperature: number;

  constructor(private ac: AirConditioner) {
    this.currentTemperature = ac.getTemperature();
    this.prevTemperature = ac.getTemperature();
  }

  public setTemperature(temperature: number) {
    this.prevTemperature = this.currentTemperature;
    this.currentTemperature = temperature;
  }

  public execute(): void {
    this.ac.setTemperature(this.currentTemperature);
  }

  public undo(): void {
    this.ac.setTemperature(this.prevTemperature);
  }
}
