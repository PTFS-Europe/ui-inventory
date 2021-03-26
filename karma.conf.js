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
// https://stackoverflow.com/questions/62889702/headlesschrome-84-0-4147-linux-0-0-0-error
--disable-dev-shm-usage
*/
  ],
//   browsers: ['Chrome_no_sandbox'],
//   customLaunchers: {
//     Chrome_no_sandbox: {
//       base: 'ChromeHeadless',
//       flags: ['--no-sandbox']
//     }
//   },

});
