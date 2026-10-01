import { History } from './history.js';
import { TextBox } from './text-box.js';

describe('Memento Pattern', () => {
  it('should create and modify a TextBox', () => {
    const textBox = new TextBox({ x: 20, y: 100 });

    expect(textBox.text).toBe('');
    expect(textBox.x).toBe(20);
    expect(textBox.y).toBe(100);

    textBox.text = 'Hello world';
    textBox.y = 50;

    expect(textBox.text).toBe('Hello world');
    expect(textBox.x).toBe(20);
    expect(textBox.y).toBe(50);
  });

  it('should restore previous state of a TextBox', () => {
    const history = new History();
    const textBox = new TextBox({ x: 20, y: 100 });
    history.snapshot(textBox);

    textBox.text = 'Hello world';
    textBox.y = 50;

    expect(textBox.text).toBe('Hello world');
    expect(textBox.x).toBe(20);
    expect(textBox.y).toBe(50);

    history.undo();

    expect(textBox.text).toBe('');
    expect(textBox.x).toBe(20);
    expect(textBox.y).toBe(100);
  });
});
