import { Bot, Context } from 'grammy';
import { ProviderMessagesService } from '../../domain/ports/ProviderMessages.service';

export class TelegramService implements ProviderMessagesService {
  private bot: Bot;

  private constructor() {
    this.bot = new Bot(process.env.TELEGRAM_BOT_TOKEN!);
  }

  async startListening(processMessageCallback: (ctx: Context) => Promise<void>) {
    await this.bot.api.deleteWebhook({ drop_pending_updates: true });
    this.bot.on('message', processMessageCallback);
    this.bot.start();
  }

  async sendMessage(chatId: string, text: string) {
    await this.bot.api.sendMessage(chatId, text);
  }

  public static create(): TelegramService {
    return new TelegramService();
  }
}
