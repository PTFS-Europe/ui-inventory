/** @param {import('karma').Config} config */
module.exports = config => config.set({

  client: {
    captureConsole: false,
    mocha: {
      timeout: 10000000
    },
  },
  browserDisconnectTolerance: 10,
  flags: [
    '--disable-gpu',
    '--no-sandbox'
  ],
});
