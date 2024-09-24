export interface ProviderMessagesService {
  startListening(processMessageCallback: (ctx: unknown) => Promise<void>): void;
  sendMessage(chatId: string, text: string): Promise<void>;
}
