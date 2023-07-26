import { ElementHandle, Page } from '@playwright/test';

// waits for selector to be stable
export const waitForSelectorToBeStable = async (
  page: Page,
  selector: string,
  timeout: number
): Promise<ElementHandle> => {
  const elementHandle = await page.waitForSelector(selector, { timeout });
  await elementHandle.waitForElementState('stable');
  return elementHandle;
};

/**
 * For difficult to click elements
 * Good for time-based clicks, waits on the element
 */
export const forceClickIfPresent = async (
  page: Page,
  selector: string,
  timeToWait: number
) => {
  if ((await page.$(selector)) !== null) {
    await waitForSelectorToBeStable(page, selector, timeToWait);
    await page.click(selector, { force: true });
  }
};
