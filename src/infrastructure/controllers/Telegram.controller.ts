import { Context } from "grammy";
import { ProcessMessageUseCase } from "../../application/use-cases/ProcessMessage.usecase";
import { TelegramService } from "../adapters/Telegram.service";
import { SupabaseExpenseRepository } from "../adapters/SupabaseExpense.repository";
import { SupabaseUserRepository } from "../adapters/SupabaseUser.repository";

export class TelegramController {
  private readonly telegramService: TelegramService;
  private readonly processMessageUseCase: ProcessMessageUseCase;

  constructor() {
    this.telegramService = TelegramService.create();
    this.processMessageUseCase = ProcessMessageUseCase.create(
      SupabaseExpenseRepository.create(),
      SupabaseUserRepository.create(),
    );
  }

  async handleMessage(ctx: Context) {
    const message = ctx.message?.text || "";
    const telegramId = ctx.message?.from?.id || 0;

    try {
      const result = await this.processMessageUseCase.execute(
        telegramId,
        message,
      );
      await this.telegramService.sendMessage(telegramId.toString(), result);
    } catch (error) {
      console.error("Error al procesar el mensaje:", error);
      await this.telegramService.sendMessage(
        telegramId.toString(),
        "Hubo un problema al procesar tu mensaje.",
      );
    }
  }

  start() {
    this.telegramService.startListening((ctx) => this.handleMessage(ctx));
  }
}
