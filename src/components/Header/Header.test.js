import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  it('renders header element', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeVisible();
  });
});