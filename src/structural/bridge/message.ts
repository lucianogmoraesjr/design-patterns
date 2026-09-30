import type { Channel } from './channel.js';

export abstract class Message {
  constructor(
    protected subject: string,
    protected message: string,
    protected channel: Channel,
  ) {}

  public abstract send(): string;
}
