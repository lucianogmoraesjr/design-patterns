import { Component, type SimpleComponent } from './component.js';

export class File extends Component {
  public toJSON(): SimpleComponent {
    return {
      id: this.id,
      name: this.name,
      path: this.path,
    };
  }
}
