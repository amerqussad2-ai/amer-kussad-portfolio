import { test, expect } from '@playwright/test';

test('homepage renders the personal hero and real project cards', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Amer');
  await expect(page.locator('h1')).toContainText('Kussad');
  await expect(page.locator('.portrait-frame img')).toBeVisible();
  await expect.poll(() => page.locator('.portrait-frame img').evaluate(img => img.naturalWidth > 0)).toBe(true);
  await expect(page.locator('.case-cta')).toHaveCount(2);
  await expect(page.locator('.case-cta').nth(0)).toHaveAttribute('href', '/projects/tatweer');
  await expect(page.locator('.case-cta').nth(1)).toHaveAttribute('href', '/projects/casa-luce');
  expect(errors).toEqual([]);
});

test('case study links remain inside the new portfolio', async ({ page }) => {
  await page.goto('/#work');
  await page.locator('.case-cta').nth(1).scrollIntoViewIfNeeded();
  await page.locator('.case-cta').nth(1).click();
  await expect(page).toHaveURL(/\/projects\/casa-luce$/);
  await expect(page.locator('h1')).toContainText('Casa Luce');
  await page.locator('.case-crumbs a').click();
  await expect(page).toHaveURL(/\/#work$/);
});

test('both project detail pages and their screenshots load', async ({ page, request }) => {
  for (const slug of ['tatweer', 'casa-luce']) {
    await page.goto('/projects/' + slug);
    await expect(page.locator('h1')).toBeVisible();
    const images = await page.locator('.case-gallery img').evaluateAll(nodes => nodes.map(el => el.getAttribute('src')));
    expect(images.length).toBeGreaterThan(2);
    for (const image of images) {
      const response = await request.get(image);
      expect(response.ok(), 'Image should load: ' + image).toBeTruthy();
    }
  }
});

test('mobile layout, reduced motion and email copy stay usable', async ({ page, context }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.locator('.menu-toggle').click();
  await expect(page.locator('#main-navigation')).toHaveClass(/open/);
  await page.locator('.menu-toggle').click();
  await page.locator('.contact-v3-copy').scrollIntoViewIfNeeded();
  await page.locator('.contact-v3-copy').click();
  await expect(page.locator('.contact-v3-copy')).toContainText('EMAIL COPIED');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('amerkussad5@gmail.com');
});

test('static case pages contain unique SEO metadata', async ({ request }) => {
  // Preview serves the generated directory HTML at the explicit trailing-slash URLs.
  const expected = [
    ['/projects/tatweer/', 'Tatweer Employment'],
    ['/projects/casa-luce/', 'Casa Luce']
  ];
  for (const [route, title] of expected) {
    const response = await request.get(route);
    expect(response.ok()).toBeTruthy();
    const html = await response.text();
    expect(html).toContain('<title>' + title + ' — Front-End Case Study | Amer Kussad</title>');
    expect(html).toContain('rel="canonical"');
  }
});
