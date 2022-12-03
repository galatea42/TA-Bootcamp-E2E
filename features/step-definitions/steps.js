const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePageAdress = 'https://www.newegg.com/';

Given("I am on the online shop homepage", async () => {
    await browser.url(homePageAdress)
});

Given("I close the promo banner if it appears", async () => {
    const bannerButton=await $(`.close`); 
    const logo = await $(`.header2021-logo`)
    try {
        await logo.click()
        } catch {
        bannerButton.click()}
});

//Search bar

When("I enter {word} in the search bar", async (word) => {
    const searchButton = await $(`.header2021-search-button`)
    const searchBar =  await $('input[type="search"]') 
    await searchButton.click()
    await searchBar.setValue(word)
});

When("I click the search button", async () => {
    const searchButton =  await $(`.ico.ico-search`)
    await searchButton.click()
});

Then("I can see that at least one item appears", async () => {
    const item = await $(`.item-cell`)
    await expect(item).toBeExisting()
});

//Internet shop logo button

When("I open Today's Best Deals tab", async () => {
    const tabButton = await $(`#trendingBanner_720202`)
    await expect(tabButton).toBeExisting()
    await tabButton.click()
});

When("I click on the Internet shop logo", async () => {
    const logoButton = await $(`.header2021-logo`)
    await expect(logoButton).toBeExisting()
    await logoButton.click()
});

Then("I can see that the main page opened", async () => {
    await expect(browser).toHaveUrl(homePageAdress)
});
