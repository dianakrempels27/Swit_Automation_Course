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
  }
});