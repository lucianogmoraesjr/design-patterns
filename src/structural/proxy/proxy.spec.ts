import { User } from './user.js';

describe('Proxy Pattern', () => {
  it('should take less than 1 second to instantiate User', () => {
    const start = performance.now();
    const user = new User('John Doe', '12312312312', 25);
    const end = performance.now();
    const elapsed = end - start;

    expect(elapsed).toBeLessThan(100);
    expect(user.getName()).toBe('John Doe');
  });

  it('should lazy load IndividualReceitaFederal when calling validateName', () => {
    const start = performance.now();
    const user = new User('John Doe', '12312312312', 25);
    const end = performance.now();
    const elapsed = end - start;

    expect(elapsed).toBeLessThan(100);
    expect(user.getName()).toBe('John Doe');

    const lazyStart = performance.now();
    const result = user.validateName();
    const lazyEnd = performance.now();
    const lazyElapsed = lazyEnd - lazyStart;

    expect(result).toBeTruthy();
    expect(lazyElapsed).toBeGreaterThanOrEqual(500);
  }, 10_000);
});
