const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I click AddElement button", async () => {
    await $(".example button").click();
});

Then("I can see Delete button", async () => {
    const elem = await $(".added-manually");
    await expect(elem).toHaveTextContaining("Delete");
});

When("I can see Delete button and I click on it", async () => {
    const elem = await $(".added-manually");
    await $(".added-manually").click();
});

Then("I can see that Delete button is gone", async () => {
    const elem = await $(`//*[@id="elements"]`);
    await expect(elem).not.toHaveTextContaining("Delete");
});

When("I click AddElement button {int} times", async (number) => {
    for (var i = 0; i < number; i++) {
    await $(".example button").click();
    }
});

Then("I can see {int} Delete buttons", async (number) => {
    const elem = await $(`.//*[@id="elements"]/button[${number}]`);
    await expect(elem).toHaveTextContaining("Delete");
});
