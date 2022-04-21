import { fireEvent, render, screen, within } from '@testing-library/react';

import ActiveFilter from './ActiveFilter';

describe('ActiveFilter component', () => {
  it('renders filter value and remove button with icon', () => {
    const filterValue = 'Frontend';
    const fakeDispatchFunc = () => { return; };

    render(
      <ActiveFilter
        property='role'
        value={filterValue}
        dispatch={fakeDispatchFunc}
      />
    );
  
    const paragraph = screen.getByLabelText('filter name');

    expect(paragraph).toBeVisible();
    expect(paragraph).toHaveTextContent(filterValue);

    const button = screen.getByLabelText('remove filter');
    const buttonIcon = within(button).getByTestId('removeIcon');

    expect(button).toBeVisible();
    expect(buttonIcon).toBeVisible();
  });

  it('dispatches proper action when property prop equals "role"', () => {
    const fakeDispatchFunc = jest.fn();

    render(
      <ActiveFilter
        property='role'
        value='mockValue'
        dispatch={fakeDispatchFunc}
      />
    );

    const button = screen.getByLabelText('remove filter');
    const expectedActionObject = { type: 'SET_ROLE_FILTER', value: '' };

    fireEvent.click(button);

    expect(fakeDispatchFunc).toBeCalledWith(expectedActionObject);
  });

  it('dispatches proper action when property prop equals "level"', () => {
    const fakeDispatchFunc = jest.fn();

    render(
      <ActiveFilter
        property='level'
        value='mockValue'
        dispatch={fakeDispatchFunc}
      />
    );

    const button = screen.getByLabelText('remove filter');
    const expectedActionObject = { type: 'SET_LEVEL_FILTER', value: '' };

    fireEvent.click(button);

    expect(fakeDispatchFunc).toBeCalledWith(expectedActionObject);
  });

  it('dispatches proper action when property prop equals "languages"', () => {
    const fakeDispatchFunc = jest.fn();
    const mockValue = 'mockValue';

    render(
      <ActiveFilter
        property='languages'
        value={mockValue}
        dispatch={fakeDispatchFunc}
      />
    );

    const button = screen.getByLabelText('remove filter');
    const expectedActionObject = { type: 'REMOVE_LANGUAGE_FILTER', value: mockValue };

    fireEvent.click(button);

    expect(fakeDispatchFunc).toBeCalledWith(expectedActionObject);
  });

  it('dispatches proper action when property prop equals "tools"', () => {
    const fakeDispatchFunc = jest.fn();
    const mockValue = 'mockValue';

    render(
      <ActiveFilter
        property='tools'
        value={mockValue}
        dispatch={fakeDispatchFunc}
      />
    );

    const button = screen.getByLabelText('remove filter');
    const expectedActionObject = { type: 'REMOVE_TOOLS_FILTER', value: mockValue };

    fireEvent.click(button);

    expect(fakeDispatchFunc).toBeCalledWith(expectedActionObject);
  });
});