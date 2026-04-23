import dotenv from 'dotenv';

dotenv.config();

export const BOT_TOKEN = process.env.BOT_TOKEN || process.env.Bot_Token;

export const ADMIN_IDS = [
  // Replace with actual admin IDs (numbers, not usernames)
  // You can get admin IDs by using @userinfobot
  8461161291,  // @nuxwarre
  8461161291,  // @rabbimov_ibrohim
  // 8461161291,  // @zaynet_07 (add if needed)
];

export const ADMIN_USERNAMES = ['@nuxwarre', '@rabbimov_ibrohim', '@zaynet_07'];
