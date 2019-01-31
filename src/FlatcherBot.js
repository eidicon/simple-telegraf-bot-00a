import BotConstructor from 'telegraf'
require('dotenv').config()

export class Flatcher {
  constructor () {
    this.bot = new BotConstructor()
  }
}
