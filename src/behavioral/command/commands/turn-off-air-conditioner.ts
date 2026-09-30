import type { AirConditioner } from '../air-conditioner.js';
import type { Command } from '../command.js';

export class TurnOffAirConditioner implements Command {
  constructor(private ac: AirConditioner) {}

  execute(): void {
    this.ac.turnOff();
  }

  undo(): void {
    this.ac.turnOn();
  }
}
