import { Page } from '@playwright/test';
import { waitForSelectorToBeStable } from '../tests/helpers/helpers';

export default class LoginRegisterPage {
  readonly loginRegisterButton: string;
  readonly signupLoginButton: string;
  readonly signupNameInput: string;
  readonly signupEmailInput: string;
  readonly signupButton: string;
  readonly registerForm: string;

  constructor() {
    this.loginRegisterButton = 'a[href="/login"]';
    this.signupLoginButton = 'input[data-qa="signup-login-button"]';
    this.signupNameInput = 'input[data-qa="signup-name"]';
    this.signupEmailInput = 'input[data-qa="signup-email"]';
    this.signupButton = 'button[data-qa="signup-button"]';
    this.registerForm = 'div[class="login-form"]';
  }

  async clickLoginRegisterButton(page: Page) {
    await waitForSelectorToBeStable(page, this.loginRegisterButton, 1000);
    await page.locator(this.loginRegisterButton).click();
  }

  async enterName(page: Page, name: string) {
    await page.locator(this.signupNameInput).fill(name);
  }

  async enterEmail(page: Page, email: string) {
    await page.locator(this.signupEmailInput).fill(email);
  }

  async clickSignUpButton(page: Page) {
    await page.locator(this.signupButton).click();
  }
}
