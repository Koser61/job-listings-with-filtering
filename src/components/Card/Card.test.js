import { render, screen } from '@testing-library/react';

import Card from './Card';

describe('Component Card', () => {
  it('renders without crashing', () => {
    render(<Card />);
  });

  it('renders proper element when given "article" prop', () => {
    render(<Card article />);
    const article = screen.getByRole('article');
    expect(article).toBeTruthy();
  });

  it('renders proper default classname', () => {
    render(<Card article />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('component');
  });

  it('renders proper classname when given "featured" prop', () => {
    render(<Card article featured />);
    const article = screen.getByRole('article');
    expect(article).toHaveClass('featured');
  });
});