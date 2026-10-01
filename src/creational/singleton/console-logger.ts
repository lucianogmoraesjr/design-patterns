import type { Logger } from './logger.js';

export class ConsoleLogger implements Logger {
  private static instance: ConsoleLogger | null = null;
  public logs: string[] = [];

  private constructor() {}

  public static getInstance(): ConsoleLogger {
    if (!ConsoleLogger.instance) {
      ConsoleLogger.instance = new ConsoleLogger();
    }

    return ConsoleLogger.instance;
  }

  public info(message: string): void {
    this.logs.push(message);
  }
}
