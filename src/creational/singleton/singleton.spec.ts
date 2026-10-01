import { ConsoleLogger } from './console-logger.js';

describe('Singleton Pattern', () => {
  it('should always return the exact same instance', () => {
    const instance1 = ConsoleLogger.getInstance();
    const instance2 = ConsoleLogger.getInstance();
    expect(instance2).toBe(instance1);
  });

  it('should share the exact same state across different variables', () => {
    const instance1 = ConsoleLogger.getInstance();
    const instance2 = ConsoleLogger.getInstance();
    instance1.info('System initialized');
    expect(instance2.logs).toContain('System initialized');
    expect(instance1.logs.length).toBe(1);
    expect(instance2.logs.length).toBe(1);
  });
});
