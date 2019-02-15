const Telegraf = require('telegraf')
const { Wit, log } = require('node-wit')
const { filterCommandsMiddleware } = require('./middleware/commandsMiddleware')
const { WitInitiator } = require('./classes/WitInitiator')
const logger = require('./utils/logger')
const { BotResponseController } = require('./controllers/BotResponseController')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const wit = WitInitiator.init(Wit, log, process.env.WIT_TOKEN)

bot.use(async (ctx, next) => filterCommandsMiddleware(ctx, next))

bot.on('text', async ctx => {
  return wit.message(ctx.message.text)
    .then(async (result) => {
      logger.info(`Reply from WIT: ${JSON.stringify(result, null, 2)}`)
      const forecast = await BotResponseController.handle(result)
      logger.info(forecast)
      return ctx.reply(await BotResponseController.handle(result))
    })
})

module.exports = { bot }
