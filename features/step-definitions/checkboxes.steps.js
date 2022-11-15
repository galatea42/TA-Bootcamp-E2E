const { Given, When, Then} = require('@wdio/cucumber-framework');

When("I click on checkbox1", async () => {
    await $('//*[@id="checkboxes"]/input[1]').click();
});

Then("I should see that checkbox is checked", async () => {
    const elem = await $('//*[@id="checkboxes"]/input[1]')
    await expect(elem).toBeSelected()
});

When("I click on checkbox2", async () => {
    await $('//*[@id="checkboxes"]/input[2]').click();
});

Then("I should see that checkbox is unchecked", async () => {
    const elem = await $('//*[@id="checkboxes"]/input[2]')
    await expect(elem).not.toBeSelected()
});

When("I again click on checkbox1", async () => {
    await $('//*[@id="checkboxes"]/input[1]').click();
}); 

Then("I should see that checkbox is unchecked again", async () => {
    const elem = await $('//*[@id="checkboxes"]/input[1]')
    await expect(elem).not.toBeSelected()
});

When("I again click on checkbox2", async () => {
    await $('//*[@id="checkboxes"]/input[2]').click();
}); 

Then("I should see that checkbox is checked again", async () => {
    const elem = await $('//*[@id="checkboxes"]/input[2]')
    await expect(elem).toBeSelected()
});