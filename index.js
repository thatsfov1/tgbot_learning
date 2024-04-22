require('dotenv').config()
const { Bot } = require('grammy')

const bot = new Bot(process.env.BOT_API_KEY)

bot.command('start', async (ctx) => {
    await ctx.reply('Hi, I\'m Fata Fortuna Bot')
})


bot.on('message', async (ctx) => {
    await ctx.reply("Don't know how to reply to it yet")
})



bot.start()