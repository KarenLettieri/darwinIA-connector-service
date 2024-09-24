export interface ExpenseRepository {
  createExpense(expense: any): Promise<void>;
}
