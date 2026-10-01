import { ChatBot } from './chat-bot.js';
import { ChatRoom } from './chat-room.js';
import { Member } from './member.js';

describe('Mediator Pattern', () => {
  let chatBot: ChatBot;
  let chatRoom: ChatRoom;
  let alice: Member;
  let bob: Member;
  let charlie: Member;

  beforeEach(() => {
    chatBot = new ChatBot();
    chatRoom = new ChatRoom(chatBot, 'Sala Geral');
    alice = new Member('Alice');
    bob = new Member('Bob');
    charlie = new Member('Charlie');
    alice.setMediator(chatRoom);
    bob.setMediator(chatRoom);
    charlie.setMediator(chatRoom);
  });

  it('should send the message to all other users, except the sender', () => {
    const message = 'Olá, pessoal!';
    alice.send(message);
    expect(alice.messagesReceived).toEqual([]);
    expect(bob.messagesReceived).toEqual([message]);
    expect(charlie.messagesReceived).toEqual([message]);
  });

  it('should block consecutive messages from the same user by the ChatBot', () => {
    const firstMessage = 'First message';
    alice.send(firstMessage);

    expect(bob.messagesReceived).toEqual([firstMessage]);
    expect(charlie.messagesReceived).toEqual([firstMessage]);

    alice.send('Second message (consecutive)');

    expect(alice.messagesReceived).toEqual([
      'A message from Alice was declined.',
    ]);
    expect(bob.messagesReceived).toEqual([
      firstMessage,
      'A message from Alice was declined.',
    ]);
    expect(charlie.messagesReceived).toEqual([
      firstMessage,
      'A message from Alice was declined.',
    ]);
  });
});
