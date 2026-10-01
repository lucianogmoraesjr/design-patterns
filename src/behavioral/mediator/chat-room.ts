import type { ChatBot } from './chat-bot.js';
import type { ChatRoomMediator } from './chat-room-mediator.js';
import type { User } from './user.js';

export class ChatRoom implements ChatRoomMediator {
  private users: User[] = [];

  constructor(
    private readonly chatBot: ChatBot,
    private readonly _name: string,
  ) {
    this.chatBot.setMediator(this);
  }

  sendMessage(message: string, user: User): void {
    if (!this.chatBot.validateMessage(user)) return;

    for (const u of this.users) {
      if (u !== user) {
        u.receive(message);
      }
    }
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(user: User): void {
    this.users.splice(this.users.indexOf(user), 1);
  }

  get name() {
    return this._name;
  }
}
