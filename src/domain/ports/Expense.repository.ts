import { Expense } from "../entities/Expense";

export interface ExpenseRepository {
  createExpense(expense: Partial<Expense>): Promise<void>;
}
