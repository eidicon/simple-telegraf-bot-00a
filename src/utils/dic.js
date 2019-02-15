const awilix = require('awilix')
const { Wit } = require('node-wit')
const { WitInitiator } = require('../classes/WitInitiator')
require('dotenv').config()

const dic = awilix.createContainer({ injectionMode: awilix.InjectionMode.PROXY })

dic.register({
  WitInitiator: awilix.asClass(WitInitiator),
  Wit: awilix.asClass(Wit),
  accessToken: awilix.asValue(process.env.WIT_TOKEN)
})

module.exports = { dic }
