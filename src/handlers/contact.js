import { contactAdminKeyboard } from '../../keyboards/keyboards.js';

export const contactHandler = (bot) => {
  bot.action('contact_us', async (ctx) => {
    try {
      const text = 
        '✍️ *Aloqa*\n\n' +
        '👨‍💻 *Adminimiz bilan bog\'lanish:*\n\n' +
        '• @zaynet_07\n\n' +
        '⏰ *Ish vaqti:* 09:00 - 22:00\n' +
        '📞 *Tezkor javob garantilangan!*\n\n' +
        '👇 Admin bilan bog\'lanish uchun tugmani bosing:';
      
      await ctx.replyWithMarkdown(text, {
        reply_markup: contactAdminKeyboard
      });
    } catch (error) {
      console.error('Contact edit error:', error);
    }
    try {
      await ctx.answerCbQuery();
    } catch (error) {
      console.error('Contact answer callback error:', error);
    }
  });
};
