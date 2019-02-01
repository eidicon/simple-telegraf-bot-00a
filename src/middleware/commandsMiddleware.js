const { commandsSet } = require('../constants')

/**
 * @description Skips defined commands
 * @method filterCommandsMiddleware
 * @param {object} ctx - context given from API on user input
 * @param {Function} next - middleware
 */
const filterCommandsMiddleware = async (ctx, next) => {
  if (!commandsSet.has(ctx.message.text)) {
    await next()
  }
}

module.exports = {
  filterCommandsMiddleware
}
