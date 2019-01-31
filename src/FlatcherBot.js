import BotConstructor from 'telegraf'
require('dotenv').config()

export class Flatcher {
  static async init () {
    return new BotConstructor()
  }
}
