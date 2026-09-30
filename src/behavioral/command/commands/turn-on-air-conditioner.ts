import type { AirConditioner } from '../air-conditioner.js';
import type { Command } from '../command.js';

export class TurnOnAirConditioner implements Command {
  constructor(private ac: AirConditioner) {}

  execute(): void {
    this.ac.turnOn();
  }

  undo(): void {
    this.ac.turnOff();
  }
}
