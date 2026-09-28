export interface Observer {
  update(message: string): void;
  getName(): string;
  getEmail(): string;
}
