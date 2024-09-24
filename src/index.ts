import dotenv from "dotenv";
import { TelegramController } from "./infrastructure/controllers/Telegram.controller";

dotenv.config();

const telegramController = new TelegramController();
telegramController.start();

console.info("Bot de Telegram iniciado...");
