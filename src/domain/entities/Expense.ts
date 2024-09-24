export class Expense {
  private constructor(
    readonly id: number,
    readonly userId: number,
    readonly description: string,
    readonly amount: number,
    readonly category: string,
  ) {
    this.id = id;
    this.userId = userId;
    this.description = description;
    this.amount = amount;
    this.category = category;
  }

  static create(
    id: number,
    userId: number,
    description: string,
    amount: number,
    category: string,
  ): Expense {
    return new Expense(id, userId, description, amount, category);
  }
}
