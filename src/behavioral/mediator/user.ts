import type { ChatRoomMediator } from './chat-room-mediator.js';

export abstract class User {
  protected chatRoomMediator: ChatRoomMediator | null = null;

  constructor(private readonly _name: string) {}

  public setMediator(chatRoomMediator: ChatRoomMediator): void {
    if (this.chatRoomMediator) {
      this.chatRoomMediator.removeUser(this);
    }

    this.chatRoomMediator = chatRoomMediator;
    this.chatRoomMediator.addUser(this);
  }

  get name() {
    return this._name;
  }

  abstract send(message: string): void;
  abstract receive(message: string): void;
}
