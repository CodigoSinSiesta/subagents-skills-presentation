import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('ArrowRight advances slides (counter increments)', async ({ page }) => {
    const counter = page.locator('.slide-counter');
    
    await expect(counter).toContainText('1/16');
    
    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText('2/16');
    
    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText('3/16');
  });

  test('ArrowLeft goes back (counter decrements)', async ({ page }) => {
    const counter = page.locator('.slide-counter');
    
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText('3/16');
    
    await page.keyboard.press('ArrowLeft');
    await expect(counter).toContainText('2/16');
    
    await page.keyboard.press('ArrowLeft');
    await expect(counter).toContainText('1/16');
  });

  test('hash URL navigation works (#/closing → slide 16)', async ({ page }) => {
    await page.goto('/#/closing');
    
    const counter = page.locator('.slide-counter');
    await expect(counter).toContainText('16/16');
  });

  test('counter shows correct "N/16" format', async ({ page }) => {
    const counter = page.locator('.slide-counter');
    
    await expect(counter).toContainText('1/16');
    
    // Navigate to different slides and verify format
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('ArrowRight');
    }
    await expect(counter).toContainText('6/16');
  });

  test('cannot go below slide 1', async ({ page }) => {
    const counter = page.locator('.slide-counter');
    
    // Already on slide 1
    await expect(counter).toContainText('1/16');
    
    // Try to go back
    await page.keyboard.press('ArrowLeft');
    await expect(counter).toContainText('1/16');
  });

  test('cannot go above slide 16', async ({ page }) => {
    // Navigate to last slide via hash
    await page.goto('/#/closing');
    
    const counter = page.locator('.slide-counter');
    await expect(counter).toContainText('16/16');
    
    // Try to go forward
    await page.keyboard.press('ArrowRight');
    await expect(counter).toContainText('16/16');
  });
});
