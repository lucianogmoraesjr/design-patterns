import { User } from './user.js';

export class Member extends User {
  public messagesReceived: string[] = [];

  send(message: string): void {
    this.chatRoomMediator?.sendMessage(message, this);
  }

  receive(message: string): void {
    this.messagesReceived.push(message);
  }
}
