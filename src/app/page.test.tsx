import Page from './page';
import { page } from '@vitest/browser/context'
import { render } from 'vitest-browser-react';

import { test, expect } from 'vitest';

test('renders page correctly', async () => {
  render(<Page />);
  const button = page.getByRole('link', { name: 'Go to characters' });
  expect(button).toBeVisible();
  expect(button).toHaveAttribute('href', '/characters');
});

