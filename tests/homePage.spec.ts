import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('should load without error', async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    const title = page.locator('img[src="/static/images/home/logo.png"]');
    await expect(title).toBeVisible();
  });
});
