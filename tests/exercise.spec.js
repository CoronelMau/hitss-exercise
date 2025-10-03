import { chromium, test } from '@playwright/test';

test('Search for the top 5 more expensive Playstation 5 options in MercadoLibre', async () => {
  //Declaration of variables
  const searchBoxSelector = '';

  //Step 1. Open the browser.
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const context = await browser.newContext();
  const page = await context.newPage();

  //Step 2. Go to MercadoLibre Mexico
  await test.step('Go to MercadoLibre', async () => {
    await page.goto('https://mercadolibre.com/');
    await page.click('text=México');
  });

  //Step 3. Look for Playstation 5
  await test.step('Look for Playstation 5', async () => {
    await page.fill(
      '[placeholder="Buscar productos, marcas y más…"]',
      'playstation 5'
    );
    await page.keyboard.press('Enter');
    await page.waitForSelector('text=Nuevo');
  });

  //Step 4. Apply the filters of new, local shipping and price
  await test.step('Apply filters', async () => {
    await page.click('text=Nuevo');
    await page.click('text=Local');
    await page.click('.andes-dropdown__standalone-arrow');
    await page.click('text=Mayor precio');
  });

  //Step 5. Get the first 5 products' title and price
  const titles = await page.locator('.poly-component__title').allTextContents();

  const prices = await page
    .locator('.andes-money-amount--cents-superscript')
    .allTextContents();

  const products = titles
    .slice(0, 5)
    .map((title, i) => ({ title, price: prices[i] }));

  //Step 6. Show the final result
  console.table(products);
});
