export interface Channel {
  send(subject: string, message: string): string;
}
