import { test, expect } from '@playwright/test';

test.describe('Questionnaire functionality', () => {
  test('displays questionnaire with all topics', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to questionnaire section
    await page.getByText('Help Us Build the Perfect App for You').scrollIntoViewIfNeeded();
    
    // Check all topics are displayed
    const topics = [
      "How to get your woman to calm down",
      "Healing wounds so they don't cycle",
      "Couple Bonding Exercise",
      "How to get the spark back",
      "Your masculine-feminine energy balance",
      "Sacred sex and Tantra",
      "How to get your man to commit",
      "Healing childhood trauma"
    ];
    
    for (const topic of topics) {
      await expect(page.getByText(topic)).toBeVisible();
    }
  });

  test('validates form submission', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to questionnaire
    await page.getByText('Help Us Build the Perfect App for You').scrollIntoViewIfNeeded();
    
    // Try to submit without filling anything
    await page.getByRole('button', { name: 'Submit & Get Notified' }).click();
    
    // Check validation errors
    await expect(page.getByText('Please select at least one topic')).toBeVisible();
    await expect(page.getByText('First name is required')).toBeVisible();
    await expect(page.getByText('Last name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
  });

  test('successfully submits form with valid data', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to questionnaire
    await page.getByText('Help Us Build the Perfect App for You').scrollIntoViewIfNeeded();
    
    // Select topics
    await page.getByText('How to get the spark back').click();
    await page.getByText('Couple Bonding Exercise').click();
    
    // Fill in contact information
    await page.getByLabel('First Name *').fill('John');
    await page.getByLabel('Last Name *').fill('Doe');
    await page.getByLabel('Email Address *').fill('john.doe@example.com');
    
    // Submit form
    await page.getByRole('button', { name: 'Submit & Get Notified' }).click();
    
    // Check success message
    await expect(page.getByText('Thank You!')).toBeVisible();
    await expect(page.getByText("We've received your preferences")).toBeVisible();
  });

  test('validates email format', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to questionnaire
    await page.getByText('Help Us Build the Perfect App for You').scrollIntoViewIfNeeded();
    
    // Select a topic
    await page.getByText('Sacred sex and Tantra').click();
    
    // Fill form with invalid email
    await page.getByLabel('First Name *').fill('Jane');
    await page.getByLabel('Last Name *').fill('Smith');
    await page.getByLabel('Email Address *').fill('invalid-email');
    
    // Submit form
    await page.getByRole('button', { name: 'Submit & Get Notified' }).click();
    
    // Check email validation error
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
  });
});