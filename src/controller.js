const Flatcher = require('./classes/FlatcherBot')
const { filterCommandsMiddleware } = require('./middleware/commandsMiddleware')
const WitInitiator = require('./classes/WitInitiator')

const bot = Flatcher.init()
const wit = WitInitiator.init()

bot.use(async (ctx, next) => filterCommandsMiddleware(ctx, next))

bot.on('text', async ctx => {
  return wit.message(ctx.message.text)
    .then((result) => {
      return ctx.reply(JSON.stringify(result, null, 2))
    })
})

module.exports = bot
