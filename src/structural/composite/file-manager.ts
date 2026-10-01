import type { Component } from './component.js';

export class FileManager {
  constructor(private root: Component) {}

  public getTree() {
    return this.root.toJSON();
  }
}
