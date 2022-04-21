import { fireEvent, render, screen } from '@testing-library/react';

import ClearButton from './ClearButton';

describe('ClearButton component', () => {
  it('renders button with "Clear" text', () => {
    const fakeDispatch = jest.fn();

    render(<ClearButton dispatch={fakeDispatch} />);

    const button = screen.getByLabelText('clear filters');

    expect(button).toBeVisible();
    expect(button).toHaveTextContent('Clear');
  });

  it('dispatches proper action on click', () => {
    const fakeDispatch = jest.fn();
    const expectedActionObject = { type: 'CLEAR_FILTERS' };

    render(<ClearButton dispatch={fakeDispatch} />);

    const button = screen.getByLabelText('clear filters');
    fireEvent.click(button);

    expect(fakeDispatch).toBeCalledWith(expectedActionObject);
  });
});