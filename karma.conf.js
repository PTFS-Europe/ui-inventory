/** @param {import('karma').Config} config */
module.exports = config => config.set({

  client: {
    captureConsole: false,
    mocha: {
      timeout: 10000000
    },
  },
  browserDisconnectTolerance: 1,
  flags: [
    '--disable-gpu',
    '--no-sandbox',
    '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding',
    '--disable-backgrounding-occluded-windows'

  ],
});
