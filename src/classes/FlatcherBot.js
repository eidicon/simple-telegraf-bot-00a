const Telegraf = require('telegraf')
require('dotenv').config()

class Flatcher {
  static init () {
    return new Telegraf(process.env.BOT_TOKEN)
  }
}

module.exports = Flatcher
