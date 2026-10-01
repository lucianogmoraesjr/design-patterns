import { randomUUID } from 'node:crypto';

type Attr = {
  id?: string;
  name: string;
  path: string;
};

export type SimpleComponent = {
  id: string;
  name: string;
  path: string;
  children?: SimpleComponent[];
};

export abstract class Component {
  public readonly id: string;
  public readonly name: string;
  public readonly path: string;

  constructor(attr: Attr) {
    this.id = attr.id ?? randomUUID();
    this.name = attr.name;
    this.path = attr.path;
  }

  abstract toJSON(): SimpleComponent;
}
