import type { Command } from '../command.js';
import type { LightBulb } from '../light-bulb.js';

export class TurnOnLightBulb implements Command {
  constructor(private lightBulb: LightBulb) {}

  execute(): void {
    this.lightBulb.turnOn();
  }

  undo(): void {
    this.lightBulb.turnOff();
  }
}
