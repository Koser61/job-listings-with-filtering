import { render, screen } from '@testing-library/react';

import Chip from './Chip';

describe('Component Chip', () => {
  it('renders `new` variant properly', () => {
    render(<Chip variant='new' />);
    const chipNew = screen.getByText('NEW!');
    expect(chipNew).toHaveClass('new');
  });

  it('renders `featured` variant properly', () => {
    render(<Chip variant='featured' />);
    const chipFeatured = screen.getByText('FEATURED');
    expect(chipFeatured).toHaveClass('featured');
  });
});