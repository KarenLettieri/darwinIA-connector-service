import axios from "axios";
import { ExpenseRepository } from "../../domain/ports/Expense.repository";
import { UserRepository } from "../../domain/ports/User.repository";

export class ProcessMessageUseCase {
  private constructor(
    readonly expenseRepository: ExpenseRepository,
    readonly userRepository: UserRepository,
  ) {}

  async execute(telegramId: number, message: string) {
    const user = await this.userRepository.getUserByProviderId(
      String(telegramId),
    );

    if (!user) return "El usuario no esta en la whitelist";

    const response = await axios.post(`${process.env.API_BOT_URL}/process`, {
      telegram_id: telegramId,
      text: message,
    });

    const botResponse = response.data.response;

    const expenseBody = botResponse.json;

    if (!expenseBody.category) return botResponse.message;

    await this.expenseRepository.createExpense({
      ...expenseBody,
      userId: user.id,
    });

    return botResponse.message;
  }

  static create(
    expenseRepository: ExpenseRepository,
    userRepository: UserRepository,
  ) {
    return new ProcessMessageUseCase(expenseRepository, userRepository);
  }
}
