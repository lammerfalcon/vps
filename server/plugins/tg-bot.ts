    import { Bot } from "grammy";
export default defineNitroPlugin((nitroApp) => {

    const bot = new Bot("5034858680:AAEd6MZhhhOHnhjzkj7pEzkTp_v9dnbVQNk"); // <-- put your bot token between the ""

    bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
    bot.on("message", (ctx) => ctx.reply("Got another message!"));


    bot.start();
})
