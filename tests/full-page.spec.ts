import { test } from '@playwright/test';

test('capture full landing page with questionnaire', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  // Wait a bit for everything to render
  await page.waitForTimeout(2000);
  
  // Take full page screenshot
  await page.screenshot({ 
    path: 'tests/screenshots/full-landing-page.png', 
    fullPage: true 
  });
  
  // Also take a screenshot of just the questionnaire section
  const questionnaire = page.locator('text=Help Us Build the Perfect App for You').locator('..');
  if (await questionnaire.isVisible()) {
    await questionnaire.screenshot({ 
      path: 'tests/screenshots/questionnaire-section.png' 
    });
  }
});