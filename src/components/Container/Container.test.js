import { render, screen } from '@testing-library/react';

import Container from './Container';

describe('Container component', () => {
  it('renders children', () => {
    const textContent = 'ButtonText';

    render(
      <Container>
        <button>{textContent}</button>
      </Container>
    );

    const button = screen.getByRole('button');

    expect(button).toBeVisible();
    expect(button).toHaveTextContent(textContent)
  });
});