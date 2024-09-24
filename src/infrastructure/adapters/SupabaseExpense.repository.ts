import { createClient, SupabaseClient } from "@supabase/supabase-js";

import { ExpenseRepository } from "../../domain/ports/Expense.repository";

export class SupabaseExpenseRepository implements ExpenseRepository {
  private supabaseClient: SupabaseClient;

  private constructor() {
    this.supabaseClient = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_KEY!,
    );
  }
  async createExpense(expense: any) {
    const { data, error } = await this.supabaseClient.from("expenses").insert([
      {
        user_id: expense.userId,
        description: expense.description,
        amount: expense.amount,
        category: expense.category,
      },
    ]);
    if (error) {
      console.error("Error al insertar el gasto:", error);
    }
  }

  static create() {
    return new SupabaseExpenseRepository();
  }
}
