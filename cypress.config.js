const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "nr2x9z",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Projeto do curso de Cypress',
      reportTitle: 'Projeto do curso de Cypress - Qazando'
    },
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
