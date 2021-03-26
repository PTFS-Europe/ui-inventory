/** @param {import('karma').Config} config */
process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = config => config.set({

  client: {
    captureConsole: false,
    mocha: {
      timeout: 10000
    },
  },
  browserDisconnectTolerance: 10,
//  browserDisconnectTimeout: 10000,
//  browserNoActivityTimeout: 10000,

  flags: [
    '--disable-gpu',
    '--no-sandbox'
/*
    '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding',
    '--disable-backgrounding-occluded-windows',
    '--sourcemaps=false',
    '--source-maps=false',
    '--js-flags=--max-old-space-size=8196'
*/
  ],
});
