const commands = {
  START: '/start',
  STOP: '/stop'
}

const weatherServices = {
  DARKSKY: 'darksky'
}

const weatherProviderParams = {
  LATITUDE: 'latitude',
  LONGITUDE: 'longitude',
  TIME: 'time'
}

const commandsSet = new Set([ commands.START, commands.STOP ])

module.exports = {
  commands,
  commandsSet,
  weatherServices,
  weatherProviderParams
}
