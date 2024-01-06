const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  projectId: 'apzb8h',
  defaultCommandTimeout:6000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    saveAllAttempts: false,
  },
  e2e: {
    
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      // implement node event listeners here
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
  },
});
