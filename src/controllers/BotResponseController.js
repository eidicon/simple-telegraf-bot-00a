const { WeatherController } = require('./WeatherController')
require('dotenv').config()

class BotResponseController {
  static async handle (responseFromWit) {
    const dict = {
      'weather': WeatherController.getForecast
    }
// TODO: separate parsing
// TODO: add fallback resolving
    const latitude = responseFromWit.entities.location[0].resolved.values[0].coords.lat
    const longitude = responseFromWit.entities.location[0].resolved.values[0].coords.long
    const time = Math.round(new Date(responseFromWit.entities.datetime[0].from.value).getTime() / 1000)

    return dict[responseFromWit.entities.intent[0].value]('darksky', { latitude, longitude, time })
  }
}

module.exports = {
  BotResponseController
}
