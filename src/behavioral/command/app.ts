import type { Command } from './command.js';

export class App {
  private commands: Command[] = [];

  public setCommand(command: Command): number {
    const newLength = this.commands.push(command);
    return newLength - 1;
  }

  public onClick(commandId: number) {
    this.commands[commandId].execute();
  }

  public onDoubleClick(commandId: number) {
    this.commands[commandId].undo();
  }

  public getCommand<T extends Command = Command>(commandId: number): T {
    return this.commands[commandId] as T;
  }
}
