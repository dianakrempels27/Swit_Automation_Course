const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://stage3.switschooltest.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder:'cypress/screenshots',
    videosFolder:'cypress/videos',
    video: true,
    reporter: 'mochawesome',
    "reporterOptions": {
      "charts": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/reports",
      "reportFilename": "report",
      "overwrite": false,
      "screenshotOnRunFailure": true
  },
  }
});