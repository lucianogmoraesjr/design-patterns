import { User } from './user.js';

export class ChatBot extends User {
  public messagesReceived: string[] = [];
  private lastUser: User;

  constructor() {
    super('ChatBot');
    this.lastUser = this;
  }

  public validateMessage(user: User): boolean {
    if (this.lastUser === user) {
      this.send(`A message from ${user.name} was declined.`);
      return false;
    }

    this.lastUser = user;
    return true;
  }

  send(message: string): void {
    this.chatRoomMediator?.sendMessage(message, this);
  }

  receive(message: string): void {
    this.messagesReceived.push(message);
  }
}
