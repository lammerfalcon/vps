import {bot} from "~/server/plugins/tg-bot";
let count = 0;
export default defineTask({
    meta: {
        name: "tg:message",
        description: "send message to telegram bot",
    },
    async run({ payload, context }) {
       await bot.api.sendMessage(952881284, `hello from nitro ${count} times` ).then((res) => {
           count++;
       })

        return { result: "Success" };
    },
});
