const { WeatherProviderFactory } = require('../weatherProviders/WeatherProviderFactory')
const logger = require('../utils/logger')

class WeatherController {
  /**
   * @method getForecast
   * @param {string} weatherService
   * @param {object} props
   */
  static async getForecast (weatherService, props) {
    let provider
    try {
      provider = await WeatherProviderFactory.create(weatherService, props)
    } catch (err) {
      const error = `Error: ${err}`
      logger.error(error)
      throw new Error(error)
    }
    let rawForecast
    try {
      rawForecast = provider.forecastRequest()
    } catch (err) {
      logger.error(err)
    }
    return rawForecast
  }
}

module.exports = { WeatherController }
