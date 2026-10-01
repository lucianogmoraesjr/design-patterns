import { Component, type SimpleComponent } from './component.js';

export class Folder extends Component {
  private components: Map<string, Component> = new Map();

  public add(component: Component) {
    this.components.set(component.id, component);
  }

  public remove(component: Component) {
    this.components.delete(component.id);
  }

  public getChild(id: string) {
    return this.components.get(id);
  }

  public getComponents() {
    return Array.from(this.components.values());
  }

  public toJSON(): SimpleComponent {
    return {
      id: this.id,
      name: this.name,
      path: this.path,
      children: Array.from(this.components.values()).map((c) => c.toJSON()),
    };
  }
}
