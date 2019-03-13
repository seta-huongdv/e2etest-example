exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      waitForNavigation: 'networkidle2',
      chrome: {
        args: ['--no-sandbox']
      },
      show: true,
      windowSize: '1200x1000',
      restart: false,
      keepBrowserState: true,
      keepCookies: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "reportDir": "output/HTML/"
    }
  },
  name: 'e2etest-example'
}