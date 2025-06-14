import { test, expect } from '@playwright/test';

test('landing page matches reference design', async ({ page }) => {
  await page.goto('/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  
  // Take screenshot for comparison
  await page.screenshot({ path: 'tests/screenshots/landing-current.png', fullPage: true });
  
  // Test navigation elements
  await expect(page.locator('nav')).toBeVisible();
  await expect(page.getByText('Advice')).toBeVisible();
  await expect(page.getByText('FAQ')).toBeVisible();
  await expect(page.getByText('Reviews')).toBeVisible();
  await expect(page.getByText('Contact')).toBeVisible();
  await expect(page.getByText('Login')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get started' }).first()).toBeVisible();
  
  // Test hero section
  const heroSection = page.locator('section').first();
  await expect(heroSection).toBeVisible();
  await expect(heroSection.getByRole('heading', { level: 1 })).toContainText("If you're on the fence");
  
  // Test carousel controls
  await expect(page.getByLabel('Previous slide')).toBeVisible();
  await expect(page.getByLabel('Next slide')).toBeVisible();
  
  // Test Recent section
  await expect(page.getByText('Recent')).toBeVisible();
  const articleCards = page.locator('article');
  await expect(articleCards).toHaveCount(6);
  
  // Test Popular section
  await expect(page.getByText('Popular')).toBeVisible();
  
  // Test CTA section
  await expect(page.getByText('Help is right at your fingertips')).toBeVisible();
  await expect(page.getByText('Get the support you need from one of our therapists')).toBeVisible();
});