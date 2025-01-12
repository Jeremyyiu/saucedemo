const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
    baseUrl: "https://www.saucedemo.com",
  },
});
