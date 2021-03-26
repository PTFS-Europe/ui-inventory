/** @param {import('karma').Config} config */
module.exports = config => config.set({

  client: {
    captureConsole: false,
    mocha: {
      timeout: 10000
    },
  },
  browserDisconnectTolerance: 10,
  browserDisconnectTimeout: 10000,
  browserNoActivityTimeout: 10000,

  flags: [
    '--disable-gpu',
    '--no-sandbox',
    '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding',
    '--disable-backgrounding-occluded-windows',
    '--sourcemaps=false'
  ],
});
