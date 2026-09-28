import type { Observer } from './observer.js';
import type { Subject } from './subject.js';

export class Partner implements Observer {
  private name: string;
  private email: string;
  private subject: Subject;

  constructor(name: string, email: string, subject: Subject) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  public update(_message: string): void {
    return;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }
}
