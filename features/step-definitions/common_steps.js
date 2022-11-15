const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`);
    await browser.pause(5000)
});