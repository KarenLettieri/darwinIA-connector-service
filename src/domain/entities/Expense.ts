export class Expense {
  private constructor(readonly id: number, readonly telegramId: string) {
    this.telegramId = telegramId;
  }

  static create(id: number, telegramId: string): User {
    return new User(id, telegramId);
  }
}
