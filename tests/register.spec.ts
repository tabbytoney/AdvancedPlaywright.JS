import { test, expect, Page } from '@playwright/test';

import LoginPage from '../pages/loginRegisterPage';

const loginPage = new LoginPage();

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/login`);
});

test.describe('Register page', () => {
  test('should load without error', async ({ page }) => {
    await loginPage.clickLoginRegisterButton(page);
    await loginPage.enterName(page, 'Scout');
    await loginPage.enterEmail(page, 'scout@example.com');
    await loginPage.clickSignUpButton(page);
    await page.locator(loginPage.registerForm).isVisible();
  });
});
