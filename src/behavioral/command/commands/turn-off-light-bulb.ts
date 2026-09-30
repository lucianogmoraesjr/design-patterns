import type { Command } from '../command.js';
import type { LightBulb } from '../light-bulb.js';

export class TurnOffLightBulb implements Command {
  constructor(private lightBulb: LightBulb) {}

  execute(): void {
    this.lightBulb.turnOff();
  }

  undo(): void {
    this.lightBulb.turnOn();
  }
}
