const { Given, When, Then } = require('@wdio/cucumber-framework');

When("Place the cursor on hover {int}", async (number) => {
    await $(`//*[@id="content"]/div/div[${number}]`).moveTo();
});

Then("I should see {string} on hover {int}", async (name, number) => {
    const elem = await $(`//*[@id="content"]/div/div[${number}]/div/h5`)
    await expect(elem).toHaveTextContaining(`${name}`);
})

When("I place the cursor on hover {int} and click on View Profile", async (number) => {
    await $(`//*[@id="content"]/div/div[${number}]`).moveTo();
    await $(`//*[@id="content"]/div/div[${number}]/div/a`).click();
});

Then("I should see Not Found on the new page", async () => {
    const elem = await $(`/html/body/h1`)
    await expect(elem).toHaveTextContaining("Not Found");
})