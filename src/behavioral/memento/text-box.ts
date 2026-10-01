import type { Memento } from './memento.js';
import type { Originator } from './originator.js';
import { TextBoxMemento } from './text-box-memento.js';

type Attr = {
  x: number;
  y: number;
  text?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: string;
  fontWeight?: string;
};

export class TextBox implements Originator {
  public x: number;
  public y: number;
  public text: string;
  public fontFamily: string;
  public fontSize: number;
  public textAlign: string;
  public fontWeight: string;

  constructor(attr: Attr) {
    this.x = attr.x;
    this.y = attr.y;
    this.text = attr.text ?? '';
    this.fontFamily = attr.fontFamily ?? 'Arial';
    this.fontSize = attr.fontSize ?? 16;
    this.textAlign = attr.textAlign ?? 'left';
    this.fontWeight = attr.fontWeight ?? 'normal';
  }

  public save(): Memento {
    return new TextBoxMemento(
      this,
      this.x,
      this.y,
      this.text,
      this.fontFamily,
      this.fontSize,
      this.textAlign,
      this.fontWeight,
    );
  }
}
