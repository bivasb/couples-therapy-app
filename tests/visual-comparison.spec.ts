import { test, expect } from '@playwright/test';

test('visual comparison with reference design', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Take full page screenshot
  const screenshot = await page.screenshot({ fullPage: true });
  
  // Save for manual comparison
  await page.screenshot({ 
    path: 'tests/screenshots/final-design.png', 
    fullPage: true 
  });
  
  // Check key visual elements match reference
  const navigation = page.locator('nav');
  await expect(navigation).toHaveCSS('background-color', 'rgb(243, 244, 246)'); // gray-100
  
  const logo = page.locator('nav .bg-cyan-400').first();
  await expect(logo).toBeVisible();
  
  const heroSection = page.locator('section').first();
  await expect(heroSection).toHaveCSS('background-color', 'rgb(249, 250, 251)'); // gray-50
  
  const ctaSection = page.locator('section').last();
  await expect(ctaSection).toHaveCSS('background-color', 'rgb(126, 34, 206)'); // purple-700
});

test('responsive design check', async ({ page }) => {
  // Desktop view
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.screenshot({ path: 'tests/screenshots/desktop-view.png', fullPage: true });
  
  // Tablet view
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.screenshot({ path: 'tests/screenshots/tablet-view.png', fullPage: true });
  
  // Mobile view
  await page.setViewportSize({ width: 375, height: 812 });
  await page.screenshot({ path: 'tests/screenshots/mobile-view.png', fullPage: true });
});