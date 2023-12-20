import { test, expect } from '@playwright/test';

test('do the thing', async ({ page }) => { // fml it doesn't happen here
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect.soft(page.locator('.DocSearch-Button')).toHaveText('fwefwef');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // run an assertion that will fail.
  await expect(page.getByRole('heading', { name: 'fwfwef' })).toBeVisible();
});
