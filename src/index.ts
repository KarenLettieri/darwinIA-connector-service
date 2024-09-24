import dotenv from "dotenv";
import express from "express";
import { TelegramController } from "./infrastructure/controllers/Telegram.controller";

dotenv.config();

const telegramController = new TelegramController();
telegramController.start();

console.info("Bot de Telegram iniciado...");

const server = express();
server.use(express.json());

server.get("/health", (req, res) => {
  res.send("OK :)");
});

server.listen(80);
