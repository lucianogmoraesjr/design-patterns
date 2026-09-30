import { Message } from './message.js';

export class AdminMessage extends Message {
  public send(): string {
    return `Admin via ${this.channel.send(this.subject, this.message)}`;
  }
}
