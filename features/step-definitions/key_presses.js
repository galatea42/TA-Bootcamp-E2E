const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I enter {string}", async (key) => {
    await $('//*[@id="target"]').click();
    await browser.keys(key)
});
Then("I should see a message saying You entered: {string}", async (text) => {
    const elem = await $('//*[@id="result"]');
    await expect(elem).toHaveTextContaining(`You entered: ${text}`);

})