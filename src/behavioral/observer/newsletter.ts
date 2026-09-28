import type { Observer } from './observer.js';
import type { Subject } from './subject.js';

export class Newsletter implements Subject {
  private observers: Observer[] = [];
  private messages: string[] = [];

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  public notifyObservers(): void {
    for (const o of this.observers) {
      o.update(this.messages[this.messages.length - 1]);
    }
  }

  public addMessage(message: string) {
    this.messages.push(message);
    this.notifyObservers();
  }
}
