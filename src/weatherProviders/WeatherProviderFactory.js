const { DarkSkyProvider } = require('./DarkSkyProvider')
const { weatherServices } = require('../utils/constants')

class WeatherProviderFactory {
  static async create (weatherService, props) {
    const weatherProvidersList = {
      [weatherServices.DARKSKY]: DarkSkyProvider
    }
    let Provider
    try {
      Provider = weatherProvidersList[weatherService]
    } catch (err) {
      throw new Error(`[WeatherProviderFactory.create()]: Expected provider instance. Got: ${err}`)
    }

    if (Provider === undefined) {
      throw new Error(`[WeatherProviderFactory.create()]: Expected weatherService name (string). Got: ${weatherService}`)
    }
    return new Provider(props)
  }
}

module.exports = {
  WeatherProviderFactory
}
