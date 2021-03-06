const { Wit, log } = require('node-wit')
require('dotenv').config()

class WitInitiator {
  static init () {
    return new Wit({
      accessToken: process.env.WIT_TOKEN,
      logger: new log.Logger(log.DEBUG)
    })
  }
}

module.exports = WitInitiator
