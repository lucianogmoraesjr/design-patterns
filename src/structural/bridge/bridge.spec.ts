import { AdminMessage } from './admin-message.js';
import { EmailChannel } from './email-channel.js';
import { SMSChannel } from './sms-channel.js';
import { UserMessage } from './user-message.js';

describe('Bridge Pattern', () => {
  it('should send an email message from admin', () => {
    const message = new AdminMessage(
      'First message',
      'Hello, user',
      new EmailChannel(),
    );
    const result = message.send();
    expect(result).toBe('Admin via E-mail: First message - Hello, user');
  });

  it('should send an sms message from admin', () => {
    const message = new AdminMessage(
      'First message',
      'Hello, user',
      new SMSChannel(),
    );
    const result = message.send();
    expect(result).toBe('Admin via SMS: First message - Hello, user');
  });

  it('should send an email message from user', () => {
    const message = new UserMessage(
      'First message',
      'Hello, admin',
      new EmailChannel(),
    );
    const result = message.send();
    expect(result).toBe('User via E-mail: First message - Hello, admin');
  });

  it('should send an sms message from user', () => {
    const message = new UserMessage(
      'First message',
      'Hello, admin',
      new SMSChannel(),
    );
    const result = message.send();
    expect(result).toBe('User via SMS: First message - Hello, admin');
  });
});
