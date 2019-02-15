class WitInitiator {
  static init (Wit, log, witToken) {
    return new Wit({
      accessToken: witToken,
      logger: new log.Logger(log.DEBUG)
    })
  }
}

module.exports = { WitInitiator }
