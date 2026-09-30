import { Message } from './message.js';

export class UserMessage extends Message {
  public send(): string {
    return `User via ${this.channel.send(this.subject, this.message)}`;
  }
}
