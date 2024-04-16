    import { Bot } from "grammy";
    export const bot = new Bot("7194686957:AAEca_chIh_MKyQEyzjcQn6DRhGwCJtzXpY");
    export default defineNitroPlugin(async (nitroApp) => {

    bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
    bot.on("message", (ctx) => ctx.reply("Got another message!"));

//send message to user
    bot.command("send", async (ctx) => {
        await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
            // Make Telegram clients automatically show a reply interface to the user.
            reply_markup: { force_reply: true },
        });
    });
    bot.command("start", async (ctx) => {
        await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
            // Make Telegram clients automatically show a reply interface to the user.
            reply_markup: { force_reply: true },
        });
    });
    const chat = await bot.api.getChat(7194686957)
        // console.log(chat)
        await bot.api.sendMessage(952881284, 'hello from nitro')
        await bot.start();

})
