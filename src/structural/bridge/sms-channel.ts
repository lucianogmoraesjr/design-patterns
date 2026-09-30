import type { Channel } from './channel.js';

export class SMSChannel implements Channel {
  send(subject: string, message: string): string {
    return `SMS: ${subject} - ${message}`;
  }
}
