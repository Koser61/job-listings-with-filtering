import { fireEvent, render, screen, within } from '@testing-library/react';

import Filters from './Filters';

describe('Filters component', () => {
  const mockFiltersState = {
    role: 'Frontend',
    level: 'Junior',
    languages: ['JavaScript', 'CSS'],
    tools: ['React', 'Sass'],
  };
  const mockDispatch = jest.fn();

  it('renders active filters and clear button', () => {
    render(<Filters filters={mockFiltersState} dispatch={mockDispatch} />);

    const clearButton = screen.getByLabelText('clear filters');
    expect(clearButton).toBeVisible();
    expect(clearButton).toHaveTextContent('Clear');

    const roleFilter = screen.getByTestId('active-role-filter');
    const roleFilterName = within(roleFilter).getByText(mockFiltersState.role);
    expect(roleFilter).toBeInTheDocument();
    expect(roleFilterName).toBeInTheDocument();

    const levelFilter = screen.getByTestId('active-level-filter');
    const levelFilterName = within(levelFilter).getByText(mockFiltersState.level);
    expect(levelFilter).toBeInTheDocument();
    expect(levelFilterName).toBeInTheDocument();

    const languageFilters = screen.getAllByTestId('active-languages-filter');
    expect(languageFilters).toHaveLength(mockFiltersState.languages.length);

    languageFilters.forEach((languageFilter, i) => {
      const languageFilterName = within(languageFilter).getByText(mockFiltersState.languages[i]);
      expect(languageFilterName).toBeInTheDocument();
    });

    const toolsFilters = screen.getAllByTestId('active-tools-filter');
    expect(toolsFilters).toHaveLength(mockFiltersState.tools.length);

    toolsFilters.forEach((toolsFilter, i) => {
      const languageFilterName = within(toolsFilter).getByText(mockFiltersState.tools[i]);
      expect(languageFilterName).toBeInTheDocument();
    });
  });

  it('passes dispatch function to clear button', () => {
    render(<Filters filters={mockFiltersState} dispatch={mockDispatch} />);

    const clearButton = screen.getByLabelText('clear filters');

    fireEvent.click(clearButton);
    expect(mockDispatch).toBeCalledTimes(1);
  });

  it('passes dispatch function to remove filter buttons', () => {
    render(<Filters filters={mockFiltersState} dispatch={mockDispatch} />);
    
    const removeFilterButtons = screen.getAllByLabelText('remove filter');

    removeFilterButtons.forEach((removeFilterButton) => {
      fireEvent.click(removeFilterButton);
    });

    expect(mockDispatch).toBeCalledTimes(removeFilterButtons.length);
  });
});