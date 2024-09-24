export class User {
  private constructor(readonly id: number, readonly telegramId: string) {
    this.id = id;
    this.telegramId = telegramId;
  }

  static create(id: number, telegramId: string): User {
    return new User(id, telegramId);
  }
}
