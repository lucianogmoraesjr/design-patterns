import type { Channel } from './channel.js';

export class EmailChannel implements Channel {
  send(subject: string, message: string): string {
    return `E-mail: ${subject} - ${message}`;
  }
}
