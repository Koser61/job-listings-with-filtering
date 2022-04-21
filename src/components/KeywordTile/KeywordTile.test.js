import { fireEvent, render, screen } from '@testing-library/react';

import KeywordTile from './KeywordTile';

describe('KeywordTile component', () => {
  it('renders button with filter value', () => {
    const mockProperty = 'role';
    const mockValue = 'Frontend';
    const mockDispatch = jest.fn();

    render(
      <KeywordTile
        property={mockProperty}
        value={mockValue}
        dispatch={mockDispatch}
      />
    );

    const button = screen.getByRole('button');

    expect(button).toBeVisible();
    expect(button).toHaveTextContent(mockValue);
  });

  it('dispatches proper action when property prop equals "role"', () => {
    const mockProperty = 'role';
    const mockValue = 'Frontend';
    const mockDispatch = jest.fn();
    
    const expectedActionObject = { type: 'SET_ROLE_FILTER', value: mockValue };

    render(
      <KeywordTile
        property={mockProperty}
        value={mockValue}
        dispatch={mockDispatch}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockDispatch).toBeCalledWith(expectedActionObject);
  });

  it('dispatches proper action when property prop equals "level"', () => {
    const mockProperty = 'level';
    const mockValue = 'Senior';
    const mockDispatch = jest.fn();
    
    const expectedActionObject = { type: 'SET_LEVEL_FILTER', value: mockValue };

    render(
      <KeywordTile
        property={mockProperty}
        value={mockValue}
        dispatch={mockDispatch}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockDispatch).toBeCalledWith(expectedActionObject);
  });

  it('dispatches proper action when property prop equals "languages"', () => {
    const mockProperty = 'languages';
    const mockValue = 'HTML';
    const mockDispatch = jest.fn();
    
    const expectedActionObject = { type: 'ADD_LANGUAGE_FILTER', value: mockValue };

    render(
      <KeywordTile
        property={mockProperty}
        value={mockValue}
        dispatch={mockDispatch}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockDispatch).toBeCalledWith(expectedActionObject);
  });

  it('dispatches proper action when property prop equals "tools"', () => {
    const mockProperty = 'tools';
    const mockValue = 'React';
    const mockDispatch = jest.fn();
    
    const expectedActionObject = { type: 'ADD_TOOLS_FILTER', value: mockValue };

    render(
      <KeywordTile
        property={mockProperty}
        value={mockValue}
        dispatch={mockDispatch}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockDispatch).toBeCalledWith(expectedActionObject);
  });
});