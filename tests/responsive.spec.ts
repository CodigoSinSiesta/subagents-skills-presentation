import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('hamburger menu visible at 768px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    const hamburger = page.locator('.hamburger-btn');
    await expect(hamburger).toBeVisible();
  });

  test('nav buttons visible at 1280px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    const prevBtn = page.locator('.nav-btn-prev');
    const nextBtn = page.locator('.nav-btn-next');
    
    await expect(prevBtn).toBeVisible();
    await expect(nextBtn).toBeVisible();
  });

  test('no horizontal overflow at 375px viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const horizontalOverflow = await page.evaluate(() => {
      const docWidth = document.documentElement.scrollWidth;
      const winWidth = window.innerWidth;
      return docWidth > winWidth;
    });
    
    expect(horizontalOverflow).toBe(false);
  });
});
