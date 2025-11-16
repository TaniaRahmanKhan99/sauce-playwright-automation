import { test, expect } from '@playwright/test';

test('Sauce Demo - Add product to cart and verify', async ({ page }) => {
  
  // 1. Open the website
  await page.goto('https://www.saucedemo.com/');

  // 2. Login with valid credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 3. Add first product to cart
  const firstProductName = await page.locator('.inventory_item_name').first().innerText();
  await page.locator('.btn_inventory').first().click();

  // 4. Open cart
  await page.click('.shopping_cart_link');

  // 5. Verify product name in cart
  const cartProductName = await page.locator('.inventory_item_name').innerText();
  await expect(cartProductName).toBe(firstProductName);

  // 6. Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
});
