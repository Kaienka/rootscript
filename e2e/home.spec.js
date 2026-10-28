import { test, expect } from '@playwright/test'

test('strona startowa się otwiera', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Vite|Kurrent/)
})
