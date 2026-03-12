import { test, expect } from '@playwright/test';

test.describe('Slide Rendering', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('all 16 slides render', async ({ page }) => {
    const slides = page.locator('.swiper-slide');
    await expect(slides).toHaveCount(16);
  });

  test('first slide is active on load', async ({ page }) => {
    const activeSlide = page.locator('.swiper-slide-active');
    await expect(activeSlide).toBeVisible();
  });

  test('each slide has slide-content element', async ({ page }) => {
    const slides = page.locator('.swiper-slide');
    const count = await slides.count();
    
    for (let i = 0; i < count; i++) {
      const slide = slides.nth(i);
      const slideContent = slide.locator('.slide-content');
      await expect(slideContent).toBeVisible();
    }
  });
});
