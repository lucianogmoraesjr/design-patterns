import type { Memento } from './memento.js';
import type { Originator } from './originator.js';

export class History {
  private versions: Memento[] = [];

  public snapshot(originator: Originator) {
    this.versions.push(originator.save());
  }

  public undo() {
    if (this.versions.length === 0) return;
    const memento = this.versions.pop();
    if (!memento) return;
    memento.restore();
  }
}
