import type { Memento } from './memento.js';
import type { TextBox } from './text-box.js';

export class TextBoxMemento implements Memento {
  constructor(
    private textBox: TextBox,
    private readonly x: number,
    private readonly y: number,
    private readonly text: string,
    private readonly fontFamily: string,
    private readonly fontSize: number,
    private readonly textAlign: string,
    private readonly fontWeight: string,
  ) {}

  restore(): void {
    this.textBox.x = this.x;
    this.textBox.y = this.y;
    this.textBox.fontFamily = this.fontFamily;
    this.textBox.fontSize = this.fontSize;
    this.textBox.fontWeight = this.fontWeight;
    this.textBox.text = this.text;
    this.textBox.textAlign = this.textAlign;
  }
}
