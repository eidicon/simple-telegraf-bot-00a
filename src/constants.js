const commands = {
  START: '/start',
  STOP: '/stop'
}
const commandsSet = new Set([ commands.START, commands.STOP ])

module.exports = {
  commands,
  commandsSet
}
