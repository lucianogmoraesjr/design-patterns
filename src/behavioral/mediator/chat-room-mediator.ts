import type { User } from './user.js';

export interface ChatRoomMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
  removeUser(user: User): void;
}
