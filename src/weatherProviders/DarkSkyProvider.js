const axios = require('axios')
const { weatherProviderParams } = require('../utils/constants')
require('dotenv').config()

/**
  * Forecast from DarkSky (darksky.net)
  */
class DarkSkyProvider {
  constructor (props) {
    if (!props.hasOwnProperty(weatherProviderParams.LATITUDE)) {
      throw new Error(`[DarkSkyProvider.constructor()]: Missing mandatory parameter ${weatherProviderParams.LATITUDE}`)
    }

    if (!props.hasOwnProperty(weatherProviderParams.LONGITUDE)) {
      throw new Error(`[DarkSkyProvider.constructor()]: Missing mandatory parameter ${weatherProviderParams.LONGITUDE}`)
    }

    if (!props.hasOwnProperty(weatherProviderParams.TIME)) {
      throw new Error(`[DarkSkyProvider.constructor()]: Missing mandatory parameter ${weatherProviderParams.TIME}`)
    }

    this.lat = props[weatherProviderParams.LATITUDE]
    this.long = props[weatherProviderParams.LONGITUDE]
    this.timestamp = props[weatherProviderParams.TIME]
  }

  /**
   * @returns {Promise<*>}
   */
  async forecastRequest () {
    const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_TOKEN}/${this.lat},${this.long},${this.timestamp}?exclude=minutely,hourly,daily,alerts,flags&units=auto`
    logger.info(`Generated request link: ${url}`)
    
    return axios({
      method: 'get',
      url
    })
  }
}

module.exports = { DarkSkyProvider }
